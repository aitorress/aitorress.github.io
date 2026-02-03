# Article Creation Workflow

This document describes the recommended workflow for creating articles using the skills system. The workflow takes you from a raw idea to a polished, publish-ready article.

## Overview

```
idea-expansion → draft-analyze → [research + input] → draft-structure → draft-expand → draft-polish → [draft-enrich] → publish
```

The workflow has 9 skills organized into 5 phases:

| Phase | Skills | Purpose |
|-------|--------|---------|
| 1. Ideation | `idea-expansion` | Turn raw thoughts into structured drafts |
| 2. Analysis | `draft-analyze` | Identify gaps and plan next steps |
| 3. Gathering | `draft-research`, `draft-input` | Fill gaps with external data and author perspective |
| 4. Writing | `draft-structure`, `draft-expand`, `draft-polish` | Build and refine the article |
| 5. Enrichment | `draft-enrich` | Add depth and curves to a solid foundation (optional) |

**Optional at any phase:** `draft-critique` provides editorial feedback through the lenses of Scott Galloway and Morgan Housel.

---

## Phase 1: Ideation

### Skill: `idea-expansion`

**When to use:** You have a hot take, half-formed thought, or provocative observation you want to explore.

**Triggers:** Phrases like "hot take", "I've been thinking", "someone said", or any raw opinion.

**What it does:**
- Pressure-tests the idea from multiple angles
- Steel mans the argument, then finds weaknesses
- Identifies first and second-order effects
- Names the underlying tension or paradox
- Connects to adjacent ideas and thinkers
- Generates raw material (quotable bits, metaphors)

**Output:** A structured draft saved to `_drafts/YYYY-MM-DD-[slug].md`

**Example usage:**
```
"Hot take: most people who say they want feedback actually want validation"
```

**Next step:** Run `draft-analyze` when you're ready to develop the draft further.

---

## Phase 2: Analysis

### Skill: `draft-analyze`

**When to use:** You have a draft (from idea-expansion or written manually) that you want to develop into a full article.

**What it does:**
- Identifies the core idea in one sentence
- Classifies the piece type (tension-driven, explainer, synthesis, exploration)
- Notes what's already working
- Catalogs gaps: what needs research, what needs author input, what needs more thinking
- Flags what might be cut
- Recommends next steps

**Output:**
- Creates working folder: `_drafts/YYYY-MM-DD-[slug]/`
- Saves analysis to `analysis.md`
- Creates `STATUS.md` to track progress

**Example usage:**
```
"Analyze _drafts/2026-01-21-the-foundation-paradox.md"
```

**Next step:** Based on the analysis, run `draft-research` and/or `draft-input` to fill identified gaps. These can run in any order or in parallel.

---

## Phase 3: Gathering

### Skill: `draft-research`

**When to use:** The analysis identified gaps that need external data, examples, studies, or sources.

**What it does:**
- Searches for specific data or statistics
- Finds historical examples or case studies
- Gathers expert perspectives or quotes
- Surfaces counterarguments
- Verifies source credibility
- Synthesizes findings into usable material

**Output:** Research document saved to `research/[topic-slug].md` in the working folder

**Example usage:**
```
"Research ATM effect on bank teller employment"
"Research outsider art and Art Brut"
```

**Notes:**
- Can run multiple times for different gaps
- Each research topic gets its own file
- Updates `STATUS.md` after each run

---

### Skill: `draft-input`

**When to use:** The analysis identified gaps that require personal experience, judgment, or opinion.

**What it does:**
- Asks 3-5 targeted questions about:
  - Personal experiences or anecdotes
  - Value judgments or opinions
  - Which counterarguments feel compelling
  - How to resolve tensions in the piece
  - What the author actually believes
- Captures responses in a structured format

**Output:** Author perspectives saved to `author-input.md` in the working folder

**Example usage:**
```
"Gather author input for the foundation paradox draft"
```

**Notes:**
- Can run multiple times; new input is appended with date headers
- Questions are specific (not "what do you think about X?")
- Asks for stories, not abstractions

**Next step:** Once research and author input are gathered, run `draft-structure`.

---

## Phase 4: Writing

### Skill: `draft-structure`

**When to use:** You've gathered research and author input, and you're ready to outline the article.

**What it does:**
- Reviews all material (draft, research, author input)
- Distills the core argument into one sentence
- Designs an article arc appropriate to the piece type:
  - **Tension-driven:** Hook → uncomfortable truth → evidence → counterargument → resolution
  - **Explainer:** Framing → logical progression → examples → takeaway
  - **Synthesis:** Landscape → organizing principle → connections → insight
  - **Exploration:** Question → multiple angles → uncertainty → tentative landing
- Proposes what to cut and why
- Notes alternative structures considered

**Output:** Structure proposal saved to `structure.md`

**Example usage:**
```
"Propose structure for the foundation paradox draft"
```

**Important:** The author must approve the structure before expansion begins. Don't proceed without explicit approval.

**Next step:** After approval, run `draft-expand`.

---

### Skill: `draft-expand`

**When to use:** The structure is approved and you're ready to write the full article.

**What it does:**
- Expands ONE section at a time
- Draws from draft, research, and author input
- Maintains the author's voice (see Voice Guidelines below)
- Waits for author approval after each section
- Builds `article.md` incrementally

**Output:** Evolving article in `article.md`, section by section

**Process:**
1. Expand Section 1
2. Present for review
3. Revise if needed
4. Get approval
5. Move to Section 2
6. Repeat until complete

**Example usage:**
```
"Expand the foundation paradox draft"
```

**Voice Guidelines:**
- Vary sentence length: longer setups, short punches
- Conversational but substantive tone
- Use "you" for immediacy, "I" for personal experience
- Avoid em-dashes (use periods, commas, colons, parentheses instead)
- Don't overuse punchy one-liners

**Next step:** After all sections are approved, run `draft-polish`.

---

### Skill: `draft-polish`

**When to use:** All sections are expanded and approved. This is the final pass before publishing.

**What it does:**

**Pass 1 - Voice Consistency:**
- Checks sentence rhythm and tone
- Flags sections that sound generic or "AI-written"
- Ensures metaphor coherence

**Pass 2 - Self-Critique:**
- Structure: Does the opening hook? Is the insight buried? Does the close land?
- Argument: Are claims supported? Are counterarguments addressed?
- Tone: Is urgency calibrated? Any false modesty or smugness?
- Originality: Does this say something new?

**Pass 3 - Tightening:**
- Cuts ~15% of word count
- Removes throat-clearing, redundancy, padding
- Sharpens vague language

**Pass 4 - Source Links:**
- Cross-references article against research files
- Adds links for key references (people, studies, concepts)
- Links sparingly—only substantive references, not every mention
- Verifies URLs are correct and accessible

**Output:**
- Polish report with analysis and changes
- Final polished article
- Publishing checklist

**Example usage:**
```
"Polish the foundation paradox article"
```

**Next step:** Review the polished article. If it feels too lean, run `draft-enrich`. Otherwise, publish.

---

## Phase 5: Enrichment (Optional)

### Skill: `draft-enrich`

**When to use:** The article is polished and solid, but feels too lean. It makes its point and leaves, but could benefit from more depth, tangents, or "curves" that make it richer and more interesting.

**Key insight:** It's easier to add richness to a strong foundation than to build depth into a messy draft. That's why this step comes *after* polish, not before.

**What it does:**
- Reviews the original draft for interesting threads that were cut for leanness
- Identifies opportunities to add:
  - **Parallel examples** (e.g., the meeting version of a writing insight)
  - **Psychological angles** (why we behave this way)
  - **Structural explanations** (what systems/incentives cause this)
  - **Important nuances** (caveats that prevent oversimplification)
  - **Expert references** (authorities who reinforce the point)
- Proposes specific additions with placement recommendations
- Keeps the core argument intact while adding texture

**Output:**
- List of proposed additions with rationale
- Updated article with new sections woven in
- Re-run of polish pass on new content

**Example usage:**
```
"The article feels too lean. What curves could we add?"
"Review the original draft for threads we could bring back"
```

**Process:**
1. Review original draft for cut material
2. Identify 3-5 potential additions
3. Discuss with author which feel right
4. Write new sections
5. Re-run polish pass on expanded article

**When NOT to use:**
- The article already has good depth
- The leanness is intentional (short-form piece)
- Adding more would dilute the core message

**Next step:** After enrichment, run `draft-polish` again on the new content, then publish.

---

## Optional: Editorial Critique

### Skill: `draft-critique`

**When to use:** You want editorial feedback through the lenses of writers you admire (Scott Galloway and Morgan Housel). Use at any point when you want an outside perspective on what's working and what isn't.

**What it does:**
- Provides two distinct critiques from two different editorial perspectives:
  - **Scott Galloway:** Data-driven, direct, demands stakes and actionable takeaways
  - **Morgan Housel:** Story-driven, patient, values depth over breadth
- Identifies genuine strengths (what both critics would praise)
- Gives specific suggestions, not generic feedback
- Creates a summary table comparing their perspectives

**Output:** Critique document (saved to `critique.md` if in a working folder)

**Example usage:**
```
"Critique this draft"
"Get Galloway/Housel feedback on the AI article"
```

**When to run it:**
- After `draft-analyze` to get perspective before investing in research
- After `draft-expand` to catch issues before polish
- After `draft-polish` as a final gut-check before publishing
- On published articles for retrospective learning

**Notes:**
- The critique informs revision but doesn't change the article directly
- You decide which feedback to act on
- Running it multiple times at different stages can surface different issues

---

## Working Folder Structure

Each draft gets a dedicated folder that persists across sessions:

```
_drafts/
  2026-01-21-the-foundation-paradox/
    STATUS.md          # Track current phase and progress
    analysis.md        # Full draft analysis
    author-input.md    # Gathered author perspectives
    structure.md       # Approved outline
    article.md         # Evolving article (builds during expansion)
    research/
      topic-one.md     # Research findings
      topic-two.md
```

### STATUS.md

The status file enables resumption across sessions. It tracks:
- Current phase
- Completed steps with dates
- In-progress items
- Still needed items
- Open questions
- Key decisions made

---

## Workflow Flexibility

### Skip Steps When Appropriate

Not every piece needs every step:

- **Simple opinion piece:** Skip research, go straight from analysis to structure
- **Already-researched topic:** Skip research, focus on author input
- **Short post:** May not need full structure proposal
- **Already clear structure:** Skip structure, go straight to expansion

### Parallel Steps

Research and author input can run in parallel or in any order. Both inform the structure.

### Iteration

Any step can be re-run:
- Re-analyze if the draft changes significantly
- Research additional topics as they emerge
- Gather more author input if gaps appear during expansion
- Polish multiple times if needed

---

## Best Practices

1. **Don't skip analysis.** It prevents wasted work by clarifying what's needed upfront.

2. **Trust the structure phase.** Time spent designing the arc saves time during expansion.

3. **Approve sections individually.** Catching problems early is cheaper than fixing a complete draft.

4. **Keep STATUS.md updated.** It's your save point for returning to work later.

5. **Cut aggressively.** Not every interesting thing from research or the original draft earns inclusion.

6. **Preserve your voice.** The goal is your writing at its best, not sanitized prose.

7. **Use the artifacts.** The working folder files exist so you can reference, edit, and annotate them between sessions.

---

## Publishing

When the polished article is ready:

1. Review the publishing checklist from `draft-polish`
2. Move the article from `_drafts/[folder]/article.md` to `_posts/YYYY-MM-DD-[slug].md`
3. The working folder can be kept as an archive or deleted

---

## Quick Reference

| Skill | Input | Output | Key Question |
|-------|-------|--------|--------------|
| `idea-expansion` | Raw thought | Structured draft in `_drafts/` | What's the underlying tension? |
| `draft-analyze` | Draft file | Analysis + working folder | What's missing? |
| `draft-research` | Research question | `research/[topic].md` | What does the evidence say? |
| `draft-input` | Draft context | `author-input.md` | What does the author believe? |
| `draft-structure` | All gathered material | `structure.md` | What's the argument arc? |
| `draft-expand` | Approved structure | `article.md` (incremental) | Does each section earn its place? |
| `draft-polish` | Complete draft | Polished article | Is this ready to publish? |
| `draft-enrich` | Polished but lean article | Richer article with curves | What depth is missing? |
| `draft-critique` | Any draft or article | Editorial feedback | What would Galloway/Housel say? |
