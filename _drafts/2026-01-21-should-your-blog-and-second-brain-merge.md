---
title: "Should Your Blog and Second Brain Merge?"
date: 2026-01-21
status: draft
tags: [knowledge-management, obsidian, pkm, writing, second-brain]
---

# Should Your Blog and Second Brain Merge?

## The Seed

You have a blog (aitorress.github.io) and a separate Obsidian vault where you dump notes, interesting articles, and rough thoughts. Both are markdown files in Obsidian. Should they live together in one place so all your information is unified? Or if not, what's the best way to make information flow between them?

## Steel Man

**Yes, merge them.** Your second brain should contain everything—published posts, drafts, reading notes, fleeting thoughts. Here's why:

1. **Bidirectional links work better in one graph.** Obsidian's power is in connecting ideas. When your blog posts and raw notes are in the same vault, you can link from a published essay to a rough note, from a reading highlight to a draft, from an old idea to a new synthesis. Separation kills serendipity.

2. **Lower activation energy for publishing.** The path from raw note → draft → published post should be frictionless. If they're in different places, you add mental overhead. Every export/import step is a chance to procrastinate. Keep it all in one place and publishing becomes "move file to blog folder + run build."

3. **Single source of truth.** You'll never wonder "did I write about this in my blog or my notes?" Everything is searchable in one place. One backup strategy. One system to maintain.

4. **Your blog is just filtered views of your brain.** Tiago Forte's PARA method, Maggie Appleton's digital garden—they all suggest treating published work as a subset of your knowledge base, not a separate artifact. The blog is your `/public` folder. Everything else is private by default.

5. **You're already using Obsidian for both.** The tools are the same. The format is the same. You're artificially creating separation where none needs to exist.

## Devil's Advocate

**No, keep them separate.** Merging them creates more problems than it solves:

1. **Public and private have different affordances.** Your blog is performance—it's for an audience. Your second brain is learning—it's for you. Mixing them pollutes both. You'll start self-censoring your rough notes because they're "near" publishable content. You'll clutter your vault with polished writing that doesn't need the second brain's linking structure.

2. **Different tempos, different needs.** Your blog probably has a git repo, maybe a build pipeline, deployment scripts. Your second brain is a chaos of half-formed thoughts. Do you really want to run `git status` on 2,000 fleeting notes? Do you want your daily journaling to slow down `obsidian-git` sync? They operate on different time scales.

3. **The friction is the point.** Making publishing slightly harder is a feature. It forces you to ask: "Is this actually ready?" Your second brain should be a low-stakes playground. Your blog should have higher standards. Distance creates clarity about what deserves an audience.

4. **Separation = focus.** When you open your blog vault, you're in writing mode. When you open your second brain, you're in learning mode. Context switching is real. Blurring the boundary means you're always a little distracted by the other mode.

5. **Privacy and security.** One wrong `git push` and your unfiltered thoughts are public. Keeping them separate reduces blast radius. Your blog is designed to be pushed to GitHub. Your second brain isn't.

## First-Order Effects

If you merge them:

- You'll have one Obsidian vault instead of two
- Your blog posts will be linkable from your personal notes
- Publishing becomes "move file + commit + push"
- Your vault gets bigger and possibly slower
- You'll see unpublished mess next to polished writing

## Second-Order Effects

**If merged:**

- You might start treating blog posts as "evergreen notes" and continuously update them (digital garden style)
- Your writing might improve because you're forced to connect new posts to existing knowledge
- You might publish *less* because the lack of friction means you never feel the "commitment" moment
- Your thinking might become more public-facing even in private notes (audience creep)
- You'll develop a folder/tag taxonomy that bridges private and public (this could be elegant or messy)

**If separate:**

- You'll need a manual process for "graduating" ideas from brain → blog
- You'll probably duplicate content (notes about something you also blogged about)
- You might build a workflow that *converts* notes to drafts (templating, metadata, etc.)
- Your blog becomes an intentional curation, not just an artifact of your learning
- You'll be forced to synthesize and rewrite, not just publish notes verbatim

## The Tension You're Sensing

You're really asking: **"Is my blog part of my thinking process or the output of it?"**

If it's part of the process—a public garden where you think out loud—then yes, merge. The blog is just the visible layer of your knowledge graph.

If it's the output—polished artifacts that represent finished thinking—then no, keep separate. The second brain is the factory; the blog is the showroom.

The deeper paradox: *tools that make publishing easier often result in less thoughtful publishing.* You want low friction (so you actually write), but you also want high standards (so you don't just dump notes). Where you put the friction matters.

## Adjacent Ideas / Connections

**Digital Gardens vs. Blogs:** Maggie Appleton, Andy Matuschak, and Gwern have explored this. Digital gardens blur the line between notes and essays—everything is a living document. Traditional blogs are time-stamped, finished pieces. Your question is fundamentally about which model you want.

**Zettelkasten and Publication:** Niklas Luhmann never published his Zettelkasten directly. He used it to *write* books and papers. The slip-box was the source; the output was separate. Sönke Ahrens (*How to Take Smart Notes*) argues this separation is productive.

**PARA Method:** Tiago Forte's system (Projects, Areas, Resources, Archives) treats everything as one system with different visibility levels. Your blog would be a "Project" within the larger vault. But PARA is tool-agnostic—it doesn't require Obsidian's graph features.

**Working in Public:** Tweetstorms, public Roam graphs, Substack drafts visible to subscribers. There's a trend toward making the messy middle visible. But does making *everything* public-adjacent change how you think?

**The Commonplace Book Tradition:** Historically, writers kept notebooks (private) and published books (public) separately. But they also *mined* the notebooks for material. The flow was unidirectional: notes → polished work. Not bidirectional.

**Andy Matuschak's "Evergreen Notes":** His public notes site (notes.andymatuschak.org) is generated from his private Obsidian vault. He's merged them technically but keeps most notes private. The system supports both; he manually curates what's public.

## Questions Worth Exploring

1. **Inversion:** What if you made your entire second brain public by default (like Gwern or Andy Matuschak)? Would that improve your thinking or make you self-conscious?

2. **Beneficiaries:** Who benefits from merging? Does it actually serve your writing/thinking, or does it just feel organizationally neat?

3. **Edge cases:** What happens to truly private notes (journal entries, work stuff, passwords)? Do they stay separate anyway? If so, you're not *really* merging everything.

4. **Historical parallel:** How did writers manage this before digital tools? Did Hemingway's notebooks and published stories "live together"?

5. **The ten-year test:** Imagine you have 10,000 notes and 100 blog posts. Does the merged vault still make sense, or does scale break the model?

6. **Tool dependency:** If Obsidian disappeared tomorrow, how hard would it be to separate them again? Does merging lock you into one tool?

7. **Process question:** What's your current workflow for going from rough note to published post? Where does it break down? Is separation the actual problem, or is it something else (like not revisiting notes, or perfectionism about publishing)?

## Raw Material

- "The blog is your `/public` folder. Everything else is private by default."
- "Friction is a feature. Making publishing slightly harder forces you to ask: 'Is this actually ready?'"
- "Tools that make publishing easier often result in less thoughtful publishing."
- "Is your blog part of your thinking process or the output of it?"
- "Your second brain is the factory; your blog is the showroom."
- "Mixing public and private pollutes both. You'll self-censor your notes and clutter your blog."
- "Separation kills serendipity. Merging enables unexpected connections."
- The Luhmann model: Zettelkasten is the source, publications are separate outputs
- The Matuschak model: One vault, selective publication
- The Garden model: Everything is published, nothing is finished

## Next Steps

1. **Experiment for one month.** Try merging them. Create a `/blog` folder in your second brain vault. Publish one post from a note. See how it feels. You can always separate them again.

2. **Map your actual workflow.** Track the next 5 blog posts you write. Where did the idea come from? How many times did you reference your second brain? How much friction did separation create? Be empirical.

3. **Talk to people who've done both.** Find someone who merged their systems, and someone who keeps them separate. Ask what surprised them. What do they wish they'd known?

4. **Define your publication philosophy.** Write down: "My blog is for ___________. My second brain is for ___________." If the answers are very different, keep them separate. If they overlap significantly, merge.

5. **Build the bridge, not the merger.** Instead of full integration, create a lightweight process: a weekly review where you tag second-brain notes that could become posts. A template that converts notes to drafts. A script that pulls linked notes into a blog post's references. Get the benefits of connection without the downsides of mixing contexts.
