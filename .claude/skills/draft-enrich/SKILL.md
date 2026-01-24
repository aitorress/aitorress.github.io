---
name: draft-enrich
description: Add depth, curves, and richness to a polished but lean article. Works best after draft-polish when the foundation is solid but the piece feels too minimal.
---

# Draft Enrichment

You are adding depth to an article that has a solid foundation but feels too lean. The core argument works, but the piece makes its point and leaves without giving readers interesting tangents or "curves" to explore.

## When to Use

Use this skill when:
- The article is polished and the core argument is solid
- But it feels like it "makes its point and leaves"
- The author wants more texture, depth, or interesting tangents
- There's material in the original draft that was cut for leanness

**Key insight:** It's easier to add richness to a strong foundation than to build depth into a messy draft. That's why this step comes *after* polish, not before.

## Input

The user will provide:
- The polished article
- Optionally, specific areas they want to explore

You should also review:
- The original draft (for cut material)
- Research files (for unused findings)
- Author input (for unexplored threads)

## Types of Enrichment

### 1. Parallel Examples
Extend the core insight to a different domain.
- "The meeting version of this writing insight"
- "How this applies to conversation, not just text"
- "The organizational equivalent of this personal habit"

### 2. Psychological Angles
Add the "why we do this" layer.
- What makes us default to the wrong behavior?
- What emotional need does the bad habit serve?
- Why is the right thing harder?

### 3. Structural Explanations
Explain the systems and incentives at play.
- What structures reward the wrong behavior?
- Why don't markets/organizations fix this?
- What would need to change?

### 4. Important Nuances
Prevent oversimplification without undermining the argument.
- "This doesn't apply when..."
- "The exception that proves the rule"
- "Why the obvious objection misses the point"

### 5. Expert References
Add authority and depth.
- Thinkers who've explored this idea
- Research that supports the claim
- Historical examples

### 6. Vulnerability/Personal Angles
Add emotional stakes.
- Why this is hard for the author too
- What's at risk when you do the right thing
- The fear that keeps people stuck

## Process

### 1. Review Cut Material
Go back to the original draft. What interesting threads were cut? Which "Questions Worth Exploring" or "Adjacent Ideas" still resonate?

### 2. Identify 3-5 Opportunities
Don't try to add everything. Pick the additions that:
- Add genuine depth (not just length)
- Connect to the core argument
- Give readers something to think about

### 3. Propose with Placement
For each addition, specify:
- What you'd add (brief summary)
- Where it fits in the current structure
- Whether it's a new section or expands existing one

### 4. Discuss with Author
Present options. Let the author choose which resonate. They may have ideas you didn't consider.

### 5. Write New Content
Expand with the same voice and quality as the existing article. Don't let new sections feel bolted on.

### 6. Re-Polish
Run `draft-polish` again on the expanded article to ensure:
- Voice consistency across new and old content
- No new AI-tell patterns
- Tightening where the new content is loose

## Output Format

```markdown
## Enrichment Proposal: [Title]

### Current State
- Word count: [N]
- Reading time: [N] min
- Assessment: [Why it feels lean]

### Opportunities Identified

#### 1. [Addition Name]
**Type:** [Parallel Example / Psychological Angle / etc.]
**What:** [Brief description]
**Where:** [New section after X / Expand section Y]
**Why it works:** [How it adds depth without diluting]

#### 2. [Addition Name]
...

#### 3. [Addition Name]
...

### From Original Draft
[List any cut material worth reconsidering]

### Author Questions
1. Which of these resonate?
2. Are there angles you want to explore that aren't listed?
3. Any additions you specifically don't want?

### Recommended Additions
[After discussion, list the agreed-upon additions]
```

## Quality Standards

### Good Enrichment:
- Adds depth without diluting the core message
- Feels organic, not bolted on
- Gives readers new angles to think about
- Makes the piece more memorable and shareable

### Bad Enrichment:
- Adds length without adding insight
- Undermines or complicates the main argument
- Feels like padding
- Breaks the voice or flow

## When NOT to Enrich

- The leanness is intentional (short-form piece)
- Adding more would dilute the core message
- The article is already at appropriate depth
- The author wants to ship, not expand

## Updating STATUS.md

After enrichment, update STATUS.md:
- Add to Completed: `- [x] Enrichment pass (YYYY-MM-DD)`
- Note what was added
- Flag that re-polish is needed

## What NOT to Do

- Don't add every interesting thing you find
- Don't break the existing structure to fit new content
- Don't let new sections feel like a different voice
- Don't skip the re-polish pass
- Don't enrich if the author wants to ship
