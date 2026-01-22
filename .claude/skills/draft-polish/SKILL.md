---
name: draft-polish
description: Final pass on an expanded draft. Applies voice consistency, self-critique, and tightening. Produces a publish-ready article.
---

# Draft Polish

You are doing the final pass on an expanded draft. This combines three functions:
1. **Voice pass** — ensure consistency with the author's style
2. **Self-critique** — identify remaining weaknesses
3. **Tightening** — cut the fat, sharpen the prose

## Input

The user will provide:
- The fully expanded draft (all sections approved)
- Optionally, specific concerns to address

## The Three Passes

### Pass 1: Voice Consistency

Read the full draft checking for voice alignment with the author's established style.

**Check for:**
- Sentence rhythm (varied length, punchy moments that aren't overused)
- Tone consistency (conversational skepticism, not corporate hedging)
- Second-person address used effectively
- Metaphor coherence (one extended metaphor, not competing images)
- Authentic directness (not softened or over-hedged)

**Flag:**
- Sections that sound generic or "AI-written"
- Places where the voice shifts awkwardly
- Formulaic patterns creeping in (same opener style, same closer style)

### Pass 2: Self-Critique

Apply the same critical lens used in the original voice analysis. Be honest about weaknesses.

**Critique for:**

**Structure issues:**
- Does the opening earn attention?
- Is the core insight buried too deep?
- Does each section advance the argument?
- Does the close land, or trail off?

**Argument issues:**
- Are there unsupported claims?
- Are counterarguments addressed fairly?
- Are there logical jumps?

**Tone issues:**
- Is the urgency calibrated or constant?
- Any false modesty or unnecessary hedging?
- Any smugness or insider-ism that might alienate readers?

**Originality issues:**
- Does this say something the reader couldn't get elsewhere?
- Are there clichés or tired phrasings?

### Pass 3: Tightening

Cut 15% of the word count. Every piece has fat.

**Cut:**
- Sentences that exist to sound smart, not to advance the argument
- Redundant phrases ("in order to" → "to")
- Throat-clearing ("It's important to note that...")
- Adverbs that don't earn their place
- Paragraphs that repeat what's already been said
- Examples that make the same point as other examples

**Sharpen:**
- Replace vague words with specific ones
- Activate passive constructions where appropriate
- End paragraphs on strong notes, not trailing thoughts

## Output Format

```markdown
## Polish Report: [Title]

### Voice Pass

**Overall voice consistency:** [Strong/Acceptable/Needs Work]

**Specific adjustments made:**
- [Change 1]
- [Change 2]
- ...

**Patterns flagged:**
- [Any formulaic tendencies noticed]

---

### Self-Critique

**Strengths:**
- [What's working well]

**Weaknesses to address:**
- [Issue 1] — [Suggested fix]
- [Issue 2] — [Suggested fix]
- ...

**Honest assessment:** [Is this piece ready, or does it need another pass?]

---

### Tightening

**Original word count:** [N]
**Final word count:** [N - ~15%]

**Major cuts:**
- [What was removed and why]

**Major sharpening:**
- [Examples of prose improvements]

---

### Final Draft

[The polished, complete article in full]

---

### Publishing Checklist

- [ ] Title is punchy but accurate
- [ ] Opening hooks within first two sentences
- [ ] Core insight is clear and not buried
- [ ] All claims are supported
- [ ] Counterarguments addressed
- [ ] Close lands with impact
- [ ] Read aloud—sounds like the author
- [ ] No typos or grammatical issues

### Remaining Concerns
[Anything the author should consider before publishing]
```

## What NOT To Do

- Don't over-polish into blandness—preserve the author's edge
- Don't cut substance to hit a word count target
- Don't smooth away productive friction or provocation
- Don't fix things that aren't broken
- Don't publish without author's final approval

## Updating STATUS.md

After polish is complete, update STATUS.md:

```markdown
## Current Phase
Complete — Ready for Review

## Completed
- [x] Analysis (YYYY-MM-DD)
- [x] Research: [topics] (YYYY-MM-DD)
- [x] Author input gathered (YYYY-MM-DD)
- [x] Structure approved (YYYY-MM-DD)
- [x] All sections expanded (YYYY-MM-DD)
- [x] Polish pass (YYYY-MM-DD)

## Remaining Concerns
[Any issues flagged during polish that the author should consider]
```

## After Polish

The output is a publish-ready article. The author can:
- Approve and publish
- Request specific revisions
- Run `/draft-polish` again on the revised version

When the author publishes:
1. Move the article from `_drafts/` to `_posts/`
2. The working folder can be kept as archive or deleted

The goal is an article that sounds like the author at their best—not a sanitized version of their voice.
