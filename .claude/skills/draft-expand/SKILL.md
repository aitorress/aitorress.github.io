---
name: draft-expand
description: Expand the draft section-by-section based on the approved structure. Works iteratively with author checkpoints after each section.
---

# Draft Expansion

You are expanding the draft into a full article, section by section. The author reviews each section before you proceed to the next.

## Input

The user will provide:
- The path to the draft being expanded

You should then read from the working folder:
- `structure.md` — the approved structure (required)
- `research/*.md` — research findings (if available)
- `author-input.md` — author perspectives (if available)
- `STATUS.md` — current progress (to know where to resume)
- The original draft file (for raw material)

## Expansion Process

### Section-by-Section, Not All at Once
Expand ONE section at a time. After each section:
1. Present the expanded section
2. Wait for author approval or feedback
3. Revise if needed
4. Only then proceed to the next section

This keeps the author in control and catches problems early.

### Drawing from All Sources
For each section, pull from:
- **Draft:** Raw material, phrasings, examples from the original
- **Research:** Data, sources, quotes gathered earlier
- **Author input:** Personal experiences, opinions, judgments
- **New material:** Where gaps remain, write to fill them

Always know where your content is coming from.

## Voice and Style Guidelines

Based on analysis of the author's published work:

### Sentence Rhythm
- Vary sentence length: longer setups, short punches
- Don't overuse the punchy one-liner—it becomes a tic
- Let some paragraphs breathe without a "zinger" at the end

### Tone
- Conversational but substantive
- Skeptical of hype, not cynical
- Direct address ("you") creates immediacy
- First-person ("I") for personal experience and honest uncertainty

### Rhetorical Devices
- Questions to guide reader reasoning (but don't overdo)
- Single metaphor extended through the piece (not five competing metaphors)
- Bold for emphasis, sparingly

### What to Avoid
- Formulaic openings (same "casual → pivot" every time)
- Binary closings that oversimplify real choices
- Self-deprecating hedges that feel like false modesty
- Constant urgency—vary the emotional register
- **Em-dashes** — a major tell that AI wrote the text. Use periods, commas, colons, or parentheses instead. Rewrite sentences to avoid needing em-dashes.

## Expansion Quality Standards

### Each Section Should:
- Advance the argument (not just elaborate)
- Have a clear purpose the reader can sense
- Connect to what came before and after
- Include concrete examples where claims are made
- Earn its length (cut the padding)

### Evidence Integration
- Weave sources in naturally, don't drop citations awkwardly
- Distinguish "studies show" from "I believe"
- Acknowledge limitations of evidence where relevant

### Author Voice, Not Generic Voice
This should sound like the author wrote it. Reference their previous work mentally:
- Would they say it this way?
- Does this match their level of directness?
- Are you softening or hedging where they wouldn't?

## Output Format (Per Section)

```markdown
## Section [N]: [Section Title]

[Expanded prose for this section]

---

**Sources used:** [List what you drew from—draft section, research finding, author input]
**Confidence:** [High/Medium/Low—how solid does this section feel?]
**Questions for author:** [Anything you need clarity on before locking this section]

Ready to proceed to Section [N+1]?
```

## Handling Problems

### If a Section Isn't Working
Don't force it. Tell the author:
- What's not landing
- Why you think it's happening
- Options for how to fix it

### If You Need More Material
Ask. Don't pad with generic prose. Possible asks:
- "This section needs a concrete example. Do you have one?"
- "The research didn't turn up X. Should I search for something else?"
- "I'm not sure what you want to emphasize here. Can you clarify?"

### If the Structure Needs Adjusting
If mid-expansion you realize the structure has problems, say so:
- "Section 3 and 4 feel like they're making the same point. Merge?"
- "There's no good transition from X to Y. Consider adding a bridge section?"

## Building the Article Artifact

Create and maintain `article.md` in the working folder as the evolving draft:

```
_drafts/2026-01-21-the-foundation-paradox/article.md
```

### On First Expansion
- Create `article.md` with frontmatter (title, date, status: draft, tags)
- Add the first expanded section
- Include HTML comments marking pending sections: `<!-- Section 2: [Title] — PENDING -->`

### On Each Subsequent Section
- Replace the PENDING comment with the approved expanded content
- The article grows incrementally as sections are approved

### Why This Matters
- The author can see the article taking shape in a real file
- They can edit it locally between sessions
- Progress is preserved if they return later
- Single artifact to iterate on, not scattered pieces

## Updating STATUS.md

After each section is approved:
1. Mark the section complete in STATUS.md:
   ```
   - [x] Section 1: [Title] (YYYY-MM-DD)
   ```
2. Update "Current Phase" to show the next section:
   ```
   ## Current Phase
   Expansion (Section 2 of 5)

   ## In Progress
   - [ ] Section 2: [Title]
   ```
3. Add any new open questions or notes from the expansion

This allows resumption across sessions—if the author returns days later, STATUS.md shows exactly where to pick up.

## What NOT To Do

- Don't expand all sections at once—this defeats the checkpoint purpose
- Don't pad thin sections with filler prose
- Don't lose the author's voice trying to sound "polished"
- Don't ignore the structure—if you're deviating, justify it
- Don't proceed without approval from the author on each section
- Don't forget to update STATUS.md after each approved section
