# Draft Analysis: The Great Unbundling of MCP

*Analyzed: 2026-02-09*

## Core Idea

Skills ate MCP's instruction layer and pushed it down to pure execution -- but the interesting question isn't "did Skills kill MCP?" (they didn't), it's whether MCP's remaining territory (enterprise auth, process isolation, deterministic execution, N×M interop) is big enough to justify the ecosystem's complexity, or whether it'll keep shrinking as skills and CLIs expand what "simpler will do" means.

## Piece Type

**Synthesis** — but it wants to be **tension-driven**. Right now the draft maps a landscape (here's where skills win, here's where MCP wins, here's the convergence). That's useful but not distinctive -- a dozen articles already do this. The tension hiding inside is more personal: the author is a developer who intellectually defends MCP but experientially avoids it, and the friend conversation surfaces this contradiction directly. The piece becomes much sharper if it's organized around that tension rather than around a taxonomy of tradeoffs.

## What's Working

- **The "unbundling" thesis is the right frame.** "Skills ate the instruction layer, MCP retreats to execution" is a cleaner, more original claim than "skills vs MCP." It gives the piece a structural argument most competitors don't have. No other article in the source list uses this framing.

- **The three-layer Steel Man is well-constructed.** Layer 1 (instruction war won), Layer 2 (CLIs as silent killer), Layer 3 (MCP owns genuine protocol problems) is a clear progression that builds rather than merely lists. The layers depend on each other.

- **The friend conversation is the best material and it knows it.** Two moments in particular are better than anything in the published sources:
  - "MCP is the API spec, Skills is the documentation for the API" — sharper than any analogy in the research
  - "I've always had bad experiences with MCPs. But if you open the skills catalog, they're almost all powered by MCP" — this IS the unbundling thesis in two sentences

- **The "Worse Is Better" and Christensen connections are strong.** These aren't decorative -- they're structural. The pattern of a simple alternative eating the incumbent's volume while the incumbent retreats upmarket to enterprise is exactly what's happening. This gives the piece intellectual credibility beyond the AI-tools bubble.

- **The Devil's Advocate section doesn't pull punches.** The ClawHub security finding (341 malicious skills), the N×M problem, and the "MCP's real audience hasn't arrived yet" argument are genuinely challenging to the bull case. The draft doesn't let the author off the hook.

- **Strong one-liners throughout the Raw Material section.** "A skill is a markdown file. An MCP server is a service. Markdown files don't break at 3am." and "The N×M problem is the strongest argument for MCP that nobody encounters in practice -- yet" are both article-ready.

## Gaps to Fill

### Needs Research

1. **The "skills catalog is almost all powered by MCP" claim needs verification.** The friend and author both assert this but don't have numbers. How many skills in the Claude catalog use MCP under the hood? How many use CLIs? How many use direct API calls? This is the single most important data point for the unbundling thesis -- if true, it proves skills are a layer ON TOP of MCP, not a replacement.

2. **The ClawHub security incident needs more detail.** 341 malicious skills is cited but sourced only to one article (Friedrichs-IT, Feb 2026). What specifically happened? What was the response? Did it trigger governance changes? This is the strongest counterargument to skills' simplicity and deserves more than a sentence.

3. **Concrete token efficiency numbers.** The draft claims progressive disclosure saves significant tokens but doesn't quantify it. Eric Ma's Substack is cited as having token efficiency analysis -- pull actual numbers. "MCP loads X tokens per tool definition on average; a skill descriptor is ~30-50 tokens" would make the argument concrete.

4. **MCP adoption numbers under Linux Foundation.** How many MCP servers exist? How many are actively maintained? Is the ecosystem growing or consolidating? The claim that MCP is retreating needs evidence that server proliferation is actually slowing.

5. **The Armin Ronacher case study needs specifics.** The draft mentions he "moved all MCPs to skills" but doesn't detail what he moved, why, or what the result was. His blog post (lucumr.pocoo.org, Dec 2025) is cited -- pull the concrete experience, not just the headline.

### Needs Author Input

1. **Your actual experience with MCP vs skills.** The friend conversation reveals fragments -- OAuth tokens getting wiped, preferring to roll your own connections, using coding agents. But the draft never integrates this directly. What MCPs have you used? Which ones did you abandon and why? What skills have you written? This is what separates your piece from a research summary.

2. **The NCL example your friend mentioned.** Your friend suggested MCP might be the right choice for exposing services to other companies (abstracting complexity, protecting IP). You agreed. Can you develop this? A concrete "here's when I'd ship an MCP vs a skill" scenario grounded in your work would be more persuasive than abstract arguments about opaque boundaries.

3. **Where do you actually land?** The draft is analytically balanced but your conversation reveals you lean toward skills. The piece needs a commitment. Your "Unbundling of Work" article committed to a position (optimistic but clear-eyed). This piece needs the same. Are you saying "MCP's remaining territory is real but shrinking, and most developers should default to skills + CLI"? Say it.

4. **Do you think Code Mode is the real disruptor?** It's mentioned as a second-order effect but your level of conviction matters. If you think agents writing TypeScript in sandboxes eventually makes both skills AND MCP less relevant, that changes the article's ending significantly.

### Needs More Thinking

1. **The article has an identity crisis: landscape survey vs argument.** The idea-expansion format naturally produces a balanced map of the territory. But your best published pieces (Unbundling of Work, The Labor of Brevity) take positions. This draft maps the terrain thoroughly but doesn't quite commit to a thesis the reader can argue with. "Skills unbundled MCP" is an observation. What's the *argument*?

2. **The friend conversation is underused.** It's referenced in "The Tension You're Sensing" and "Raw Material" but it should be structural. The back-and-forth reveals the exact thought process a developer goes through: starting skeptical of MCP, getting pushback, discovering the N×M argument, arriving at "they're layers." That journey IS the article. Consider making it the spine rather than the seasoning.

3. **Code Mode is either a major section or a distraction.** Right now it's a second-order effect (point 4). But the claim that "LLMs are better at writing code to call tools than at calling tools directly" is radical enough to either develop fully or cut. If it's true, it undermines the entire skills-vs-MCP framing. If it's speculative, it distracts from the unbundling thesis.

4. **The N×M problem needs a verdict, not just a description.** Your friend brought this up as MCP's strongest remaining argument. You agreed it's real but noted skills might solve it as they become cross-vendor. Where does this net out? Is N×M a durable advantage for MCP or a temporary one? The draft presents both sides but doesn't weigh them.

5. **Too many analogies compete for attention.** Recipe/kitchen, GitHub Actions/Bash, USB-C, playbook/stadium, worse-is-better, Christensen disruption, SOAP/REST, Docker/Kubernetes, carpenter/power tools. The draft needs to pick 2-3 and commit. The rest dilute rather than reinforce.

## Consider Cutting

- **Most of the First-Order and Second-Order Effects sections.** These are thinking tools from the idea-expansion template, not article content. Effects 1-5 in each section are useful for the author's understanding but read as predictions rather than arguments. Pick the 2-3 sharpest and fold them into the main argument; cut the rest.

- **The "Adjacent Ideas / Connections" section as a standalone section.** The Worse-Is-Better and Christensen connections are strong enough to weave into the body. Conway's Law and the POSIX parallel are weaker and more academic than your usual voice. The vibecoding connection is interesting but might be better as a one-line callback than a paragraph.

- **The "Questions Worth Exploring" section.** These are the author's research prompts, not reader-facing content. The strong ones (Q1 inversion, Q5 N×M test, Q7 friend's framing) should become questions the article answers. The rest can go.

- **The recipe/kitchen analogy.** The draft itself flags this as "overused." Trust that instinct. The playbook/stadium alternative is fresher but also feels forced. The strongest framing is the one that's already winning: "API spec vs documentation for the API" (from your friend) or "instruction layer vs execution layer" (from the analysis). These are precise rather than metaphorical.

- **The emerging third pattern (Code Mode)** unless you're willing to give it a full section with concrete examples. As a parenthetical it raises more questions than it answers.

## Recommended Next Steps

**Run `/draft-input` first.** This piece has an unusual gap profile: the research is already extensive (15+ sources in the notes), but the author's personal experience and position are barely present. The friend conversation proves you have sharp, lived opinions about this -- the article needs those opinions directly. Specifically:
1. Your concrete MCP experiences (what broke, what worked)
2. Your concrete skill-writing experiences
3. Your verdict on where the boundary settles
4. Whether you think Code Mode is real or hype

**Then run `/draft-structure`** to reorganize from the idea-expansion template into an article arc. The current structure (Seed → Steel Man → Devil's Advocate → Effects → Tension) is a great thinking tool but not an article structure. Your published work uses a different shape: hook with a relatable moment, build the argument through concrete examples, acknowledge the counter, commit to a position, end with a question that sticks. The friend conversation could serve as the structural spine -- starting with "do skills eat MCP's lunch?" and following the argument through to "they're layers of the same stack, and here's where the boundary actually is."

**Research is optional, not urgent.** The raw notes already contain more source material than most published articles on this topic. The main research gaps (token efficiency numbers, ClawHub details, skills catalog breakdown) would add precision but aren't blocking the article. They can be filled during expansion.
