---
title: "Of MCPs and Skills"
pubDatetime: 2026-02-09T00:00:00Z
description: "Skills didn't kill MCP. They unbundled it. A look at what actually changed, what's still running underneath, and when you need the plumbing."
tags:
  - ai
  - mcp
  - skills
  - agents
  - architecture
  - developer-tools
headerImage: /assets/images/headers/mcps-and-skills-header.png
---

I've had my fair share of bad experiences with MCPs. OAuth tokens getting wiped. Servers breaking overnight because a dependency updated. Configuration files that work on one machine and silently fail on another. Every time an MCP gave me trouble, I replaced it with the same thing: a CLI call, or a direct API request. Something simpler. Something that just worked.

So when skills arrived and the "Skills killed MCP" hot takes started rolling in, I nodded along. Of course they did. A markdown file that teaches the agent what to do, no server required? That's the dream. I was ready to write the eulogy.

Then I opened the skills catalog in Claude and Codex. Most of those skills, the ones everyone says replaced MCP, are powered by MCP under the hood. Skills didn't kill MCP. They unbundled it.

## A Markdown File and Some Examples

MCP used to do two jobs. It told the agent what tools were available (the instruction layer) and it provided the infrastructure to actually call them (the execution layer). Skills ate the first job entirely.

The reason is straightforward: progressive disclosure. MCP loads every tool definition into the agent's context window upfront. One popular GitHub MCP server injects 93 tool definitions: 55,000 tokens consumed before you've asked a single question. Even purpose-built servers like Playwright MCP and Chrome DevTools eat 14,000-18,000 tokens in tool descriptions alone. Skills do the opposite. A tiny descriptor gets loaded upfront (maybe 30-50 tokens per skill), and the full instructions only get fetched when the agent actually decides to use that skill. Same integrations, a fraction of the context cost.

The pattern went cross-vendor almost immediately. Anthropic shipped skills in October 2025, open-sourced them in December, and by early 2026 OpenAI Codex had adopted the same markdown-with-frontmatter approach. Developers who'd been running MCP servers started migrating, not because skills were superior in every dimension, but because the operational pain of auth breakage, API instability, and configuration drift exceeded whatever the protocol gave them back.

A skill is a markdown file. An MCP server is a service. Markdown files don't break at 3am. That's how technology transitions actually work: through pain thresholds, not theoretical arguments. It's the ["Worse is Better"](https://www.dreamsongs.com/WorseIsBetter.html) pattern that gave us JSON over XML. The simpler thing wins because it's good enough and dramatically easier to live with.

## The Part Nobody Talks About

There's a quieter shift underneath the skills story that most articles on this topic miss entirely: CLIs.

Models have been trained on millions of CLI interactions. They've been reinforcement-learned on `gh`, `aws`, `gcloud`, `docker`, `kubectl`, `stripe`, `vercel`. A skill that says "use `gh pr create --title X --body Y`" leverages pre-training knowledge that no MCP server can replicate. The agent doesn't just know the command. It knows the flags, the idioms, the error patterns, the structured output formats (`gh pr list --json`).

The `gh` CLI handles OAuth natively with proper token scoping. It stores tokens locally under OS-level permissions, inside the user's trust boundary. The GitHub MCP server was always overengineered for a problem `gh` already solved better. Every service with a mature CLI is one where MCP adds a protocol layer on top of something that already works.

Early benchmarks back this up. In a [browser automation comparison](https://kumak.dev/cli-vs-mcp-benchmarking-browser-automation/), CLI tools scored 77 to MCP's 60 with 33% better token efficiency, and completed debugging tasks that MCP structurally couldn't. Part of it is predictability: a CLI query returns output proportional to what you asked for, while an MCP snapshot might dump 5K or 52K tokens with no way to estimate beforehand. CLI calls carry their own overhead (agents like Claude Code run a security check on every command), but the efficiency gap holds.

CLIs have their own version of progressive disclosure, too. The agent can run `jira issues fetch --help` and get just the documentation for that one subcommand, instead of loading the entire Jira API surface into context. On-demand, scoped, and built into the tool itself.

## The Plumbing Is Still There

But open a skill catalog and look at what's actually running underneath. Many of those integrations, the ones everyone says replaced MCP, still call an MCP server behind the scenes. You just stopped noticing it, which is exactly how good plumbing should work.

The [Goose team at Block](https://block.github.io/goose/blog/2025/12/22/agent-skills-vs-mcp/) put it well: "Saying Skills killed MCP is about as accurate as saying GitHub Actions killed Bash." GitHub Actions sits on top of Bash and uses it underneath. Skills did the same thing to MCP. They replaced the need to *think about* the execution layer, not the execution layer itself.

In practice: a skill pointing at `gh`, a skill calling a REST endpoint, a skill backed by an MCP server. The agent performs about the same. [Mario Zechner tested this directly](https://mariozechner.at/posts/2025-08-15-mcp-vs-cli/): he built the same terminal control tool as both an MCP server and a CLI, ran identical tasks through Claude Code, and got equivalent results. His conclusion: the protocol is just plumbing. What matters is how well the tool is designed. The execution layer doesn't determine what the agent can do. It determines who maintains the infrastructure, who manages auth, and who gets paged when something breaks.

The most literal version of this unbundling is [MCPorter](https://github.com/steipete/mcporter/), built by Peter Steinberger — the same developer behind [OpenClaw](https://en.wikipedia.org/wiki/OpenClaw) (formerly Clawdbot), one of the most-starred repos on GitHub. OpenClaw's agent has no native MCP support. None. Instead, it uses MCPorter as a skill: a CLI wrapper that auto-discovers MCP servers across your system and exposes them as shell commands. Skills provide the instruction layer (markdown files describing what's available), MCPorter handles execution (wrapping MCP calls as `mcporter call server.tool(args)`), and the agent never touches the protocol directly.

Steinberger's position is blunt: "agents are really, really good at calling CLIs — actually much better than calling MCPs." Whether or not you agree, the architecture validates the unbundling pattern. The gaps in MCP's instruction layer were real enough that one of the most prominent agent builders in the ecosystem routed around them entirely — and built a bridge tool so others could too.

The way I think about it now: MCP is the API spec. Skills are the documentation for the API. You don't debate whether APIs or documentation should exist. You debate what each one should contain. MCP's instruction layer (tool descriptions, prompt primitives) is now redundant. What remains is the execution core: authenticated connections, process isolation, persistent sessions, structured communication. A smaller territory than "USB-C port for AI," but a more defensible one.

## Four Questions Before You Reach for MCP

Which layers you need depends on the use case. Here's the test I'd run before reaching for MCP:

**Is the integration complex enough to need a protocol layer?** If you're connecting to a service with a mature CLI or SDK, the skill can just point the agent at it. A markdown file that says "use `aws s3 cp` with these conventions" is all you need. If you're orchestrating twenty internal microservices behind a single endpoint, that's different.

**Do you need to hide internal architecture?** A skill is a markdown file on the client's machine, fully visible. An MCP server is an opaque boundary: the agent sends a structured request, gets a structured response, and never sees the twenty microservices or proprietary algorithms behind it. You can change the entire implementation without touching the client side.

**Is "the agent will probably follow instructions correctly" good enough?** For `gh pr create`, yes. For `transfer_funds` or `prescribe_medication`, probably not. Skills are natural language instructions, inherently open to misinterpretation. MCP tools have structured schemas with clear input/output contracts. Once the agent decides to call the tool, execution is deterministic. In payments, healthcare, and legal, "might follow instructions correctly" is a dealbreaker.

**Are you shipping this to multiple agent platforms?** This is the N×M problem. Without MCP, every app builds its own integration for every service: N apps times M services. With MCP, you build one server per service and every compatible platform gets it: N+M. If you're Stripe and you want every agent to be able to process payments, you ship one MCP server. Skills aren't a cross-platform standard yet. It's the strongest argument for MCP that almost nobody encounters in practice — yet.

If most answers are no: skill + CLI. If several are yes, MCP earns its place. My shorthand: I'd ship an MCP to external consumers before I'd ship a skill. When you're exposing services to other companies, the abstraction, auto-updating, and IP protection matter. When you're building for yourself, they usually don't.

## MCP's Real Audience Hasn't Shown Up Yet

Everything I've argued so far has a blind spot, and I should name it: I'm a developer using coding agents. I live in a terminal. I manage my own auth tokens. I'm the ideal skills user. The case for "just write a skill and point it at a CLI" is strongest in exactly my context, and weakest in the contexts where agents might matter most.

Most future agent users won't open a terminal. They need OAuth flows in a browser, not `gh auth login`. Enterprise IT needs centralized policy control over which agents access which services, with audit trails and revocation. MCP provides both.

And then there's security. In January 2026, security researchers [found 341 malicious skills on ClawHub](https://www.friedrichs-it.de/blog/agent-skills-vs-model-context-protocol/), the largest community skill registry. Credential exfiltration. Session theft. Keylogging. Reverse shells. Some were typosquatted, using names similar to legitimate skill authors, making them easy to install by mistake. Skills share the agent's full environment with zero process isolation. MCP servers run in isolated processes, where a compromised server can't read credentials from other servers. That security model matters more, not less, as agents become more autonomous.

There's a paradox here. If skills' security problem gets bad enough, they'll need governance infrastructure: sandboxing, signing, verification, registries. But that governance starts looking a lot like MCP. Skills succeed because they're simple. Scaling them might require the complexity they were built to avoid.

That tension plays out in the broader ecosystem, too. I keep thinking about what happened when JSON arrived and XML didn't die. XML retreated to enterprise systems where its guarantees (schemas, namespaces, validation, XSLT) actually justified the verbosity. Developers used JSON. Enterprise mandated XML. Two tiers, different norms, coexisting for years. MCP might be heading the same way. It already has the Linux Foundation, AWS, Google, and Microsoft behind it, while skills have cross-vendor adoption but no standards body. Developers use skills. Enterprise mandates MCP. The question is whether that enterprise tier is large enough to sustain the ecosystem, or whether agents will remain primarily developer tools where skill + CLI dominates.

But the ecosystem isn't standing still. In January 2026, Anthropic shipped [Tool Search](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/tool-search) in Claude Code — a direct response to the context window problem that drove the skills migration in the first place. Instead of loading every MCP tool definition upfront, the agent gets a lightweight search index. When it needs a tool, it queries the catalog, loads just those definitions, and proceeds. The numbers tell the story: tool description overhead dropped from 134K tokens to roughly 5K in internal testing, and accuracy on Opus 4 jumped from 49% to 74%.

This is MCP learning the lesson skills taught it. Progressive disclosure — the exact mechanism that made skills win the instruction layer — is now being built into the protocol itself. Server instructions have started serving a skill-like function: short descriptions that tell the agent "these capabilities exist, search when you need them." The context-efficiency gap that made developers flee to skills is narrowing. Not closed, but narrowing. And that matters, because it means the analysis here isn't a permanent verdict. It's a snapshot of a system that's already adapting.

---

Skills pushed MCP to where it belongs: authenticated execution, process isolation, deterministic control for high-stakes domains. The instruction layer is gone. The "universal connector for AI" positioning is gone. What's left is smaller, but it's real.

After I opened that catalog and saw MCP running underneath everything, I stopped trying to pick a side. My setup landed where you'd expect: skills pointing at CLIs for daily work, MCP handling the few integrations that genuinely need auth delegation and isolation. Mostly markdown files and terminal commands. The plumbing shows up where it has to.

For most developers, most of the time: write a skill, point it at a CLI, move on.

---

*Thanks to [Cam Haider](https://x.com/CamBrazy3) for his thoughtful notes and back and forth on this piece.*
