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

## A Markdown File and Some Examples

MCP used to do two jobs. It told the agent what tools were available (the instruction layer) and it provided the infrastructure to actually call them (the execution layer). Skills ate the first job entirely.

The reason is straightforward: progressive disclosure. MCP loads every tool definition into the agent's context window upfront, on every call. Dozens of tool schemas, parameter descriptions, usage examples, all sitting in memory whether the agent needs them or not. Skills do the opposite. A tiny descriptor gets loaded upfront (maybe 30-50 tokens), and the full instructions only get fetched when the agent actually decides to use that skill. It's the difference between importing every module at startup and importing on demand. When you're paying per token at scale, this compounds fast.

The pattern was so obviously right that it went cross-vendor almost immediately. Anthropic shipped skills in October 2025, open-sourced them in December, and by early 2026, OpenAI Codex and other agent platforms had adopted the same markdown-with-frontmatter approach. Armin Ronacher, the creator of Flask, wrote about moving all his MCPs to skills after struggling with auth breakage and API instability. He didn't switch because skills were architecturally superior in every dimension. He switched because the operational pain of running MCP servers exceeded whatever the protocol gave him back. That's how technology transitions actually work: not through theoretical arguments, but through pain thresholds. It's the "Worse is Better" pattern that's played out before with Unix over Lisp machines, REST over SOAP, JSON over XML. The simpler thing doesn't win because it's correct. It wins because it's good enough and dramatically easier to live with.

<!-- Section 3: The Part Nobody Talks About — PENDING -->

<!-- Section 4: The Plumbing Is Still There — PENDING -->

<!-- Section 5: Four Questions Before You Reach for MCP — PENDING -->

<!-- Section 6: MCP's Real Audience Hasn't Shown Up Yet — PENDING -->

<!-- Section 7: Close — PENDING -->
