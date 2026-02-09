---
title: "The Great Unbundling of MCP"
date: 2026-02-09
status: draft
tags: [ai, mcp, skills, agents, architecture, developer-tools]
---

# The Great Unbundling of MCP

## The Seed

Skills didn't kill MCP. They did something more interesting: they unbundled it. MCP used to claim two jobs -- telling agents what tools exist and how to use them (the instruction layer) AND providing the execution infrastructure to actually call those tools. Skills ate the instruction layer whole, and now MCP is left defending a smaller but more honest territory: authenticated execution, process isolation, and deterministic server-side control. The question isn't whether MCP is dead. It's whether the territory MCP still owns is big enough to sustain the ecosystem's complexity.

Your conversation with your friend crystallized something the research notes dance around but never quite name: the agent doesn't care what's behind the skill. A skill pointing at `gh pr create`, a skill pointing at a REST endpoint, a skill pointing at an MCP tool -- the agent's performance is roughly equivalent. The differentiators aren't about agent capability at all. They're about the infrastructure *around* the agent: who needs auth, who needs isolation, who needs to hide their internals, who needs to solve N×M.

## Steel Man

The strongest version of this argument has three layers, and you need all three to see the full picture.

**Layer 1: Skills won the instruction war, full stop.** Progressive disclosure is simply a better architecture for teaching agents what to do. Loading 50 tool definitions into context on every call is wasteful in the same way that importing every module in a codebase at startup is wasteful. Skills solved this with a pattern so obvious it seems inevitable in retrospect: tiny descriptor upfront (~30-50 tokens), heavy details fetched lazily. MCP's prompt and resource primitives tried to do this same job but lacked the filesystem-native simplicity that made skills viral. When Armin Ronacher -- the guy who built Flask -- moves all his MCPs to skills citing auth headaches and API instability, that's a signal. When OpenAI Codex adopts the same pattern, that's confirmation.

**Layer 2: CLIs are the silent killer.** This is the sharpest edge in the argument and the one most people miss. Models have been trained on millions of CLI interactions. They've been RL'd on `gh`, `aws`, `gcloud`, `docker`, `kubectl`. A skill that says "use `gh pr create --title X --body Y`" leverages pre-training knowledge that no MCP server can replicate. The agent doesn't just know the command -- it knows the idioms, the flags, the error patterns, the structured output formats. CLI auth stores tokens locally under OS-level permissions, inside the user's trust boundary. No server to maintain, no port to manage, no JSON config to debug. The GitHub MCP server was always overengineered for a problem `gh` already solved better. This generalizes to every service with a mature CLI -- which is most of the services developers actually use daily.

**Layer 3: MCP still owns execution for problems that genuinely need a protocol.** Here's where MCP earns its keep. A company running fraud detection across twenty internal microservices doesn't want to ship a skill that documents their architecture. They want `create_payment(amount, currency, destination)` -- an opaque boundary where the agent decides *when* and *what*, and everything after that is deterministic, server-controlled, and auditable. Non-technical users can't run `gh auth login` in a terminal; they need OAuth flows in a browser. Enterprise IT needs centralized policy control over which agents access which services. Persistent database connections and real-time event streams need a protocol, not a markdown file. These are real problems. They're just a much smaller set of problems than "universal connector for all AI."

The strongest articulation comes from the Goose/Block team: "Saying Skills killed MCP is about as accurate as saying GitHub Actions killed Bash." GitHub Actions didn't make Bash irrelevant -- it moved higher up the stack and uses Bash underneath. Skills did the same thing to MCP. The vast majority of skills in the Claude and Codex catalogs are powered by MCP under the hood. Skills didn't replace the execution layer; they replaced the need to *think about* the execution layer.

## Devil's Advocate

Several things could break this tidy narrative:

**The "unbundling" might be temporary.** MCP is under the Linux Foundation with AWS, Google, Microsoft, and Bloomberg as platinum members. That's not a dying ecosystem -- that's an ecosystem consolidating enterprise backing while skills remain a loose cross-vendor convention without a standards body, central registry, or formal versioning. If the agent world goes mainstream (not just developers), the governance infrastructure matters more than the developer ergonomics. Skills could win the developer tier while MCP wins the enterprise tier -- which is where the money is.

**Security is skills' Achilles heel, and it's not theoretical.** January 2026: researchers found 341 malicious skills on ClawHub -- credential exfiltration, session theft, keylogging, reverse shells. Skills share the agent's environment with zero process isolation. MCP servers run in isolated processes where a compromised server can't read credentials from other servers. The radical simplicity of "it's just a markdown file" also means there's no sandboxing, no permission boundaries, no trust model beyond "did you read the file before running it?" As agents become more autonomous, this attack surface becomes more terrifying, not less.

**The N×M problem is real, and skills don't solve it yet.** Your friend nailed this. MCP gives you one server per service, and every compatible app gets it (N+M instead of N×M). Skills are heading toward cross-vendor standardization, but they're not there yet. If you're Stripe, you ship one MCP server and every agent platform can use it. With skills, you're hoping every agent platform reads SKILL.md the same way -- and right now, that's an assumption, not a standard.

**The determinism gap is load-bearing in high-stakes domains.** "The agent will probably follow the skill's instructions correctly" is fine for `gh pr create`. It's not fine for `transfer_funds` or `prescribe_medication`. Natural language instructions are inherently open to misinterpretation. MCP's structured tool schemas give you clear input/output contracts -- once the agent decides to call the tool, execution is guaranteed. For payments, healthcare, legal -- the domains where AI will create the most economic value -- "might follow instructions correctly" is a dealbreaker.

**The fatal flaw in the bull case:** It conflates "Skills are better for developers using coding agents" with "Skills are better." The developer-centric view is a bubble. Most future agent users won't have terminals, won't know CLIs, won't manage local auth tokens. MCP's real audience -- the next hundred million people using agents through consumer apps -- hasn't arrived yet. Skills are winning the present. MCP might be building for a future that's bigger.

## First-Order Effects

If this unbundling thesis is correct:

1. **MCP server proliferation slows dramatically.** The gold rush of "let me build an MCP server for X" is over. Most of those servers get replaced by skills pointing at CLIs or existing APIs. Only services with genuine protocol needs (auth complexity, persistence, enterprise governance) justify the MCP overhead.

2. **The instruction layer becomes skill-native across all agent platforms.** OpenAI, Anthropic, and others converge on some variant of "markdown file with progressive disclosure" as the standard way to teach agents. MCP's prompt and resource primitives atrophy from disuse.

3. **MCP consolidates around a smaller, defensible core.** Authentication, process isolation, persistent connections, cross-vendor interop. It stops trying to be the universal connector and becomes the enterprise execution layer. A more honest positioning, but also a less exciting pitch for the ecosystem.

4. **Token costs drop.** Teams stop dumping thousands of tokens of tool definitions into every context window. Progressive disclosure becomes the default pattern, saving real money at scale.

5. **A new role emerges: the "skill author" as integration expert.** Writing a good skill -- one that teaches an agent the right conventions, the right CLI patterns, the right error handling -- becomes a specialized craft. It's not engineering in the traditional sense, but it's not just documentation either.

## Second-Order Effects

1. **MCP becomes the "enterprise tax."** Just like REST APIs didn't kill SOAP (SOAP found its permanent home in enterprise systems that needed its guarantees), MCP becomes the thing you adopt when governance requirements demand it. Developers use skills; compliance teams mandate MCP. This creates a two-tier ecosystem with different norms, and the bridge between them becomes a source of friction and opportunity.

2. **The CLI renaissance accelerates.** If agents are better with CLIs and skills teach CLI patterns, every SaaS company now has a strong incentive to invest in their CLI. Companies that didn't bother (because no human wanted to use their CLI) suddenly need one because agents prefer it. We might see CLI quality become a competitive differentiator for developer tools. `stripe` CLI is already excellent; expect others to follow.

3. **Security becomes the fork in the road.** The ClawHub incident was a preview. Skills without a trust model eventually force one of two outcomes: either skills develop their own sandboxing and verification infrastructure (becoming more complex, more like... MCP), or the ecosystem accepts the risk and agents stay primarily developer tools where the user is also the sysadmin. The choice determines whether agents go mainstream.

4. **"Code Mode" eats from the other end.** If skills are too lightweight for complex integrations and MCP tool schemas are too heavy for context windows, agents writing TypeScript in a sandbox is the escape hatch. LLMs have seen vastly more TypeScript than tool-calling examples. This third pattern could end up being the real threat to MCP -- not skills replacing tools, but code replacing tool schemas entirely.

5. **The power shifts from protocol designers to skill authors.** When MCP controlled both instruction and execution, Anthropic and the Linux Foundation shaped how agents interacted with services. With skills eating the instruction layer, any developer who writes a good SKILL.md shapes how agents interact with their domain. The composability of the system increases, but so does the fragmentation.

6. **Agent performance convergence.** Your friend's insight is the sleeper: a skill telling the agent to use a CLI, an API, or an MCP tool produces roughly similar agent performance. If that's true, the differentiator is never "which execution layer" but always "which execution layer is easiest to set up, maintain, and secure for this specific context." This commoditizes MCP in contexts where simpler alternatives exist and validates MCP only where those alternatives don't.

## The Tension You're Sensing

You're really asking: **Is infrastructure complexity justified by the problems it solves, or does it persist because ecosystems have momentum?**

This is the same question that's been asked about SOAP vs REST, Kubernetes vs simpler deployment, microservices vs monoliths. The pattern is always the same: a complex system claims universality, a simpler alternative demonstrates that most use cases didn't need the complexity, and the complex system retreats to the subset of problems that genuinely require it. The fight is never about whether the complex system has valid use cases -- it always does. The fight is about *how big that subset actually is.*

Your conversation with your friend reveals the second tension: **You're trying to steel-man MCP but your lived experience keeps undercutting the argument.** You'd rather roll your own connections. Your OAuth keys get wiped. The skills catalog is where the action is. You intellectually know MCP has valid territory (N×M, enterprise auth, IP protection), but you've never personally hit a problem where MCP was the right answer. And you're wondering: is that because I'm a developer using coding agents (the ideal skills user), or is MCP's remaining value genuinely thin?

The honest answer is probably both. You're in skills' sweet spot, and MCP's remaining territory is real but narrower than its advocates claim.

## Adjacent Ideas / Connections

**The "Worse Is Better" pattern (Richard Gabriel, 1989).** Unix beat Lisp machines because simplicity of implementation was more important than correctness. Skills are "worse" than MCP -- less correct, less secure, less deterministic -- but they're simpler to implement, easier to understand, and more composable. The same dynamic that gave us Unix over ITS, REST over SOAP, and JSON over XML is playing out in agent infrastructure.

**Christensen's "good enough" disruption.** MCP is the incumbent with all the features: auth, isolation, persistence, governance. Skills are the insurgent that's "good enough" for 80% of use cases and radically simpler. Classic disruption: the incumbent retreats upmarket to enterprise while the simple alternative captures the volume. The question, as always, is whether the enterprise tier is big enough to sustain the ecosystem.

**Conway's Law applied to agent architecture.** The structure of agent tooling reflects the structure of the organizations building it. Anthropic built both MCP and Skills -- but MCP came from the "platform team" mindset (standard protocols, enterprise-grade, extensible), while Skills came from the "developer experience" mindset (filesystem-native, minimal overhead, just works). The unbundling is partially Conway's Law in action: two different organizational impulses produced two different architectures for overlapping problems.

**The POSIX parallel.** CLIs winning for agents because models have pre-training knowledge of them is structurally similar to why POSIX conventions persist: once something is deeply embedded in the training corpus (or the developer ecosystem), alternatives need to be dramatically better, not just slightly better. MCP needs to be dramatically better than `gh + skill` for GitHub integration -- and it isn't.

**Your earlier "Vibecoding" draft connects here.** Skills are to agent integrations what vibecoding is to software development: they lower the barrier so dramatically that the "proper" way (MCP servers, like "proper" engineering) needs to justify its complexity rather than assuming it. The expert who writes an MCP server for organizational auth has vertical depth. The developer who writes a skill pointing at `gh` has horizontal reach. Same dynamic, different domain.

**Armin Ronacher's "Worse Is Better" trajectory.** The Flask creator's experience is a perfect case study. He didn't abandon MCP because skills were architecturally superior in every way. He abandoned it because the operational pain (auth breakage, API instability, configuration complexity) exceeded the protocol's benefits for his use cases. This is how technology transitions actually happen -- not through theoretical superiority but through pain thresholds.

## Questions Worth Exploring

1. **Inversion:** What if skills are the temporary pattern and MCP is the durable one? Skills work because agents are used by developers who can manage CLIs and local auth. If agents go mainstream to non-developers, does the simplicity advantage reverse into a capability gap?

2. **The ClawHub question:** 341 malicious skills is a small number now. What happens when it's 34,000? Does skills' radical simplicity become its existential threat? Does this force skills to develop governance infrastructure that makes them... complex?

3. **Who benefits?** Anthropic created both MCP and Skills. Skills are arguably cannibalizing their own protocol's instruction layer. Was this deliberate? Is Anthropic positioning skills as the developer hook while MCP becomes the enterprise revenue play?

4. **Historical parallel:** When Docker simplified deployment, Kubernetes emerged to orchestrate the complexity Docker created. Could Skills be the Docker to some future orchestration layer that ends up looking a lot like MCP?

5. **The N×M test:** Find a concrete case where the N×M problem actually bit someone. Not in theory -- in practice. How many services are genuinely integrated by multiple agent platforms today? Is the N×M problem a real pain point or a theoretical concern that justifies enterprise complexity?

6. **Edge case: Code Mode.** If agents writing TypeScript in sandboxes becomes the dominant pattern, both skills AND MCP lose relevance. Skills become unnecessary because the agent generates its own integration logic. MCP becomes unnecessary because the agent calls APIs directly via code. Is Code Mode the real disruptor hiding behind the skills-vs-MCP debate?

7. **Your friend's framing as article thesis:** "MCP is the API spec, Skills is the documentation for the API" -- this is clean and quotable, but is it accurate? If so, the entire debate is a category error: you don't debate whether APIs or documentation should exist. You debate what each one should contain.

## Raw Material

- "Skills didn't kill MCP. They unbundled it." -- the thesis in one line.
- "MCP went from 'USB-C port for AI' to 'the right choice when nothing simpler will do.' That's a real positioning, but it's a long walk from where it started."
- "Your OAuth tokens getting wiped ten times a day isn't a bug in MCP -- it IS MCP. The protocol works; the operational reality doesn't."
- "A skill is a markdown file. An MCP server is a service. Markdown files don't break at 3am."
- "The agent doesn't care what's behind the skill. CLI, API, MCP -- the performance is the same. The differentiator is always operational: who maintains it, who secures it, who pays for it."
- "MCP's real audience hasn't arrived yet. It's building for a future where agents are used by people who've never opened a terminal. The question is whether that future arrives before the ecosystem loses patience."
- The recipe/kitchen analogy is strong but overused. Try: "Skills are the playbook. MCP is the stadium infrastructure. You need both to run a game, but most pickup games happen in the park."
- "Skills exposed the overengineering. MCP consolidated around the problems that actually need a protocol. That's not death -- it's maturation."
- Tension from the friend convo: "I've always had bad experiences with MCPs. But the skills catalog is almost all powered by MCP." -- this is the whole article in two sentences. Skills are the UX layer; MCP is the plumbing layer. The plumbing works best when you forget it's there.
- "The N×M problem is the strongest argument for MCP that nobody encounters in practice -- yet."
- "341 malicious skills on ClawHub. Skills' simplicity is its selling point and its attack surface. Same coin."

## Next Steps

1. **Pick an article angle and commit.** "The Great Unbundling of MCP" is the strongest structure from your notes. It gives you a clear thesis (skills ate the instruction layer, MCP retreats to execution), a clear counter (MCP's remaining territory might be bigger than developers think), and a clear resolution (they're different layers of the same stack, and the interesting question is where the boundary settles). The friend conversation is perfect color throughout -- it shows you're genuinely wrestling with this, not just writing a hot take.

2. **Test the "skills are MCP-powered" claim empirically.** Open the Claude skills catalog and the Codex skills catalog. Count how many skills use MCP under the hood vs. CLIs vs. direct API calls. This gives you a concrete data point for the "unbundling" thesis: skills are the face, MCP is the engine, and the user never needs to know.

3. **Write the counter-piece in your head.** The strongest version of "MCP Is the Future" would argue: (a) developers are <5% of future agent users, (b) enterprise governance will mandate protocol-level control, (c) security incidents with skills will force a governance layer that converges toward MCP's model. If you can write that counter-piece convincingly, your main article will be sharper for acknowledging it.
