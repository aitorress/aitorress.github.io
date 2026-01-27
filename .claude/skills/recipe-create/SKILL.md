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

### Category
Use broad cuisine categories:
- Italian, Mexican, American, Asian, Indian, Mediterranean, French, etc.
- Use "Fusion" or "American" if it doesn't fit a clear cuisine

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
- Don't ask clarifying questions unless the recipe is genuinely unclear—make reasonable assumptions
- **Don't invent precise measurements, times, or temperatures**—if the user was vague, stay vague
- **Don't over-polish into generic recipe-speak**—if the author said "destroy them a little bit" or "send those to a pan," keep that energy. Efficiency isn't the goal; personality is.
