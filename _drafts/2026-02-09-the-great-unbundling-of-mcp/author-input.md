## Author Input: The Great Unbundling of MCP

*Gathered: 2026-02-09*

### Personal Experience

**MCP failures:** When MCPs broke or frustrated, the author replaced them with APIs or CLIs directly -- not with another MCP, not with a skill pointing at an MCP. The instinct was always to drop down to the simpler execution layer. This is consistent with the friend conversation ("I'd rather roll my own connections") and reinforces the piece's thesis: developers default to the simplest thing that works.

**Skills:** No single "proudest skill" moment came to mind. Skills are pragmatic, workaday tools for the author -- not memorable breakthroughs. This is actually revealing: skills succeed by being unremarkable. They work, you move on. The blog pipeline itself (idea-expansion, draft-analyze, etc.) is the strongest example of skill-driven workflow, but it's infrastructure, not a story.

**No "I actually need an MCP" wall moment.** The author hasn't personally hit a case where a skill failed and an MCP was the answer. The MCP advocacy is intellectual (it *should* be right for certain cases) rather than experiential (it *was* right for me).

### Author's Position

**The verdict (strongest material from this session):**

> MCP or skills alone is not enough. A comprehensive system would be something like: skills for instructions, MCP for execution, powered by a CLI. But depending on security, standardization, whether you're shipping to others or not -- you can strip the MCP and leave just the skill and CLI.

This is the article's thesis in practical terms. The full stack is skills + MCP + CLI. But MCP is the *optional* layer -- the one you add when the requirements demand it, not the one you start with. The default is skill + CLI. MCP earns its way in.

**Decision criteria for "do we need MCP?"** Four axes:
1. **Complexity** — Is the integration complex enough that a protocol layer adds value?
2. **Hidden IP** — Do you need to hide internal architecture from the consumer?
3. **Determinism** — Is "the agent will probably follow instructions" not good enough?
4. **Standardization (N×M)** — Are you shipping this to multiple platforms/consumers?

If the answer to most of these is no, skip MCP. Skill + CLI.

**Code Mode:** No conviction. Interesting pattern, not a thesis the author wants to defend. Should be minimized or cut from the article.

### What to Emphasize

- The **layered stack** framing: skills (instructions) → MCP (execution) → CLI (runtime). MCP is the middle layer you can strip out when you don't need it.
- The **four decision axes** for when MCP earns its place (complexity, IP, determinism, standardization).
- The **friend conversation** as the article's emotional spine -- two developers working through this in real time.
- The practical reality that **most developers will never need the MCP layer** for their daily work, but it's not dead -- it's narrower than advertised.

### What to Cut or Minimize

- **Code Mode** — no author conviction. Mention in a line at most, don't develop.
- **Lengthy effects sections** — the author's responses are terse and practical; the article should match that energy rather than sprawling into predictions.
- **Academic analogies** (Conway's Law, POSIX parallel) — the author thinks in decision criteria and practical tradeoffs, not theoretical frameworks. Keep Worse-Is-Better and Christensen if they serve the argument; cut the rest.

### Raw Quotes

- "MCP or skills alone is not enough. A comprehensive system would be skills for instructions, MCP for execution, powered by a CLI."
- "Depending on security, standardization, whether you're shipping or not -- you can strip the MCP and leave just the skill and CLI."
- Decision axes: "complexity, hidden IP, amount of determinism, standardization"
- On replacing MCPs: "usually an API or CLI" (not another MCP -- always dropped down, never sideways)

### Implications for Structure

The author's position suggests a cleaner article arc than the current draft:
1. Hook: the "did skills kill MCP" question (from friend convo)
2. The unbundling observation: skills ate the instruction layer
3. The full stack: skills + MCP + CLI as the ideal, with MCP as optional middle
4. The four axes: when MCP earns its place
5. The honest admission: most developers can strip MCP and be fine
6. The counter: but if you're shipping to others, MCP is still the answer (N×M, IP, determinism)
7. Landing: MCP isn't dead, it's narrower. And that's fine.
