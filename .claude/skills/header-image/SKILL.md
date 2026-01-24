---
name: header-image
description: Generate a header image for the article using the gemini-image-generator skill. Run this just before publishing.
---

# Header Image Generation

Generate a header image for a blog article using the `gemini-image-generator` skill. This skill runs after `draft-polish` and before publishing.

## Input

The user will provide:
- The polished article (from `article.md` or a specific file)
- Optionally, specific style preferences or themes

## Process

### Step 1: Analyze the Article

Read the article and identify:
- **Core theme**: What is the central idea or tension?
- **Emotional tone**: Contemplative, provocative, hopeful, critical?
- **Key metaphors**: Any visual imagery already in the text?
- **Philosophical undercurrent**: What deeper truth is the piece reaching for?

### Step 2: Conceptualize the Image

**This is the most important step.** Don't illustrate the article literally. Instead, think like an art director creating a piece that *comments on* the philosophy.

Ask yourself:
- What visual metaphor would make someone pause and think?
- What image would reward a second look after reading the article?
- What would hang in a gallery next to this essay?

**High-brow thinking examples:**

| Article Theme | Literal (Bad) | Conceptual (Good) |
|---------------|---------------|-------------------|
| AI replacing jobs | Robot at a desk | Empty chair in a sunlit room, dust motes suspended |
| Value of brevity | Short vs long text | Single perfect brushstroke on vast white canvas |
| Human judgment in AI age | Human + robot handshake | Prism splitting light into organic and geometric patterns |
| Scarcity of attention | Clock or hourglass | Lone figure at edge of infinite library, back turned |

**Good image directions:**
- Abstract representations of tension or duality
- Minimalist compositions with strong negative space
- Atmospheric scenes that evoke mood over meaning
- Surreal juxtapositions that reward contemplation
- Art photography with conceptual depth

**Avoid:**
- Literal illustrations (no robots for AI articles)
- Stock photo aesthetics (handshakes, lightbulbs, gears)
- Busy, cluttered compositions
- Anything that could be a LinkedIn post thumbnail
- Text in the image

### Step 3: Craft the Prompt

Write a detailed, narrative prompt. Describe the scene, don't list keywords.

**Prompt structure:**
```
[Medium/style] of [subject with specific details], [mood/atmosphere], [color palette], [lighting setup]. [Composition notes]. [Additional sensory details].
```

**Example prompts by article type:**

**For philosophical/abstract pieces:**
> A fine art photograph of a single origami crane suspended by an invisible thread in a vast, empty white gallery space. The crane casts a long, dramatic shadow. Soft, diffused natural light from an unseen window. The composition emphasizes negative space and solitude. Contemplative, museum-quality stillness.

**For pieces about human nature:**
> An intimate, Vermeer-inspired photograph of weathered hands holding a small, imperfect ceramic bowl. Warm, golden hour light streaming through a window illuminates dust particles in the air. Shallow depth of field. The mood is reverent, unhurried. Shot on medium format film with natural grain.

**For pieces about technology/change:**
> Abstract architectural photograph looking up through a spiral staircase that seems to extend infinitely. The stairs transition from warm wood at the bottom to cold steel at the top. Dramatic contrast between light and shadow. Vertigo-inducing composition. The feeling of standing at a threshold.

**For pieces about craft/mastery:**
> A macro photograph of ink spreading through water, captured at the precise moment of controlled chaos. Deep indigo tendrils against cream-colored paper fibers visible beneath. High contrast, dramatic side lighting. The tension between intention and accident frozen in time.

### Step 4: Generate the Image

Use the `gemini-image-generator` skill to create the image.

**Find the skill directory:**
```bash
SKILL_DIR="${HOME}/.claude/skills/gemini-image-generator"
# or check project-local: ./.claude/skills/gemini-image-generator
```

**Generate the header image:**
```bash
# Create output directory
mkdir -p assets/images/posts/[article-slug]

# Generate with 16:9 aspect ratio for headers
npx tsx "${SKILL_DIR}/generate-image.ts" \
  "[YOUR DETAILED PROMPT]" \
  -n header.png \
  -a 16:9 \
  -o assets/images/posts/[article-slug]
```

**Example:**
```bash
mkdir -p assets/images/posts/the-labor-of-brevity

npx tsx "${SKILL_DIR}/generate-image.ts" \
  "A fine art photograph of a single drop of ink falling toward a pristine white page, frozen in the moment before impact. The drop is perfectly spherical, containing within it a swirling galaxy of deep blue-black pigment. Dramatic side lighting creates a long shadow anticipating the splash. Macro lens, shallow depth of field. The tension of potential energy, the weight of a single word. Museum-quality stillness." \
  -n header.png \
  -a 16:9 \
  -o assets/images/posts/the-labor-of-brevity
```

### Step 5: Update the Article Frontmatter

Add the header image to the article's YAML frontmatter:

```yaml
---
title: "The Labor of Brevity"
date: 2026-01-19
status: published
tags: [writing, thinking, communication, craft]
header:
  image: /assets/images/posts/the-labor-of-brevity/header.png
---
```

**Frontmatter options for Minimal Mistakes theme:**
- `header.image`: Full-width image above content
- `header.overlay_image`: Image behind title (use with overlay_filter)
- `header.overlay_filter`: Darken overlay for readability (0.0-1.0)
- `header.caption`: Image credit or caption

### Step 6: Evaluate and Iterate

View the generated image. Ask:
- Does it reward a second look?
- Would it feel at home in a gallery?
- Does it comment on the article's philosophy without illustrating it?
- Is there anything that screams "AI generated"? (uncanny faces, melted text, impossible geometry)

If not satisfied:
1. Identify what's wrong (too literal, wrong mood, poor composition, AI artifacts)
2. Refine the prompt
3. Regenerate (up to 3 attempts)
4. If still not working, consider whether this article needs an image at all

## Output Format

```markdown
## Header Image: [Article Title]

### Concept
[2-3 sentences on the visual philosophy—why this image, what it says about the article's themes]

### Prompt
> [The exact prompt used]

### Location
`assets/images/posts/[slug]/header.png`

### Frontmatter
```yaml
header:
  image: /assets/images/posts/[slug]/header.png
```

### Notes
- [Generation attempts and refinements]
- [Why this version was selected]
- [Any concerns for author review]
```

## Updating STATUS.md

After generating the header image:

```markdown
## Current Phase
Complete — Ready for Publishing

## Completed
- [x] Analysis (YYYY-MM-DD)
- [x] Research: [topics] (YYYY-MM-DD)
- [x] Author input gathered (YYYY-MM-DD)
- [x] Structure approved (YYYY-MM-DD)
- [x] All sections expanded (YYYY-MM-DD)
- [x] Polish pass (YYYY-MM-DD)
- [x] Header image generated (YYYY-MM-DD)

## Assets
- Header image: `assets/images/posts/[slug]/header.png`
```

## When to Skip

Skip header image generation if:
- The author explicitly prefers text-only posts
- The article is very short (< 500 words)
- No compelling visual concept emerges after genuine reflection
- The author has provided their own image
- Every concept feels like it would cheapen rather than elevate the piece

## Troubleshooting

**GOOGLE_API_KEY not found:**
- Create `.env` file in the skill directory with `GOOGLE_API_KEY=your-key`
- Or set environment variable: `export GOOGLE_API_KEY="your-key"`
- Get a key at: https://aistudio.google.com/apikey

**Skill directory not found:**
- Check `~/.claude/skills/gemini-image-generator/` (global)
- Check `./.claude/skills/gemini-image-generator/` (project-local)
- Ensure dependencies installed: `npm install` in skill directory

**Content filtered:**
- Gemini may refuse certain prompts
- Rephrase more abstractly
- Avoid anything depicting recognizable people

## Workflow Integration

```
draft-polish → [draft-enrich] → header-image → publish
```

The header image is the final creative step before moving from `_drafts/` to `_posts/`.
