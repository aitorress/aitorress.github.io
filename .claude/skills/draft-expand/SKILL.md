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
1. Write the section and update article.md
2. Commit and push immediately (this tracks all iterations)
3. Present the section to the author
4. If revisions needed, make changes, commit again
5. Once approved, proceed to the next section

This keeps the author in control, catches problems early, and preserves the full history of iterations in git.

### Commit as You Go
Every draft of every section gets committed, even before approval. This way:
- All work is tracked and recoverable
- The author can see the evolution of the piece
- Nothing is lost if the session ends unexpectedly
- Revisions are visible in the commit history

Commit messages should indicate whether it's a draft or approved version:
- Draft: "Draft Section 2: Your Job Is a Label, Not a Unit"
- Approved: "Approve Section 2: Your Job Is a Label, Not a Unit"

### Drawing from All Sources
For each section, pull from:
- **Draft:** Raw material, phrasings, examples from the original
- **Research:** Data, sources, quotes gathered earlier
- **Author input:** Personal experiences, opinions, judgments
- **New material:** Where gaps remain, write to fill them

Always know where your content is coming from.

## Voice and Style Guidelines

Based on analysis of the author's published work:

### Register: Think With the Reader, Not At Them

This is the most important guideline. It governs everything else.

The author's best writing ("Still Handy," "The Labor of Brevity") has a quality of *thinking out loud*. The reader feels like they're sitting next to someone working through an idea, not being presented a verdict. The piece discovers its thesis; it doesn't announce it.

**Arrive at insights, don't announce them.**

Bad: "Don Norman has a word for this: discoverability." (lecture)
Better: "I kept trying to name what felt wrong about these products, and then I remembered something from Norman." (journey)

Bad: "Here's the framework." (decree)
Better: "A pattern started to emerge once I looked at what was actually working." (discovery)

The reader should have the "oh!" moment of seeing the insight click into place, not the "okay, noted" feeling of being told the answer.

**Be curious about the people you disagree with.** Before showing where someone goes wrong, genuinely engage with why their position is appealing. The steel man isn't a throwaway sentence before the "but." It's a real moment of "I see why you'd think this." Empathy first, critique second. A reader who feels the author understands both sides will trust the author's conclusion. A reader who feels the author is dismissive will resist even good arguments.

**Write alongside the reader, not above them.** The author is a fellow traveler who happens to have thought about this longer, not a judge issuing rulings. "I've been stuck on this" is warmer than "Both sides are wrong." "Look at what these companies figured out" is more generous than "These companies got it right."

**Create delight, not just agreement.** The reader should enjoy the ride, not just nod at the destination. Unexpected parallels, wry observations, moments of humor, a detail that makes them see something familiar in a new way. These are what make readers come back. A piece that's correct but joyless gets shared once. A piece that's correct and delightful gets remembered.

**Close with generosity.** Give the reader something to carry with them, not a command to follow. The close should feel like a gift ("here's a way to think about this") rather than a gavel ("do this").

### Sentence Rhythm
- Vary sentence length: longer setups, short punches
- Don't overuse the punchy one-liner; it becomes a tic
- Let some paragraphs breathe without a "zinger" at the end

### Tone
- Conversational but substantive
- Skeptical of hype, not cynical
- Direct address ("you") creates immediacy
- First-person ("I") for personal experience and honest uncertainty

### Add Color and Lived-In Details

Prose should feel human, not clinical. Add small moments that make scenes real:

**Instead of:**
> "You decided to try AI on a task. It worked well. You realized this was concerning."

**Write:**
> "You're kind of dreading it, if you're honest. It's the kind of work that needs doing but doesn't spark joy... You stretch, victorious, already planning what to do with your reclaimed afternoon."

**What makes this work:**
- "kind of dreading it" (honest inner state)
- "doesn't spark joy" (specific, relatable feeling)
- "stretch, victorious" (physical detail that shows emotion)
- "reclaimed afternoon" (the small pleasure before the gut punch)

Don't overdo it. One or two human moments per section is enough. But without them, the writing feels like a report instead of a person thinking out loud.

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
- **Contrastive negation** — "Not X. It's Y." / "This isn't about X. It's about Y." / "Less X, more Y." This is how AI creates the illusion of insight through opposition. Real writers just state what things are. One is fine; three is a pattern that screams AI. Fix by deleting the negation and stating the positive claim directly, or by making the contrast earn its place with actual reasoning.

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
