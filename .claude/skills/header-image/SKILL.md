---
name: header-image
description: Generate a header image for a blog post by selecting from a style gallery and crafting a conceptual visual.
---

# Header Image Generator

Generate distinctive header images for blog posts. Instead of generic AI-art, this skill selects from a curated style gallery to create images with character and visual impact.

## Input

The user provides either:
- A path to a post file (e.g., `_posts/2026-01-27-my-article.md`)
- A draft folder path (e.g., `_drafts/2026-01-27-my-article/`)
- Or pastes article content directly

## Style Gallery

You have 7 distinct visual styles. Each has a different mood and visual language.

### 1. Editorial Illustration
**Mood:** Sophisticated, slightly ironic, intellectual
**Visual:** Bold hand-drawn illustration in the style of New Yorker magazine covers. Strong ink lines, confident brushwork, limited color palette (navy, warm orange, cream). Figures and scenes that comment on the subject with editorial wit.

### 2. Collage / Mixed Media
**Mood:** Tactile, layered, human-made, nostalgic
**Visual:** Layered cut paper and vintage photographs with torn edges and visible textures. Sepia tones with pops of teal. Handmade aesthetic with visible glue marks and paper texture. Fragmenting figures, overlapping eras, physical imperfection.

### 3. Bold Geometric / Bauhaus
**Mood:** Modernist, confident, punchy, systematic
**Visual:** High-contrast color blocks and stark shapes inspired by Mondrian and El Lissitzky. Primary colors (deep red, bright yellow, black, white). Clean hard edges, no gradients. Shapes that interact, break apart, or compose into meaning.

### 4. Risograph / Retro Print
**Mood:** Indie, warm, approachable, playful
**Visual:** Limited 2-3 color palette (coral pink, deep teal, off-white). Visible halftone dots and slight color misregistration. Indie zine aesthetic with grain texture. Objects, scenes, or metaphors rendered in this distinctive print style.

### 5. Woodcut / Linocut
**Mood:** Bold, timeless, striking, grounded
**Visual:** High contrast black and white with one accent color (burnt orange). Bold carved lines with visible texture of the printing block. Traditional printmaking aesthetic. Trees, tools, hands, natural forms rendered with stark graphic power.

### 6. Expressive Watercolor
**Mood:** Warm, vulnerable, emotionally resonant, fluid
**Visual:** Loose, flowing brushstrokes with intentional imperfections and paint bleeds. Warm earthy palette (ochre, burnt sienna, indigo). White paper showing through. Figures, gestures, or scenes that feel painted by hand.

### 7. Minimal Line Art
**Mood:** Elegant, contemplative, restrained, modern
**Visual:** Single continuous line or simple strokes on bold solid background (deep navy or forest green). White or gold line. Figures, objects, or abstract forms that emerge from and dissolve into the line. Maximum restraint.

## Style Selection Process

**Do NOT match style to topic.** Articles often share similar topics. Instead, select based on:

### 1. Emotional Register of THIS Piece

Read the article and identify its specific tone:
- **Contemplative / Philosophical** → Line Art, Watercolor
- **Provocative / Defiant** → Woodcut, Editorial
- **Melancholic / Bittersweet** → Watercolor, Collage
- **Playful / Irreverent** → Risograph, Editorial
- **Systematic / Analytical** → Geometric, Line Art
- **Hopeful / Warm** → Risograph, Watercolor
- **Urgent / Critical** → Woodcut, Geometric
- **Nostalgic / Reflective** → Collage, Watercolor

### 2. Visual Metaphor Fit

After reading the article, you'll conceive a visual metaphor. Some metaphors render better in certain styles:
- **Fragmenting/dissolving forms** → Watercolor, Collage
- **Trees, roots, organic growth** → Woodcut
- **Machines, systems, architecture** → Geometric, Line Art
- **Human figures, hands, faces** → Editorial, Watercolor, Collage
- **Objects with symbolic weight** → Risograph, Woodcut
- **Abstract concepts, flows** → Line Art, Geometric
- **Layered histories, time passing** → Collage

### 3. Variety Check

Before finalizing, check recent post headers in `/assets/images/headers/`:
- **Avoid repeating** the same style as the most recent 2-3 posts
- **Favor styles** that haven't been used recently
- This ensures visual variety across the blog

## Conceptual Image Design

After selecting a style, design the image concept:

1. **Identify the core metaphor** — What visual could represent the article's central tension or idea? Avoid literal illustrations (no robots for AI articles, no generic office scenes for work articles).

2. **Find the visual hook** — What single image would make someone pause while scrolling? What rewards a second look?

3. **Compose for the format** — 16:9 aspect ratio, will be displayed as header. Leave breathing room; don't overcrowd.

4. **No text in the image** — The title handles words. The image handles mood and meaning.

## Generation

Use the Gemini image generator:

```bash
npx tsx ~/.claude/skills/gemini-image-generator/generate-image.ts "<prompt>" \
  -n <filename>-header.png \
  -a 16:9 \
  -o <project-root>/assets/images/headers
```

### Prompt Structure

Write a rich, narrative prompt that includes:
- The style reference (be explicit about the aesthetic)
- The subject/scene with specific details
- Mood and atmosphere
- Color palette
- Composition notes
- "No text anywhere in the image" (always include this)

**Example prompt (woodcut style):**
> Woodcut linocut print style header image. High contrast black and white with one accent color (burnt orange). Bold carved lines with visible texture of the printing block. A tree with its branches as different work tools (hammer, pen, keyboard, wrench) with leaves falling and scattering. Traditional printmaking aesthetic, stark and striking. No text anywhere in the image.

**Example prompt (watercolor style):**
> Expressive watercolor header image. Loose, flowing brushstrokes with intentional imperfections and paint bleeds. A single figure standing as wet paint drips and flows downward, separating into distinct colored streams. Warm earthy palette: ochre, burnt sienna, indigo blue, with white paper showing through. Artistic and human-feeling. No text anywhere in the image.

## Output

After generating:

1. **Show the image** to the user for approval
2. **Explain your style choice** briefly (tone + metaphor fit + variety)
3. **Update the post front matter** with the image path (use minimal-mistakes native format):
   ```yaml
   header:
     image: /assets/images/headers/<filename>-header.png
   ```
4. If the user doesn't like it, offer to:
   - Regenerate with the same style but different concept
   - Try a different style entirely
   - Adjust specific elements

## File Naming

Use the post slug for the filename:
- Post: `2026-01-27-the-unbundling-of-work.md`
- Image: `unbundling-of-work-header.png`

## What NOT To Do

- Don't match style to topic — match to tone and metaphor
- Don't repeat the same style as recent posts
- Don't use literal illustrations (no clipart-style icons, no stock photo aesthetics)
- Don't add text to images
- Don't overcomplicate — one strong visual idea beats three weak ones
- Don't generate without reading the article first
