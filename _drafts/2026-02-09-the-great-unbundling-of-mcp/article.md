---
title: "The Tool Stack"
date: 2026-02-09
status: draft
tags: [ai, mcp, skills, agents, architecture, developer-tools]
---

I've always had bad experiences with MCPs. OAuth tokens getting wiped. Servers breaking overnight because a dependency updated. Configuration files that work on one machine and silently fail on another. Every time an MCP gave me trouble, I replaced it with the same thing: a CLI call, or a direct API request. Something simpler. Something that just worked.

So when skills arrived and the "Skills killed MCP" hot takes started rolling in, I nodded along. Of course they did. A markdown file that teaches the agent what to do, no server required? That's the dream. I was ready to write the eulogy.

Then I opened the skills catalog in Claude and Codex. Most of those skills, the ones everyone says replaced MCP, are powered by MCP under the hood. Skills didn't kill MCP. They unbundled it.

For the unfamiliar: skills are markdown files that teach AI agents what to do and how. They're instructions, not capabilities. MCP (Model Context Protocol) is the execution layer, a standard protocol for connecting agents to external services with authentication, structured communication, and process isolation. And underneath both, for many integrations, there's just a CLI. Three layers. The question is which ones you actually need.

<!-- Section 2: A Markdown File and Some Examples — PENDING -->

<!-- Section 3: The Part Nobody Talks About — PENDING -->

<!-- Section 4: The Plumbing Is Still There — PENDING -->

<!-- Section 5: Four Questions Before You Reach for MCP — PENDING -->

<!-- Section 6: MCP's Real Audience Hasn't Shown Up Yet — PENDING -->

<!-- Section 7: Close — PENDING -->
