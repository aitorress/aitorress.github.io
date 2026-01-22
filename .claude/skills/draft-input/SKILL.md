---
name: draft-input
description: Ask the author targeted questions about their perspective, experiences, and opinions to fill gaps that require human judgment rather than research.
---

# Draft Author Input

You are gathering the author's perspective to fill gaps in a draft that require personal experience, judgment, or opinion—things that can't be researched.

## Input

The user will provide:
- The draft (path or content)
- Optionally, specific gaps from `/draft-analyze` that need author input

## Your Role

Some gaps in a draft can't be filled by research:
- Personal experiences or anecdotes
- Value judgments or opinions
- Which counterarguments the author finds compelling
- How the author wants to resolve tensions in the piece
- What the author actually believes (vs. what sounds good)

Your job is to ask the right questions to surface this material.

## Question Design Principles

### Ask Specific, Not General
- **Bad:** "What do you think about AI and education?"
- **Good:** "You claim foundational skills matter more in the AI age. What's a moment from your own experience where lacking foundational knowledge hurt your ability to use a tool?"

### Ask for Stories, Not Abstractions
- **Bad:** "Why do you believe this?"
- **Good:** "Tell me about a time you saw this pattern play out."

### Surface Tensions
- **Bad:** "Do you agree with the counterargument?"
- **Good:** "The Devil's Advocate section says X. Does that actually land for you, or do you think it misses something?"

### Ask What They'd Cut
- "If this piece had to be half the length, what would you lose?"
- "Which section feels least essential to you?"

### Ask What's Missing From Their Gut
- "Is there something you believe about this topic that isn't in the draft yet?"
- "What would you say about this over drinks that you haven't written down?"

## Process

### 1. Review the Draft
Read the full draft. Identify gaps that specifically require author input (not research).

### 2. Generate 3-5 Targeted Questions
Don't ask too many. Pick the questions that will unlock the most useful material.

### 3. Use AskUserQuestion Tool
Present the questions using the AskUserQuestion tool when appropriate for quick choices, or ask directly for open-ended responses.

### 4. Capture and Organize Responses
After the author responds, summarize the material in a format ready for `/draft-expand`.

## Output Format

After gathering input, summarize:

```markdown
## Author Input: [Draft Title]

### Personal Experience
[Anecdotes or stories the author shared]

### Author's Position
[Where the author stands on contested questions in the draft]

### What to Emphasize
[What the author cares most about getting right]

### What to Cut or Minimize
[What the author is less attached to]

### Raw Quotes
[Verbatim phrases from the author that might work in the piece]
```

## Example Questions by Gap Type

### For Missing Personal Experience
- "You mention [concept]. Have you seen this firsthand? What happened?"
- "What's a mistake you made that taught you this?"

### For Unresolved Tensions
- "The piece argues X, but also acknowledges Y. Where do you actually come down?"
- "If someone pushed back hard on [claim], what would you say?"

### For Vague Abstractions
- "You say [abstract thing]. Can you give me a concrete example from your work or life?"

### For Missing Stakes
- "Why does this matter to you personally, not just intellectually?"
- "Who is this piece actually for? What do you want them to do differently?"

### For Voice and Angle
- "What's the one thing you want readers to remember from this piece?"
- "If this piece had a 'hot take' version, what would it be?"

## Saving Author Input

After gathering input, save to the draft's working folder.

For a draft at `_drafts/2026-01-21-the-foundation-paradox.md`, save to:

```
_drafts/2026-01-21-the-foundation-paradox/author-input.md
```

If author input is gathered across multiple sessions, append to the existing file with a date header:

```markdown
---

## Session: YYYY-MM-DD

[New input from this session]
```

### Update STATUS.md

After saving author input, update the STATUS.md file:
- Add to "Completed" section: `- [x] Author input gathered (YYYY-MM-DD)`
- Update "Open Questions" with anything still unresolved
- Add relevant notes about author's preferences or direction

## What NOT To Do

- Don't ask questions the author could Google
- Don't ask leading questions that assume an answer
- Don't overwhelm with 10+ questions—prioritize
- Don't treat the author's first answer as final—follow up if something's interesting
- Don't skip this step because you think you can infer what they'd say
- Don't lose author input to conversation history—always save to author-input.md
