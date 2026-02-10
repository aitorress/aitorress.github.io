# Revision Plan: The Tool Stack

Source: _drafts/2026-02-09-the-great-unbundling-of-mcp/article.md
Critique: _drafts/2026-02-09-the-great-unbundling-of-mcp/critique.md
Date: 2026-02-10

---

Prioritized revision items, highest ROI first:

## 1. Trim Section 6 — too many threads competing
**Status:** pending

- **Issue:** Both critics flag S6 as overloaded. It currently covers six distinct threads (non-developer users, enterprise IT, ClawHub/security, governance paradox, institutional support, SOAP/REST) in one section. Galloway calls it "introducing reasonable doubt against your own case." Housel says the ideas compete for attention.
- **Why it matters:** S6 is the piece's most important counterweight — it's where the argument earns credibility by acknowledging limits. But overloading it dilutes every individual point. The reader remembers nothing because everything fights for attention.
- **Suggested fix:** Keep 2-3 threads, cut or compress the rest. Strongest candidates to keep: (1) the ClawHub security story + governance paradox (concrete, surprising, unresolved), (2) SOAP/REST parallel (the pattern that explains where this is heading). Candidates to compress: enterprise IT (fold into one sentence), institutional support (fold into SOAP/REST paragraph).
- **Questions to resolve:** Which threads does the author consider load-bearing? Is the non-developer user point essential or can it fold into the SOAP/REST framing?

## 2. Strengthen the close — end on a position, not a question
**Status:** pending

- **Issue:** Galloway: "The question mark at the end deflates everything you built." Housel: "The reader wants to know how the story ends for you." Both agree the close underdelivers. "Overengineered for whom, and for when?" is thoughtful but reads as a hedge after 1,500 words of argument.
- **Why it matters:** The close is the last thing the reader carries. A question invites the reader to shrug. A position invites them to agree or push back — both are more engaging.
- **Suggested fix:** End on "write a skill, point it at a CLI, move on" (Galloway's instinct) or return to the personal — what the author actually changed in their own workflow after the catalog discovery (Housel's instinct). Could do both: personal change → practical advice → full stop.
- **Questions to resolve:** Does the author want to land on the practical ("here's what to do") or the personal ("here's what I do now")? The current close tries both and commits to neither.

## 3. Add numbers to the progressive disclosure argument
**Status:** pending

- **Issue:** Galloway: "You're making an argument about infrastructure economics without a single cost figure." The piece asserts that progressive disclosure saves money "at scale" but never quantifies it. The author's previous article (Unbundling of Work) used specific numbers (20→13 tellers, 25% wage drop, 350K operators). This piece has almost none.
- **Why it matters:** The progressive disclosure argument is the technical foundation of the entire thesis. Without numbers, it reads as opinion. With even back-of-napkin math, it reads as analysis.
- **Suggested fix:** Add one concrete estimate. Example: "A typical MCP integration loads 50 tool definitions averaging 200 tokens each — 10,000 tokens per call, before the agent does anything. At scale, that's [X dollars/month] in context costs that skills eliminate by default." Doesn't need to be exact. Needs to exist.
- **Questions to resolve:** Does the author have access to real token costs from their own usage? Even approximate figures from Anthropic's pricing page would work.

## 4. Expand the hook — stay with the catalog discovery
**Status:** pending

- **Issue:** Housel: "The reversal is the essay's best moment, and you spend one sentence on it." The moment of opening the skills catalog and finding MCP underneath is currently compressed into paragraph 3. It's the emotional spine of the piece but it's told, not shown.
- **Why it matters:** The hook earns the reader's attention. Right now it's efficient but not immersive. A few more concrete details (which skill? what did you see when you looked underneath?) would make the reversal land harder.
- **Suggested fix:** Add 2-3 sentences to paragraph 3. Name a specific skill. Describe the moment of looking at what powers it. Don't over-expand — the current brevity is mostly good. Just give the discovery one more beat.
- **Questions to resolve:** Which specific skill/integration triggered the realization? Was it gradual or a single moment?

## 5. Verify or cut the Armin Ronacher reference
**Status:** pending

- **Issue:** Galloway: "An unsourced claim about a named person is worse than no claim at all." The Ronacher blog post couldn't be verified via web search (noted in STATUS.md). The reference currently sits without a link.
- **Why it matters:** Named, specific claims need sources. Without a link, skeptical readers will check, find nothing, and question the rest of the piece.
- **Suggested fix:** Author verifies the source exists and adds the link, OR rephrases to remove the specific attribution ("developers like the creator of Flask have written about moving from MCP to skills" → too vague, probably better to just cut and let the Ronacher-type argument live in the "markdown files don't break at 3am" line which makes the same point without attribution).
- **Questions to resolve:** Can the author find the original source? If not, is the Ronacher mention worth keeping without verification?

## 6. Show the CLI advantage with a concrete scene
**Status:** pending

- **Issue:** Housel: "Section 3 explains when it could show." The CLI section tells the reader that agents know CLI idioms from training but never demonstrates it.
- **Why it matters:** A single concrete example (agent using `gh` effectively, generating a complex command from a vague instruction) would make the pre-training argument visceral instead of abstract.
- **Suggested fix:** Add 2-3 sentences showing an agent using a CLI well. Could be a real example from the author's experience, or a before/after (MCP JSON config vs. the agent just knowing `gh pr create --draft --label bug`).
- **Questions to resolve:** Does the author have a memorable example of an agent's CLI fluency surprising them?

## 7. Consider the title
**Status:** pending

- **Issue:** Galloway: "'The Tool Stack' is a filing cabinet label. Your thesis has a verb in it." The current title doesn't hint at the argument or create curiosity.
- **Why it matters:** Title is the first impression. "The Tool Stack" could be about anything. "The Great Unbundling of MCP" (original working title) is more specific and more intriguing, though perhaps too jargon-heavy.
- **Suggested fix:** Options: (a) Keep "The Tool Stack" if the author prefers understated, (b) return to "The Great Unbundling of MCP," (c) something that captures the thesis: "Skills Didn't Kill MCP," "The Unbundling," or a variation.
- **Questions to resolve:** Does the author prefer a quiet title or one that signals the argument? Who's the primary audience — people already in the skills-vs-MCP debate, or a broader developer audience?
