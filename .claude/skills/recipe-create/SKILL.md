---
name: recipe-create
description: Create a new recipe from raw steps, source, and a rough intro. Generates metadata and formats everything into the recipe template.
---

# Recipe Creator

You are creating a recipe entry for the author's personal recipe collection.

## Input

The user will provide:
1. **Raw steps** — The recipe itself (ingredients and/or instructions, can be messy)
2. **Source** — Where the recipe came from (URL, YouTube link, person's name, "original", etc.)
3. **Rough intro** — Their personal note about this dish (you will polish this)

## Your Job

Take the raw input and produce a clean, formatted recipe file with:
- Generated title (inferred from the recipe)
- Polished intro (based on their rough draft—keep their voice, just clean it up)
- Estimated prep time, cook time, and servings (infer from the recipe)
- Category and tags (infer from ingredients and cuisine type)
- Clean ingredients list
- Numbered steps

## Output Format

Create a markdown file at `_recipes/[slug].md` with this structure:

```yaml
---
title: "[Recipe Title]"
source_name: "[Person or site name]"
source_url: "[URL if provided, omit if none]"
prep_time: "[X min]"
cook_time: "[X min]"
servings: [number]
category: "[Cuisine type: Italian, Mexican, American, Asian, etc.]"
tags: [tag1, tag2, tag3]
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
- Be realistic based on the steps
- Prep = gathering and preparing ingredients
- Cook = active cooking time
- When uncertain, round up slightly

### Tags
Choose relevant tags from common categories:
- **Meal type:** breakfast, lunch, dinner, snack, dessert
- **Speed:** quick (< 30 min), weeknight (< 45 min)
- **Diet:** vegetarian, vegan, gluten-free
- **Style:** comfort-food, healthy, make-ahead, one-pot
- **Protein:** chicken, beef, pork, fish, tofu
- Don't over-tag—3-5 tags is plenty

### Category
Use broad cuisine categories:
- Italian, Mexican, American, Asian, Indian, Mediterranean, French, etc.
- Use "Fusion" or "American" if it doesn't fit a clear cuisine

### Ingredients
- One ingredient per line
- Include quantities
- List in order of use when possible
- Group by section if recipe is complex (e.g., "For the sauce:", "For the topping:")

### Steps
- Number each step
- One action per step when possible
- Include temps and times where relevant
- Keep instructions clear and concise

## Filename

Generate a slug from the title:
- Lowercase
- Replace spaces with hyphens
- Remove special characters
- Example: "Pasta Cacio e Pepe" → `pasta-cacio-e-pepe.md`

## Process

1. Parse the raw steps to identify ingredients vs. instructions
2. Infer title, category, tags, and time estimates
3. Polish the intro
4. Format everything into the template
5. Save to `_recipes/[slug].md`
6. Show the user the created file

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
source_name: "Kenji López-Alt"
source_url: null
prep_time: "5 min"
cook_time: "15 min"
servings: 2
category: "Italian"
tags: [pasta, quick, vegetarian]
---

Finally figured out why my cacio e pepe always turned out grainy—the pasta water trick is everything.

## Ingredients

- 200g spaghetti
- 100g Pecorino Romano, finely grated
- 1 tsp freshly ground black pepper
- Reserved pasta water

## Steps

1. Boil pasta in well-salted water until just shy of al dente.
2. Toast black pepper in a dry skillet until fragrant.
3. Make a paste with the grated Pecorino and a splash of pasta water.
4. Toss hot pasta with the cheese paste, adding more pasta water as needed.
5. Serve immediately with extra pepper on top.
```

## What NOT To Do

- Don't add ingredients the user didn't mention
- Don't invent steps that weren't implied
- Don't make the intro longer or more formal than the original
- Don't add SEO-style descriptions
- Don't include "Notes" sections unless the user specifically mentioned tips
- Don't ask clarifying questions unless the recipe is genuinely unclear—make reasonable assumptions
