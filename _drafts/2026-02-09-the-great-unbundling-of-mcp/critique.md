---
source: _drafts/2026-02-09-the-great-unbundling-of-mcp/article.md
date: 2026-02-10
---

## Editorial Critique: The Tool Stack

---

### Scott Galloway's Review

**Overall:** The thesis is clean and the structure is sound — you made a decision and you're defending it. Good. But this piece is running on vibes where it should be running on numbers. Your Unbundling of Work article had ATM teller counts, wage percentages, operator employment data. This one has... "maybe 30-50 tokens" and "341 malicious skills." That's it. You're making an argument about infrastructure economics without a single cost figure. How much does an MCP server cost to run per month? How many skills are in the Claude catalog, and what percentage are MCP-backed? You say "this compounds fast" about token costs — show me the compound. You're a developer; you have access to these numbers. Use them.

**Specific notes:**

1. **Zero cost data in a piece about infrastructure economics.** You tell me progressive disclosure saves money "at scale" but never quantify it. Even a back-of-napkin estimate (50 tools × 200 tokens each = 10K tokens per call × $X per million tokens × Y calls/day) would make the argument land ten times harder. Right now it's an assertion.

2. **The Armin Ronacher reference is doing a lot of work without receipts.** "The creator of Flask wrote about moving all his MCPs to skills" — link it or lose it. An unsourced claim about a named person is worse than no claim at all. It reads like you heard this secondhand and hoped nobody would check.

3. **Section 6 is where you get scared.** The first five sections commit to a position. Section 6 hedges for 350 words. "I should name my blind spot" is admirable self-awareness, but then you spend a full paragraph on enterprise IT, a full paragraph on security, a paragraph on the paradox, a paragraph on institutional support, and a paragraph on SOAP/REST — and you end with a question instead of an answer. Pick two of those threads and go hard. Right now it reads like a defendant introducing reasonable doubt against their own case.

4. **The close asks a question instead of throwing a punch.** "Overengineered for whom, and for when?" That's what the essay's supposed to answer, not ask. Your actual closing position is strong: "write a skill, point it at a CLI, move on." That's the line. End there, or end one sentence after it. The question mark at the end deflates everything you built.

5. **The four questions framework is useful but abstract.** Run one real example through all four questions. Take your own blog pipeline — skills calling MCP-backed tools. Walk me through the checklist. Show me the framework working, not just sitting there.

6. **"Skills didn't kill MCP. They unbundled it." is your best line and it's in the right place** — paragraph 3 of the hook. But the title doesn't match. "The Tool Stack" is a filing cabinet label. Your thesis has a verb in it. Use it.

**What would make this great:** Add three numbers, cut Section 6 by a third, and end with a period instead of a question mark.

---

### Morgan Housel's Review

**Overall:** There's a genuinely interesting essay here about what happens when a simpler thing arrives and the complex thing doesn't die — it just gets smaller. That's a pattern worth trusting. The SOAP/REST parallel, the GitHub Actions/Bash analogy, the "markdown files don't break at 3am" compression — these are the moments where the piece comes alive. But the essay moves too quickly through its most interesting territory. You discover the tension in paragraph 3 (skills are powered by MCP under the hood), and by paragraph 4 you've already explained it away with definitions. What if that discovery was the whole first page? The feeling of opening the catalog and realizing the thing you were ready to bury is the thing running everything — that's the story. Right now you tell me it happened. You don't let me feel it happen.

**Specific notes:**

1. **The hook resolves before the reader feels the tension.** Three paragraphs: frustration, validation, reversal. It's efficient, but it's too efficient. The reversal ("most of those skills are powered by MCP under the hood") is the essay's best moment, and you spend one sentence on it before moving to definitions. What if you stayed with the discovery longer? What did it feel like to open that catalog? Which specific skill made you stop and look at what was underneath?

2. **The SOAP/REST paragraph in S6 is the richest idea in the piece, and it's compressed into a supporting point.** "Developers used REST. Compliance teams mandated SOAP. Two tiers, different norms, coexisting for years." There's a whole pattern here about how technology doesn't replace — it stratifies. The simple thing captures volume. The complex thing retreats to high-stakes. Both survive, but they stop talking to each other. That's not just an analogy for MCP. It might be the thesis.

3. **Section 3 (CLIs) explains when it could show.** You tell me agents know CLI idioms from training. But what does that look like? Show me an agent using `gh` well — the moment where pre-training knowledge surfaces and the agent does something a hand-written MCP integration couldn't match. One small scene would replace three paragraphs of explanation.

4. **The "API spec / documentation" metaphor in S4 is doing beautiful structural work.** "You don't debate whether APIs or documentation should exist. You debate what each one should contain." That's the kind of sentence that reorganizes how the reader thinks. Trust it more. Right now it's buried in the middle of a paragraph that's also doing three other things.

5. **S6 has six ideas when it needs two.** Non-developer users, enterprise IT, ClawHub, the governance paradox, institutional support, and the SOAP/REST parallel. Each is interesting. Together they compete for attention. The section reads like you're worried you'll lose the reader if you don't address every objection at once. The opposite is true. Pick the two that haunt you most and let the reader sit with them.

6. **The piece never returns to the personal.** The hook is the most alive writing in the article — your own frustration, your own readiness to write the eulogy. Then you shift to analysis and never come back. What happened after you opened that catalog? Did it change how you build? Did it change what you trust? The reader wants to know how the story ends for *you*, not just for the ecosystem.

**What would make this resonate longer:** Stay with the catalog discovery in the hook, cut S6 to two ideas, and close with what you actually changed in your own workflow.

---

### What Both Would Praise

**Scott Galloway's praise:**
- **The hook works.** Personal frustration → hot take validation → reversal in three paragraphs. You earn the reader's attention honestly.
- **"Markdown files don't break at 3am."** That's the kind of line that gets quoted. It compresses the whole operational argument into one image.
- **The four questions framework is genuinely useful.** Developers will screenshot this and send it to their teams. That's the kind of value that gets shared.
- **You name your own bias in S6.** "I'm the ideal skills user" — that's credibility-building honesty. Most writers skip this.

**Morgan Housel's praise:**
- **The unbundling thesis is original and durable.** "Skills didn't kill MCP. They unbundled it" is the kind of reframing that changes how people talk about a topic. It's not a hot take — it's a lens.
- **The "API spec / documentation" metaphor.** One comparison that makes the whole stack legible. This is compression at its best.
- **The security paradox paragraph.** "Skills succeed because they're simple. Scaling them might require the complexity they were built to avoid." That's quietly devastating. It doesn't resolve, and it shouldn't.
- **The piece trusts one idea.** You don't try to cover everything about AI infrastructure. You pick the unbundling and stay with it. That discipline is rare.

---

### Summary

| Galloway would say | Housel would say |
|---|---|
| Add numbers. Token costs, catalog counts, MCP server costs. Make the economics real. | Show the catalog discovery scene. Let the reader feel the reversal, not just understand it. |
| Section 6 hedges too much. Pick your strongest counterargument and commit. | Section 6 has too many ideas. Pick two and go deep. |
| The close should punch, not ask. End on a position. | The close should return to the personal. What did you actually change? |
| Verify or cut the Ronacher reference. Unsourced named claims are liability. | The SOAP/REST parallel deserves more room. It might be the real thesis. |
| Run one real example through the four questions. Show the framework working. | Stay in the hook longer. The discovery is the story. |
| The title is bland. "The Tool Stack" is a label, not a thesis. | The "API spec / documentation" metaphor deserves more space to breathe. |

**Where they agree:** Section 6 needs surgery — it's doing too much and landing too little. The close underdelivers relative to the strength of the argument. The piece's best moments (the hook reversal, "markdown files don't break at 3am," the security paradox) deserve more trust and more room.
