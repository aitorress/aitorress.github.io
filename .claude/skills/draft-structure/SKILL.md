---
name: draft-structure
description: Propose an article outline based on the draft, research findings, and author input. The structure may cut, add, or reorder content from the original draft.
---

# Draft Structure

You are proposing a structure for the final article. This is not a mechanical conversion of the draft—you're designing an argument arc that serves the piece's purpose.

## Input

The user will provide:
- The original draft
- Research findings (if `/draft-research` was run)
- Author input (if `/draft-input` was run)
- The piece type identified in `/draft-analyze`

## Structure Design Principles

### The Draft Is a Starting Point, Not a Template
The draft's sections (Steel Man, Devil's Advocate, etc.) were for thinking. The article doesn't need to follow that structure. Extract the ideas; redesign the container.

### Match Structure to Piece Type

**Tension-driven pieces** need:
- Hook that establishes stakes
- The uncomfortable truth or paradox
- Evidence and examples
- Addressing the counterargument
- Resolution or call to action

**Explainer pieces** need:
- Clear framing of what you're explaining and why
- Logical progression from foundation to complexity
- Examples at each level
- Practical takeaway

**Synthesis pieces** need:
- The landscape you're mapping
- Organizing principle or framework
- How the pieces connect
- What the synthesis reveals

**Exploration pieces** need:
- The question you're sitting with
- Multiple angles or lenses
- Honest acknowledgment of uncertainty
- Where you've landed (even if tentative)

### Decide on Headings

Not every piece needs section headings, but longer pieces usually benefit from them.

**When to use headings:**
- Pieces over 800 words generally need them for navigation
- Complex arguments with distinct phases benefit from signposting
- How-to or explainer content almost always needs them

**When to skip headings:**
- Short pieces (under 500 words) often flow better without them
- Personal essays or narrative pieces may feel more intimate without
- When the argument is a single continuous thread

**If using headings:**
- Decide whether to use working section titles or write punchier ones
- Consider which sections might combine under one heading
- Headings should orient the reader, not just label content

Include a "Headings: Yes/No" decision with brief rationale in the structure proposal.

### The Author's Voice Shapes Structure
Based on analysis of published posts, the author's typical arc:
1. Casual opening that signals the problem
2. Stakes (why this matters)
3. The tension or paradox
4. Framework or lens
5. Practical grounding (examples, evidence)
6. The choice or takeaway

But not every piece needs this exact arc. Vary when appropriate.

## Process

### 1. Review All Material
- Original draft
- Research findings
- Author input
- Analysis notes

### 2. Identify the Core Argument
What is this piece *really* saying? Write it in one sentence.

### 3. Determine What Survives
From the draft, research, and author input:
- What's essential to the argument?
- What's interesting but tangential?
- What contradicts or complicates the main point?

### 4. Design the Arc
Create a structure that:
- Earns each transition
- Builds toward the core insight
- Doesn't bury the lede too deep
- Has a satisfying close

### 5. Propose, Don't Dictate
Present the structure as a proposal. The author approves, modifies, or rejects before expansion begins.

## Output Format

```markdown
## Proposed Structure: [Title]

### Core Argument
[One sentence: what this piece is really saying]

### Piece Type
[Type from analysis]

### Headings
[Yes/No] — [Brief rationale: length, complexity, piece type]

### Proposed Outline

#### 1. [Section Title]
**Purpose:** [What this section accomplishes]
**Content:** [What goes here—from draft, research, or author input]
**Estimated length:** [Short/Medium/Long paragraph]

#### 2. [Section Title]
...

#### 3. [Section Title]
...

[Continue for all sections]

### What's Not Included
[Material from the draft that's being cut, and why]

### Open Questions
[Decisions that need author input before expanding]

### Alternative Structures Considered
[If there were other viable approaches, briefly note them]
```

## Structure Warnings

### Avoid These Patterns
- **Throat-clearing openings** — Don't start with "In today's world..." or unnecessary context
- **Kitchen sink structure** — Not every good idea from the draft earns inclusion
- **Buried lede** — If the core insight is in section 5, restructure
- **Weak closes** — The ending should land, not trail off

### Watch for Author's Formulaic Tendencies
From voice analysis, the author sometimes falls into:
- Punchy one-liners that feel mechanical when overused
- Binary closings that oversimplify
- Same opening pattern (casual → pivot to stakes)

Flag when you're reproducing these patterns and suggest alternatives.

## Saving the Structure

Save the structure proposal to the draft's working folder **immediately** (before approval), so the author can:
- Reference it while working locally
- Return to it in future sessions
- Annotate or edit it directly

For a draft at `_drafts/2026-01-21-the-foundation-paradox.md`, save to:

```
_drafts/2026-01-21-the-foundation-paradox/structure.md
```

Include:
- **Status:** "Awaiting approval" or "Approved"
- **Date** at the top
- Full proposed outline with section purposes and content sources

When the author approves, update the status to "Approved" and the file becomes the blueprint for `/draft-expand`.

### Update STATUS.md

After saving the approved structure, update STATUS.md:
- Add to "Completed" section: `- [x] Structure approved (YYYY-MM-DD)`
- Update "Still Needed" to list each section for expansion:
  ```
  - [ ] Section 1: [Title]
  - [ ] Section 2: [Title]
  ...
  ```
- Update "Current Phase" to `Expansion`

## What NOT To Do

- Don't preserve draft structure out of inertia
- Don't include every interesting thing from research—curate
- Don't propose a structure you can't justify
- Don't skip the "What's Not Included" section—transparency about cuts matters
- Don't proceed to expansion without author approval
- Don't save until the author explicitly approves the structure
