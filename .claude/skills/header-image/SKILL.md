---
name: header-image
description: Generate a header image for the article using Gemini's Nano Banana image generation API. Run this just before publishing.
---

# Header Image Generation

You are generating a header image for a blog article using Google's Gemini image generation API (Nano Banana). This skill runs after `draft-polish` and before publishing.

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
- **Domain**: AI, writing, philosophy, business, etc.

### Step 2: Design the Image Concept

Create an image concept that:
- **Captures the essence** of the article without being literal
- **Avoids clichés**: No generic "AI brain" imagery, no handshake stock photos
- **Embraces abstraction**: Geometric forms, textures, light play, or surreal compositions work better than literal depictions
- **Matches the blog's aesthetic**: Clean, intellectual, minimal

**Good image concepts:**
- Abstract representations of tension or duality
- Minimalist compositions with strong geometric elements
- Atmospheric landscapes that evoke a mood
- Surreal juxtapositions that provoke thought

**Avoid:**
- Literal illustrations of the topic (no robots for AI articles)
- Busy, cluttered compositions
- Corporate stock photo aesthetics
- Text in the image (Gemini can render it, but it often looks awkward)

### Step 3: Craft the Prompt

Write a detailed prompt for Gemini's image generation. Structure it as:

```
[Style/medium] of [subject/composition], [mood/atmosphere], [color palette], [lighting]. [Additional details].
```

**Example prompts:**

For an article about AI and human judgment:
> Abstract digital painting of a prism refracting light into organic and geometric patterns, contemplative mood, muted blues and warm amber accents, soft diffused lighting. Minimalist composition with negative space.

For an article about the value of brevity:
> Minimalist photograph of a single drop of water about to fall from a leaf, captured in high contrast black and white, dramatic side lighting creating deep shadows. The moment of potential energy before release.

For an article about scarcity in the age of AI:
> Surreal landscape where an endless library fades into mist, one illuminated book floating in the foreground, dreamlike atmosphere, cool grays with a single warm spotlight, soft volumetric lighting.

### Step 4: Generate the Image

Use the Gemini API to generate the image. Call the API with:

```bash
curl -s -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [
        {"text": "Generate an image: [YOUR PROMPT HERE]. Aspect ratio 16:9, high quality, suitable for a blog header."}
      ]
    }],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"]
    }
  }' | jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' | base64 -d > /tmp/header-image.png
```

**Important API notes:**
- Model: `gemini-2.0-flash-exp-image-generation` (or `gemini-2.5-flash-image` for newer access)
- Must include both TEXT and IMAGE in responseModalities
- Response contains base64-encoded image in `inlineData.data`
- Requires `GEMINI_API_KEY` environment variable

### Step 5: Save the Image

Save the generated image to the assets directory:

```
assets/images/posts/[article-slug]/header.png
```

For example, for `2026-01-19-the-labor-of-brevity.md`:
```
assets/images/posts/the-labor-of-brevity/header.png
```

### Step 6: Update the Article Frontmatter

Add the header image to the article's frontmatter:

```yaml
---
title: "The Labor of Brevity"
date: 2026-01-19
status: published
tags: [writing, thinking, communication, craft]
header:
  image: /assets/images/posts/the-labor-of-brevity/header.png
  overlay_filter: 0.3
---
```

**Frontmatter options for Minimal Mistakes theme:**
- `header.image`: Path to the header image (displayed above content)
- `header.overlay_image`: Path for overlay style (image behind title)
- `header.overlay_filter`: Darken overlay (0.0-1.0, useful for readability)
- `header.caption`: Optional image credit/caption

## Output Format

```markdown
## Header Image: [Article Title]

### Concept
[1-2 sentences describing the visual concept and why it fits the article]

### Prompt Used
> [The exact prompt sent to Gemini]

### Image Location
`assets/images/posts/[slug]/header.png`

### Frontmatter Addition
```yaml
header:
  image: /assets/images/posts/[slug]/header.png
```

### Generation Notes
- [Any issues encountered]
- [Number of attempts if regeneration was needed]
- [Why this version was selected]
```

## Regeneration

If the first image doesn't fit:
1. Analyze why it didn't work (too literal, wrong mood, poor composition)
2. Adjust the prompt accordingly
3. Generate again (up to 3 attempts)
4. If still not satisfactory, note the issue and let the author decide

## What NOT To Do

- Don't generate images with text/typography (unreliable rendering)
- Don't use overly complex prompts (simpler often works better)
- Don't force an image if the article doesn't need one
- Don't use the image without author approval
- Don't commit images that are clearly AI-generated looking (uncanny faces, mangled hands)

## Updating STATUS.md

After generating the header image, update STATUS.md:

```markdown
## Current Phase
Complete - Ready for Publishing

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
- No good visual concept emerges after analysis
- The author has provided their own image

## API Troubleshooting

**No GEMINI_API_KEY:**
- Inform the user they need to set the environment variable
- Provide instructions: `export GEMINI_API_KEY="your-key-here"`
- API keys available at: https://aistudio.google.com/apikey

**Rate limits:**
- Free tier: ~500 images/day
- If rate limited, wait and retry or proceed without image

**Content filtering:**
- Gemini may refuse certain prompts
- Rephrase to be more abstract if blocked
- Avoid anything that could be interpreted as depicting real people

## Integration with Workflow

This skill fits into the publishing workflow as:

```
draft-polish → header-image → publish
```

The header image is optional but recommended for most articles. It should be the last step before moving the article from `_drafts/` to `_posts/`.
