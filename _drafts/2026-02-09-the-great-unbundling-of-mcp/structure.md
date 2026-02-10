# Proposed Structure: The Great Unbundling of MCP

**Status:** Approved
**Date:** 2026-02-09

**Author decisions:**
- Title changed to "The Tool Stack"
- Own the friend's insights directly (no "a friend said" framing)
- ClawHub gets a few more sentences of detail in Section 6

---

## Core Argument

The full stack is skills (instructions) + MCP (execution) + CLI (runtime), but MCP is the optional middle layer — the one you add when complexity, IP protection, determinism, or multi-platform standardization demand it. For most developers, skill + CLI is the default. MCP earns its way in; it doesn't start there.

## Piece Type

**Tension-driven** — The engine is a personal contradiction: the author has always had bad experiences with MCPs and defaults to CLIs, but the skills everyone loves are almost all powered by MCP under the hood. Skills didn't kill MCP. They made it invisible. The article follows that realization to its practical conclusion.

## Headings

**Yes** — The piece has 5 distinct argumentative phases and runs ~1500-1800 words. Readers scanning for "do I need MCP or not?" should be able to find their section. Headings have voice, not labels. No heading for hook or close.

---

## Proposed Outline

### 1. [No heading — dive in]
**Purpose:** Open with the personal contradiction that IS the article. Earn the reader's trust by admitting you're biased, then pivot to the insight that changed your framing.
**Content:**
- I've always had bad MCP experiences. OAuth tokens wiped. Servers breaking overnight. Configuration hell. I'd rather roll my own connections.
- Then I opened the skills catalog — the thing everyone says replaced MCP — and almost every skill is powered by MCP under the hood.
- That's when I realized: skills didn't kill MCP. They unbundled it.
- Brief definition for readers unfamiliar: Skills = markdown instructions (the recipe), MCP = execution protocol (the kitchen), CLIs = the tools the kitchen actually uses.
**Source:** Friend conversation ("I've always had bad experiences with MCPs. But the skills catalog is almost all powered by MCP"), author input
**Estimated length:** Short-medium (4-6 sentences). Don't belabor — state the contradiction, drop the thesis, move on.

---

### 2. A Markdown File and Some Examples
**Purpose:** Establish that skills won the instruction layer, and explain why. This is the "what happened" section.
**Content:**
- MCP used to do two jobs: tell the agent what tools exist (instruction) AND provide the infrastructure to call them (execution). Skills ate the first job entirely.
- Progressive disclosure is simply better for teaching agents. MCP loads all tool definitions into context upfront. Skills load a ~30-50 token descriptor and fetch details lazily. When you're paying per token, this compounds.
- The pattern was so obviously right that it went cross-vendor fast — Anthropic, OpenAI Codex, others adopting the same markdown-with-frontmatter approach.
- Armin Ronacher (Flask creator) moved all his MCPs to skills, citing auth breakage and API instability. Not because skills were architecturally superior in every way — because the operational pain exceeded the protocol's benefits.
- This is the "Worse is Better" pattern repeating: Unix over Lisp machines, REST over SOAP, JSON over XML. The simpler thing wins not because it's better, but because it's good enough and dramatically easier.
**Source:** Draft Steel Man Layer 1, Adjacent Ideas (Worse Is Better)
**Estimated length:** Medium-long (2 paragraphs). This is the core claim — give it room.

---

### 3. The Part Nobody Talks About
**Purpose:** Introduce CLIs as the underappreciated force in this debate. This is the sharpest edge — what makes MCP feel redundant for developers — and what most "skills vs MCP" articles miss.
**Content:**
- Models have been trained on millions of CLI interactions. They've been RL'd on `gh`, `aws`, `gcloud`, `docker`, `kubectl`.
- A skill saying "use `gh pr create --title X --body Y`" leverages pre-training knowledge no MCP server can replicate. The agent knows the commands, the flags, the idioms, the error patterns, the structured output formats.
- CLI auth stores tokens locally, under OS permissions, inside the user's trust boundary. No server to maintain, no port to manage.
- The GitHub MCP server was always overengineered for a problem `gh` already solved better. This generalizes to every service with a mature CLI.
- From the friend conversation: CLIs win not because "agents are better at them" — but because of progressive disclosure at the CLI level too. The agent can run `jira issues fetch --help` and get just the fetch docs instead of loading the whole API surface.
- Models only get better at this with each training run. The trajectory favors CLIs.
**Source:** Draft Steel Man Layer 2, friend conversation (progressive disclosure insight, `gh` discussion)
**Estimated length:** Medium (1-2 paragraphs). Sharp and concrete. `gh` is the case study; don't over-generalize.

---

### 4. The Plumbing Is Still There
**Purpose:** The pivot. After two sections arguing skills + CLIs dominate, reveal that MCP didn't actually disappear — it just became invisible. This is the unbundling thesis.
**Content:**
- Open the skills catalog in Claude or Codex. Most of those skills are MCP-powered under the hood. Skills are the UX layer; MCP is the plumbing.
- Skills didn't replace the execution layer. They replaced the need to *think about* the execution layer. The plumbing works best when you forget it's there.
- The Goose/Block team got it right: "Saying Skills killed MCP is about as accurate as saying GitHub Actions killed Bash." GitHub Actions sits on top of Bash. Skills sit on top of MCP.
- A friend put it sharper: "MCP is the API spec. Skills are the documentation for the API." You don't debate whether APIs or docs should exist. You debate what each should contain.
- What MCP lost: the instruction layer. What it kept: authenticated execution, process isolation, persistent connections, cross-vendor interop. A smaller territory, but a more honest one.
**Source:** Draft Steel Man Layer 3, friend conversation ("MCP is the API spec"), Goose/Block quote
**Estimated length:** Medium (1-2 paragraphs). This section needs to land the reframe cleanly. Don't rush it.

---

### 5. Four Questions Before You Reach for MCP
**Purpose:** The practical takeaway. Give readers a decision framework. This is what makes the piece useful, not just interesting.
**Content:**
- The full stack is skills for instructions, MCP for execution, powered by a CLI underneath. But MCP is the optional middle layer. You add it when the requirements demand it — you don't start there.
- Four questions to decide if you need MCP:
  1. **Complexity** — Is the integration complex enough that a protocol layer adds value over a skill pointing at a CLI or API?
  2. **Hidden IP** — Do you need to hide internal architecture? A skill is markdown on the client's machine. An MCP server is an opaque boundary — twenty microservices, proprietary algorithms, none of it visible.
  3. **Determinism** — Is "the agent will probably follow instructions correctly" good enough? For `gh pr create`, yes. For `transfer_funds`, no. MCP's structured schemas give you clear input/output contracts.
  4. **Standardization (N×M)** — Are you shipping this to multiple agent platforms? MCP gives you one server per service, every compatible app gets it (N+M). Skills aren't cross-platform standard yet.
- If most answers are no: skill + CLI. If several are yes: MCP earns its place.
- The "I'd ship an MCP" test: if you're exposing services to other companies — abstracting complexity, protecting IP, auto-updating — you ship an MCP, not a skill.
**Source:** Author input (four axes, "I'd ship an MCP" moment), draft Devil's Advocate (determinism, N×M)
**Estimated length:** Medium-long (2 paragraphs including the list). The list is the structural heart — make it scannable.

---

### 6. MCP's Real Audience Hasn't Shown Up Yet
**Purpose:** The honest counter. Don't let the reader think this is a one-sided "skills win" take. Acknowledge what MCP is still building toward.
**Content:**
- The bull case for skills has a fatal flaw: it conflates "better for developers using coding agents" with "better." Developer-centric is a bubble.
- Non-technical users can't run `gh auth login`. They need OAuth flows in a browser. MCP enables that. Enterprise IT needs centralized policy control over agent access. MCP provides that.
- Security is skills' Achilles heel, and it's not theoretical. Researchers found 341 malicious skills on ClawHub in January 2026 — credential exfiltration, session theft, keylogging. Skills share the agent's environment with zero process isolation. MCP servers run isolated.
- MCP is now under the Linux Foundation with AWS, Google, Microsoft, Bloomberg as platinum members. That's not a dying ecosystem. That's an ecosystem consolidating around enterprise needs.
- MCP might be doing what SOAP did after REST arrived: retreating to the domains where its guarantees actually matter (enterprise, compliance, high-stakes). Developers use skills; compliance teams mandate MCP.
- The question: is that enterprise audience big enough to sustain the ecosystem? Or will agents remain primarily developer tools where skill + CLI dominates?
**Source:** Draft Devil's Advocate (security, N×M, non-technical users, enterprise governance), Adjacent Ideas (Christensen disruption, SOAP parallel)
**Estimated length:** Medium-long (2 paragraphs). The strongest counter-section should get real space. Don't undercut it by being brief.

---

### 7. [No heading — land it]
**Purpose:** Commit to a position. Don't trail off with "it depends."
**Content:**
- MCP isn't dead. It's narrower. And that's fine.
- Skills didn't kill MCP — they pushed it to where it belongs: authenticated execution, process isolation, deterministic control for high-stakes domains.
- For most developers, most of the time: write a skill, point it at a CLI, move on. When you need complexity, IP protection, determinism, or multi-platform shipping — that's when MCP earns its way back in.
- MCP went from "USB-C port for AI" to "the right choice when nothing simpler will do." That's a long walk from where it started. But it's a more honest positioning.
- Close on the forward-looking tension: MCP's remaining value depends on how fast agents go mainstream beyond developers. If they stay developer tools, skills + CLIs win. If they go mass-market, MCP's enterprise infrastructure becomes load-bearing. The answer to "is MCP overengineered?" might just be: "for whom, and for when?"
**Source:** Draft raw material, author input (verdict)
**Estimated length:** Short-medium (4-6 sentences). Land it clean. The last line should stick.

---

## What's Not Included

| Cut | Reason |
|-----|--------|
| **Code Mode / TypeScript sandbox pattern** | Author has no conviction. Interesting aside, not an argument worth developing. |
| **First-Order and Second-Order Effects sections** | Predictions, not arguments. The 2-3 sharpest points (CLI renaissance, enterprise tax) are folded into sections 3 and 6. |
| **Conway's Law** | Academic. Doesn't match the author's practical voice. |
| **POSIX parallel** | Same — interesting but too theoretical for this piece. |
| **Recipe/kitchen analogy** | Draft flagged it as overused. The friend's "API spec / documentation" framing is sharper and more precise. |
| **Playbook/stadium analogy** | Forced. The piece doesn't need metaphors — it has precise technical framing. |
| **Docker/Kubernetes parallel** | Speculative. The piece commits to what HAS happened, not what might. |
| **Vibecoding draft connection** | Interesting callback but tangential. Doesn't serve the reader who wants to know "should I use MCP or skills?" |
| **Questions Worth Exploring section** | Author's research prompts. The strong ones (N×M test, friend's framing as thesis) became part of the structure. |
| **Most analogies** | Draft had 9+ competing analogies. Structure retains 3: Worse-is-Better (section 2), GitHub Actions/Bash (section 4), SOAP/REST (section 6). These are structural, not decorative. |

---

## Open Questions

1. **Title:** Keep "The Great Unbundling of MCP"? Alternatives: "Skills Didn't Kill MCP" (more direct), "The Optional Layer" (captures thesis). The current title is punchier but slightly grand for a ~1600-word piece.

2. **How much friend conversation to quote directly?** The structure uses the friend's insights (API spec framing, progressive disclosure, "skills catalog runs on MCP") but doesn't narrate the conversation. Should there be a "A friend asked me..." moment, or is it better to own the insights directly?

3. **The ClawHub detail level.** One sentence is enough for the argument ("341 malicious skills, credential exfiltration, zero process isolation"). But it's the strongest counterpoint to skills — does it deserve a few more sentences?

---

## Alternative Structures Considered

**A. Narrate the friend conversation as the spine.** Open with "A friend texted me: did skills eat MCP's lunch?" and follow the back-and-forth to the conclusion. Rejected because it risks feeling like a chat-log recap rather than an argument. The friend's insights are better owned and sharpened by the author than quoted verbatim.

**B. Pure taxonomy: "When to use Skills / When to use MCP / When to use both."** Clean, useful, but a dozen articles already do this. Doesn't distinguish the piece. The personal tension and the unbundling thesis are what make it worth reading.

**C. Lead with the four decision axes, then backfill the argument.** "Here's how to decide, and here's why" structure. Rejected because the reader needs to understand the unbundling before the decision framework makes sense. The axes are the payoff, not the hook.

---

## Estimated Total Length

~1500-1800 words. Seven sections. Long enough to make the argument with evidence, short enough that a developer reads it in one sitting during lunch.
