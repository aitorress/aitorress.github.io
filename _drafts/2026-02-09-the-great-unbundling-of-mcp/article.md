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

## The Part Nobody Talks About

Skills won the instruction layer. That's the headline. But there's a quieter shift underneath that most "skills vs MCP" articles miss entirely: CLIs.

Models have been trained on millions of CLI interactions. They've been reinforcement-learned on `gh`, `aws`, `gcloud`, `docker`, `kubectl`, `stripe`, `vercel`. A skill that says "use `gh pr create --title X --body Y`" leverages pre-training knowledge that no MCP server can replicate. The agent doesn't just know the command. It knows the flags, the idioms, the error patterns, the structured output formats (`gh pr list --json`). It's seen these tools used in thousands of contexts during training, and it gets better at them with every training cycle.

Consider GitHub specifically. The `gh` CLI handles OAuth natively with proper token scoping. It stores tokens locally under OS-level permissions, inside the user's trust boundary. There's no server to maintain, no port to manage, no JSON config to debug at 2am. The GitHub MCP server was always overengineered for a problem `gh` already solved better. And this generalizes: `aws`, `gcloud`, `docker`, `kubectl`, `stripe`. Every service with a mature CLI is a service where an MCP server adds a protocol layer on top of something that already works.

CLIs have their own version of progressive disclosure, too. The agent can run `jira issues fetch --help` and get just the documentation for that one subcommand, instead of loading the entire Jira API surface into context. On-demand, scoped, and built into the tool itself.

## The Plumbing Is Still There

So skills won the instruction layer. CLIs handle most execution for developers. MCP is dead, right?

Go look at the skills catalog. Actually look. The GitHub skill? MCP-powered. Slack integration? MCP. Database connectors, cloud deployments, monitoring tools? MCP, MCP, MCP. Skills are the interface layer. MCP is running the plumbing underneath. You just stopped noticing it, which is exactly how good plumbing should work.

The Goose team at Block put it well: "Saying Skills killed MCP is about as accurate as saying GitHub Actions killed Bash." GitHub Actions didn't make Bash irrelevant. It sits on top of Bash and uses it underneath. Skills did the same thing to MCP. They didn't replace the execution layer. They replaced the need to *think about* the execution layer.

The way I think about it now: MCP is the API spec. Skills are the documentation for the API. You don't debate whether APIs or documentation should exist. You debate what each one should contain. And right now, MCP's instruction layer (its tool descriptions, its prompt primitives) has been made redundant by skills. What remains is the execution core: authenticated connections, process isolation, persistent sessions, structured communication. A smaller territory than "USB-C port for AI," but a more defensible one.

## Four Questions Before You Reach for MCP

So the full stack looks like this: skills for instructions, MCP for execution, CLI underneath. But MCP is the optional middle layer. You add it when the requirements justify it. You don't start there.

Here's the test I'd run before adding MCP to anything:

**Is the integration complex enough to need a protocol layer?** If you're connecting to a service with a mature CLI or SDK, the skill can just point the agent at it. A markdown file that says "use `aws s3 cp` with these conventions" is all you need. If you're orchestrating twenty internal microservices behind a single endpoint, that's different.

**Do you need to hide internal architecture?** A skill is a markdown file on the client's machine. Everything in it is visible: the endpoints, the workflow logic, the sequencing. If your company runs fraud detection across proprietary systems and wants to expose a clean `create_payment(amount, currency, destination)` interface without revealing what's behind it, an MCP server is an opaque boundary. The agent sends a structured request, gets a structured response, and never sees your internals. You can change the entire implementation without touching the client side.

**Is "the agent will probably follow instructions correctly" good enough?** For `gh pr create`, yes. For `transfer_funds` or `prescribe_medication`, probably not. Skills are natural language instructions, inherently open to misinterpretation. MCP tools have structured schemas with clear input/output contracts. Once the agent decides to call the tool, execution is deterministic. In payments, healthcare, and legal, "might follow instructions correctly" is a dealbreaker.

**Are you shipping this to multiple agent platforms?** This is the N×M problem. Without MCP, every app builds its own integration for every service: N apps times M services. With MCP, you build one server per service and every compatible platform gets it: N+M. If you're Stripe and you want every agent to be able to process payments, you ship one MCP server. Skills aren't a cross-platform standard yet (they're heading there, but not yet).

If most answers are no: skill + CLI. If several are yes, MCP earns its place. My shorthand: I'd ship an MCP to external consumers before I'd ship a skill. When you're exposing services to other companies, the abstraction, auto-updating, and IP protection matter. When you're building for yourself, they usually don't.

## MCP's Real Audience Hasn't Shown Up Yet

Everything I've argued so far has a blind spot, and I should name it: I'm a developer using coding agents. I live in a terminal. I manage my own auth tokens. I'm the ideal skills user. The case for "just write a skill and point it at a CLI" is strongest in exactly my context, and weakest in the contexts where agents might matter most.

Most future agent users won't open a terminal. They can't run `gh auth login`. They need an OAuth flow in a browser: click "Connect to GitHub," authorize in two clicks, done. MCP enables that. Enterprise IT needs to manage which agents can access which services across an entire organization, with centralized policies, audit trails, and revocation. MCP provides that. These aren't hypothetical requirements. They're table stakes for any company that takes compliance seriously.

And then there's security. Skills' radical simplicity is both their selling point and their attack surface. In January 2026, security researchers found 341 malicious skills on ClawHub, the largest community skill registry. Credential exfiltration. Session theft. Keylogging. Reverse shells. The attack vector was straightforward: skills share the agent's full environment with zero process isolation, so a malicious skill can access anything the agent can. Some were typosquatted (similar names to legitimate skill authors), making them easy to install by mistake. MCP servers, by contrast, run in isolated processes. A compromised server can't read credentials from other servers. That's not a theoretical advantage. It's a security model that matters more as agents become more autonomous and less supervised.

MCP is also consolidating institutional support. It's now under the Agentic AI Foundation (Linux Foundation) alongside OpenAI's AGENTS.md and Block's goose, with AWS, Google, Microsoft, and Bloomberg as platinum members. Skills have cross-vendor adoption but no standards body, no central registry, no formal versioning. For enterprise procurement, the difference matters.

I keep thinking about what happened when REST arrived and SOAP didn't die. SOAP retreated to enterprise systems where its guarantees (transactions, security headers, formal contracts) actually justified the complexity. Developers used REST. Compliance teams mandated SOAP. Two tiers, different norms, coexisting for years. MCP might be heading the same way. Developers use skills. Enterprise mandates MCP. The question is whether MCP's enterprise audience is large enough to sustain the ecosystem, or whether agents will remain primarily developer tools where skill + CLI dominates.

---

Skills didn't kill MCP. They pushed it to where it belongs: authenticated execution, process isolation, deterministic control for high-stakes domains. The instruction layer is gone. The "universal connector for AI" positioning is gone. What's left is smaller, but it's real.

For most developers, most of the time: write a skill, point it at a CLI, move on. A markdown file and some examples will get you surprisingly far. When you need to hide complexity, guarantee deterministic execution, serve multiple platforms, or ship integrations to people who don't live in terminals, MCP earns its way back in.

MCP went from "USB-C port for AI" to "the right choice when nothing simpler will do." That's a long walk from where it started. But "is MCP overengineered?" was always the wrong question. The better one: overengineered for whom, and for when?
