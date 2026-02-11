---
source: _drafts/2026-02-09-the-great-unbundling-of-mcp/article.md
date: 2026-02-11
pass: 2 (post-revision, post-research integration)
---

## Editorial Critique: Of MCPs and Skills (Pass 2)

---

### Scott Galloway's Review

**Overall:** Much better. The numbers are here now and they hit. 93 tools, 55,000 tokens, CLI 77 vs MCP 60, 33% better efficiency. That's the kind of data that makes someone stop scrolling. The close lands on a period instead of a question mark. Good. S6 stopped cross-examining its own case. The piece reads like someone who's done the work and arrived at a position. Two things still bug me, and they're both smaller than last time: the definitions paragraph is doing too much heavy lifting for paragraph four of a blog post, and the ClawHub section is the longest paragraph in the piece when it should be the sharpest.

**Specific notes:**

1. **The definitions paragraph (line 14) is a speed bump.** You've got a reader hooked by "Skills didn't kill MCP. They unbundled it." and then you ask them to sit through a three-sentence glossary. The people who need definitions won't read this article. The people who read this article don't need definitions. Consider cutting it entirely, or pushing it to a footnote/aside. The article already defines each term through context as it uses them.

2. **The ClawHub paragraph (line 66) is dense.** "Credential exfiltration. Session theft. Keylogging. Reverse shells." is punchy, but then you explain the attack vector, explain typosquatting, explain MCP's isolation model. That's three explanations stacked. The reader who knows what credential exfiltration means doesn't need the attack vector spelled out. The reader who doesn't know will skim regardless. Pick: punchy list OR detailed explanation. Both in the same paragraph is trying to serve two audiences at once.

3. **"I'd bet most of the skills people use daily still run on MCP under the hood" is honest and I like it.** But the S4 opener now reads almost too tentative after two sections of confident argument. "Here's the thing, though" is a good pivot. "I'd bet" adds uncertainty. Together they might overcorrect. You can be honest without hedging twice.

4. **The four questions still don't have a worked example.** I said this last time. "If you're Stripe" is the closest you get. Walk one real scenario through all four questions in two sentences. Show the framework, don't just describe it.

**What would make this great:** Cut the definitions paragraph and tighten the ClawHub paragraph. The piece is 90% there.

---

### Morgan Housel's Review

**Overall:** This has matured nicely. The research additions feel earned, not bolted on. The Zechner benchmark in S4 does something important: it gives the "protocol is just plumbing" thesis a name and a test, which makes it feel discovered rather than asserted. The close now has a personal arc that mirrors the hook, which gives the piece a shape it didn't have before. The "I'd bet" in S4 is a small moment of honesty that I appreciate. The piece trusts its argument more than it did in the last draft. What lingers for me is that the two strongest ideas in the piece (the security paradox and the SOAP/REST stratification) are still sharing a section, and each would resonate more with a little room to breathe.

**Specific notes:**

1. **The security paradox and the SOAP/REST parallel are both big ideas compressed into S6.** The paradox (skills needing governance that looks like MCP) is philosophical. The SOAP/REST parallel is historical. They're doing different work. Right now the reader processes both in quick succession and neither fully lands. What if the paradox got one more sentence of implication? Or what if the SOAP/REST paragraph opened with a beat of silence (a shorter transitional sentence) before the analogy?

2. **"Markdown files don't break at 3am" is still the best line in the piece.** It does more work than any paragraph. Trust lines like this. You have another one: "Skills succeed because they're simple. Scaling them might require the complexity they were built to avoid." That's a sentence that reorganizes how someone thinks. Both of these could be the kind of thing a reader texts to a friend.

3. **S2 paragraph 2 (line 22) is carrying a lot of narrative.** Cross-vendor adoption, migration pattern, operational pain, "markdown files don't break," Worse is Better, REST over SOAP. That's six ideas in one paragraph. The first half (cross-vendor adoption) and the second half (why transitions happen) are related but distinct. A paragraph break between "gave them back" and "A skill is a markdown file" would let each half breathe.

4. **The "API spec / documentation" metaphor in S4 is still doing beautiful structural work.** "You don't debate whether APIs or documentation should exist." That compression hasn't lost any force through the revisions. It's the sentence where the thesis clicks for the reader.

5. **The close works now.** "After I opened that catalog and saw MCP running underneath everything, I stopped trying to pick a side." That's the personal resolution the piece needed. It mirrors the hook without repeating it. And "write a skill, point it at a CLI, move on" is the right final line. It's practical and confident.

**What would make this resonate longer:** Give the security paradox and the SOAP/REST parallel each a moment to land separately, and consider splitting S2's second paragraph into two.

---

### What Both Would Praise

**Scott Galloway's praise:**
- **The numbers land.** 93 tools/55K tokens, CLI 77 vs MCP 60, 33% efficiency gap. This is the evidence the first draft was missing. Now the progressive disclosure argument is analysis, not opinion.
- **The close is right.** Personal beat, practical advice, period. No question mark. The reader leaves knowing what to do.
- **"I'd ship an MCP to external consumers before I'd ship a skill."** That's a usable heuristic. The kind of line a reader applies to their next decision.
- **The Zechner and browser benchmarks are named and linked.** Readers can verify. That builds trust.

**Morgan Housel's praise:**
- **The piece has shape now.** Hook (personal frustration) → argument (skills won instructions) → discovery (MCP is still underneath) → framework (four questions) → honesty (my bias) → close (personal resolution). That's a complete arc.
- **"Skills succeed because they're simple. Scaling them might require the complexity they were built to avoid."** That's the kind of sentence that haunts you after reading. It doesn't resolve. It shouldn't.
- **"I'd bet most of the skills people use daily still run on MCP under the hood."** The shift from confident argument to honest uncertainty at the S4 pivot is exactly right. It earns the reader's trust.
- **The Zechner addition is the best research integration.** It doesn't feel like a citation. It feels like a discovery that confirms the thesis. That's the right way to use evidence.

---

### Summary

| Galloway would say | Housel would say |
|---|---|
| Cut the definitions paragraph. It's a speed bump after a great hook. | Split S2 paragraph 2 into two. Six ideas in one paragraph is too many. |
| Tighten the ClawHub paragraph. Punchy list OR explanation, not both. | Give the security paradox and SOAP/REST each a moment to breathe. |
| The double hedge in S4 ("Here's the thing, though" + "I'd bet") overcorrects. Pick one. | The "I'd bet" is exactly the right amount of uncertainty. Don't lose it. |
| Run one real scenario through all four questions. | The close is complete. Don't touch it. |

**Where they agree:** The piece is substantially stronger than the first draft. The numbers, the named benchmarks, the personal close, and the tighter S6 all landed. What remains is finishing work: a couple of paragraphs that could be split or trimmed, not structural issues. The argument is sound, the evidence is real, and the voice is consistent. This is close to publish-ready.
