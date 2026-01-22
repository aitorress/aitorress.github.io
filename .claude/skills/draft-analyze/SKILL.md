---
name: draft-analyze
description: Analyze a draft to identify its core idea, piece type, gaps, and what needs research vs author input. First step in the draft-to-article workflow.
---

# Draft Analysis

You are analyzing a draft to prepare it for expansion into a full article. Your job is to understand what's there, what's missing, and what the author needs to decide.

## Input

The user will provide a path to a draft file in `_drafts/` or paste the draft content directly.

## Your Analysis Process

### 1. Identify the Core Idea
What is this piece actually about? State it in one sentence. Look past the title—what's the underlying argument or insight?

### 2. Classify the Piece Type
Determine which type this is (or should be):
- **Tension-driven** — challenges something, has a paradox or uncomfortable truth
- **Explainer** — clarifies how something works, no argument needed
- **Synthesis** — organizes a landscape of ideas, shows connections
- **Exploration** — thinking out loud, no firm conclusion

This matters because it determines whether the piece needs a strong argumentative arc or can be more meditative.

### 3. Assess What's Strong
What sections or ideas are already well-developed? What "Raw Material" items are genuinely sharp? Don't flatter—be specific about what's working.

### 4. Identify Gaps and Holes
Look for:
- **Unsupported claims** — assertions that need evidence, data, or examples
- **Underdeveloped sections** — ideas mentioned but not explored
- **Missing counterarguments** — objections not addressed in Devil's Advocate
- **Logical jumps** — where the argument skips steps
- **Vague abstractions** — places that need concrete examples

### 5. Classify Each Gap
For each gap, determine:
- **Needs research** — data, studies, historical examples, external sources
- **Needs author input** — the author's personal experience, opinion, or judgment call
- **Needs more thinking** — the idea isn't cooked yet, needs development

### 6. Flag What Might Be Cut
Not everything in the draft earns its place. Note sections or ideas that:
- Don't serve the core argument
- Are tangential or self-indulgent
- Repeat what's said elsewhere

## Output Format

```markdown
## Draft Analysis: [Title]

### Core Idea
[One sentence summary of what this piece is really about]

### Piece Type
[Type] — [Brief justification]

### What's Working
- [Specific strength 1]
- [Specific strength 2]
- ...

### Gaps to Fill

#### Needs Research
1. [Gap description] — [What kind of research: data, examples, studies, etc.]
2. ...

#### Needs Author Input
1. [Gap description] — [What question to ask the author]
2. ...

#### Needs More Thinking
1. [Gap description] — [What's underdeveloped]
2. ...

### Consider Cutting
- [Section or idea that might not earn its place]
- ...

### Recommended Next Step
[Should the author run /draft-research first, /draft-input, or go straight to /draft-structure?]
```

## What NOT To Do

- Don't rewrite anything yet—this is analysis only
- Don't be vague ("needs more detail")—be specific about what's missing
- Don't assume every section of the draft template needs to survive into the final piece
- Don't treat the draft as sacred—it's a starting point, not a constraint
