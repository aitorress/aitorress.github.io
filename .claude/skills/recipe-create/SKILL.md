---
name: recipe-create
description: Create a new recipe from the author's own version of a dish (their method, feel, and modifications) plus a source/credit. Most recipes are word-of-mouth or invented and have no written reference; when a reference does exist, it's used only to complete the ingredient list and flag deliberate divergences. Generates metadata and formats everything into the recipe template.
---

# Recipe Creator

You are creating a recipe entry for the author's personal recipe collection.

## What This Collection Is

This is not a recipe database. When a canonical version of a dish exists elsewhere, someone who wants it by the book can go find it. The whole reason an entry exists here is the author's *own* version: how they actually make it, what they changed, what they go by (feel, proportions, what they see, smell, and hear). The author's commentary IS the recipe. Many recipes here have no written original anywhere—they're passed down by mouth or invented by the author—and that's exactly the point.

## Input

The author will provide:
1. **Their version (PRIMARY, always)** — How they make the dish, in their voice: feel, relative proportions, sensory cues, modifications, asides, opinions. This is the source of truth and the actual content of the file.
2. **Source / credit (usually)** — Who or where the dish came from: a person's name (grandmother, a friend), "passed down," "original," "off my own head," or a URL. This is attribution, not an artifact to read. It exists even when there's nothing written down anywhere—a recipe told over the phone still has a source. Recorded in the front matter. Not fetched.
3. **A reference (RARELY, only when one exists)** — A concrete artifact to base on: a written recipe, a transcript, a pasted set of steps, a link with real content. Most recipes won't have this. Word-of-mouth recipes and dishes the author invented have **no reference at all, and that is the normal case, not a missing piece**. A reference is NOT content to merge in—when one happens to exist, it is a backstop used only for the two guard roles below.

Source and reference are different things. A recipe can have a source (grandmother) with no reference (nothing was ever written). Don't expect a reference, and never invent one.

### How to Use a Reference (When One Exists) — Guard Roles Only

A reference serves exactly two purposes. Never pull *method* or *voice* from it.

1. **Completeness check on ingredients.** The author will skip things they do on autopilot ("then the aromatics go in"). Use the reference to catch ingredients they assume but don't say, and confirm with them rather than silently adding. The ingredient *list* may draw from the reference; everything else stays the author's.
2. **Divergence flagging.** When the author's version contradicts the reference, that is the point, not an error. Preserve the divergence as a deliberate note in the author's voice ("the recipe simmers 40 min, I pull it at 25 to keep the bite"). Never average the two or "correct" the author back toward the reference.

When no reference is provided—the common case—work entirely from the author's version and don't go looking for one.

## Your Job

Produce a clean, formatted recipe file where the body is written in the author's voice and method, with:
- Generated title (the actual dish name)
- Polished intro (based on the author's note—keep their voice, just clean it up)
- Estimated prep time, cook time, and servings (infer; stay vague unless the author was precise)
- Category and tags (infer from ingredients and cuisine type)
- Ingredients list (author's; completeness-checked against a reference only if one exists)
- Numbered steps (author's method and asides, never a reference's wording)

## Output Format

Create a markdown file at `src/data/recipes/[slug].md` with this structure:

```yaml
---
title: "[Recipe Title]"
pubDatetime: [today's date, ISO 8601, e.g. 2026-06-03T00:00:00Z]
description: "[One-line summary, often the opening line of the intro]"
source: "[Markdown link or plain credit; omit the line entirely if none]"
prepTime: "[X min]"
cookTime: "[X min]"
servings: "[number or range, as a string: \"2\", \"2-4\"]"
tags:
  - tag1
  - tag2
---

[Polished intro paragraph]

## Ingredients

- [ingredient 1]
- [ingredient 2]
- ...

## Steps

1. [Step 1]
2. [Step 2]
3. ...
```

This front matter matches the Astro content schema in `src/content.config.ts`. Required fields: `title`, `pubDatetime`, `description`. Everything else is optional—omit a line rather than writing a null or placeholder. Field names are camelCase (`prepTime`, `cookTime`), not snake_case. There is no `category` field. `source` is a single string (usually a Markdown link like `"[YouTube](https://...)"` or a plain name like `"Grandmother"`), not separate name/URL fields. `servings` is a string.

## Philosophy

Cooking is about tasting, smelling, and looking—not measuring cups and timers. Recipes here are intentionally vague with measurements and times because precision often doesn't matter, and relying on your senses is both more fun and makes you a better cook. Every chef brings something of themselves when they trust their instincts over a number.

**Only be precise when the author explicitly provides precise values.** If they say "a handful of cheese" or "until it smells right," keep it that way. If they give you "200g flour" or "375°F for 25 minutes," use those. Mirror the specificity you're given.

**Keep the color.** These recipes should read like a friend explaining how to make something, not a sterile instruction manual. If the author gives you asides ("here's where you need to be careful"), encouragement ("do what feels right"), or opinions ("try something else, be creative")—keep them. That's the whole point of a personal recipe collection. Otherwise they'd just google it.

## Guidelines

### Title
- Extract or infer from the recipe content
- Use the actual dish name, not a creative title
- Example: "Pasta Carbonara" not "The Best Creamy Pasta Ever"

### Intro Polish
- Keep the author's voice and personality
- Fix grammar and flow, don't rewrite entirely
- Keep it short (2-4 sentences max)
- Preserve any humor or personal observations

### Time Estimates
- Use vague estimates like "15-20 min" or "about half an hour"—precision isn't the point
- Only use exact times if the author provided them
- These are rough guides, not promises

### Tags
Choose relevant tags from common categories:
- **Meal type:** breakfast, lunch, dinner, snack, dessert
- **Speed:** quick (< 30 min), weeknight (< 45 min)
- **Diet:** vegetarian, vegan, gluten-free
- **Style:** comfort-food, healthy, make-ahead, one-pot
- **Protein:** chicken, beef, pork, fish, tofu
- Don't over-tag—3-5 tags is plenty

### Description
- Required field. One line, used as the card blurb and meta description.
- Usually just the opening sentence of the polished intro—keep the author's voice, don't write a separate SEO line.

### Source
- Single string. A Markdown link when there's a URL (`"[YouTube](https://...)"`), or a plain name when it's a person (`"Grandmother"`, `"Off my own head"`).
- This is the credit, and it always exists in some form. It is separate from a reference—see the Input section.
- Omit the line entirely if there's genuinely nothing to credit.

### Date
- `pubDatetime` is required. Use today's date in ISO 8601 (e.g. `2026-06-03T00:00:00Z`).

### Ingredients
- One ingredient per line
- Use vague quantities ("a good handful," "enough to coat," "some") unless the author gave precise amounts
- Don't invent measurements—if the author just said "garlic," write "garlic," not "3 cloves garlic"
- List in order of use when possible
- Group by section if recipe is complex (e.g., "For the sauce:", "For the topping:")

### Steps
- Number each step
- One action per step when possible
- **Favor sensory cues over times:** "until golden," "when it smells fragrant," "until the onions are soft"
- Only include specific temps/times if the author provided them
- **Keep the conversational asides**—warnings, tips, encouragement, opinions. Don't strip them out for "efficiency."

## Filename

Generate a slug from the title:
- Lowercase
- Replace spaces with hyphens
- Remove special characters
- Example: "Pasta Cacio e Pepe" → `pasta-cacio-e-pepe.md`

## Process

1. Read the author's version as the primary content—their method, voice, and asides
2. If (and only if) a reference exists, use it ONLY to complete the ingredient list and flag divergences (see guard roles above); confirm any added ingredients rather than assuming. If there's no reference, work entirely from the author's version
3. Infer title, description, tags, and time estimates (stay vague unless the author was precise)
4. Polish the intro from the author's note; draw the one-line `description` from it
5. Format everything into the template, keeping the author's wording and color
6. Save to `src/data/recipes/[slug].md`
7. Show the user the created file

## Example

**User provides:**
```
Steps:
spaghetti, pecorino romano, black pepper, pasta water
boil pasta, toast pepper, make cheese paste with pasta water, toss everything

Source: kenji on youtube

Intro: finally figured out why my cacio e pepe was always grainy - the pasta water trick is everything
```

**You create:**
```yaml
---
title: "Cacio e Pepe"
pubDatetime: 2026-06-03T00:00:00Z
description: "Finally figured out why my cacio e pepe always turned out grainy. The pasta water trick is everything."
source: "[YouTube](https://youtube.com)"
prepTime: "5 min"
cookTime: "15 min"
servings: "2"
tags:
  - pasta
  - quick
  - vegetarian
---

Finally figured out why my cacio e pepe always turned out grainy. The pasta water trick is everything.

## Ingredients

- Spaghetti
- Pecorino Romano, finely grated
- Black pepper
- Pasta water

## Steps

1. Boil pasta in well-salted water until just shy of al dente.
2. Toast black pepper in a dry skillet until fragrant.
3. Make a paste with the grated Pecorino and a splash of pasta water.
4. Toss hot pasta with the cheese paste, adding more pasta water as needed until it's glossy and coats the noodles.
5. Serve immediately with extra pepper on top.
```

## What NOT To Do

- Don't add ingredients the user didn't mention
- Don't invent steps that weren't implied
- Don't make the intro longer or more formal than the original
- Don't add SEO-style descriptions
- Don't include "Notes" sections unless the user specifically mentioned tips
- Don't ask clarifying questions unless the recipe is genuinely unclear, make reasonable assumptions
- **Don't invent precise measurements, times, or temperatures**, if the user was vague, stay vague
- **Don't over-polish into generic recipe-speak**, if the author said "destroy them a little bit" or "send those to a pan," keep that energy. Efficiency isn't the goal; personality is.

## Avoid AI Tells

Write like a person, not a language model. Specifically:

- **No em-dashes.** Use periods, commas, or parentheses instead. "You're not grinding them fine, just smashing" not "You're not grinding them fine—just smashing"
- **No "elevate," "delve," "straightforward," "vibrant," or "rich tapestry"**
- **No hedging with "certainly," "definitely," "absolutely"**
- **Avoid "perfect balance," "harmony of flavors," "culinary journey"**
- Contractions are good. "It's" not "It is." "Don't" not "Do not."
- Short sentences are fine. Not everything needs a conjunction.
