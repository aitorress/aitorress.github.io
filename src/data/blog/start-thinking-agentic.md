---
title: "Start Thinking Agentic"
pubDatetime: 2025-08-20T00:00:00Z
description: "Ask ten experts what an 'agent' is, you'll get sixteen answers. The better question? How agentic is your system."
tags:
  - agents
  - agentic
  - workflows
  - llms
---

Ask ten experts what an "agent" is, you'll get sixteen answers. The word "agent" gets thrown around in AI like confetti. Everyone uses it, nobody defines it the same way.

**The result?** A pile of definitions that don't quite line up. Some emphasize autonomy, others memory, others tools. A few are broad enough to include half of software, others are so narrow they exclude systems we'd all call agents in practice.

Smarter people than me have tried to pin "agent" down to a single definition. They failed. I don't plan to. What I do want is to make sense of the noise - to see the patterns, form my own view, and avoid looking like an idiot next time someone corners me at a meetup with "so… what's an agent?"

Spoiler: it's not as simple as "yes or no."

Here's how three of the voices I respect most in this space define "agent":

- **LangChain (Harrison Chase)** → _"Agents are systems that use an LLM to decide the control flow of an application."_
    Only LLMs? What about smaller but powerful models? And what if they're not controlling the whole flow, just executing tasks along the way?

- **Anthropic** → _"Fully autonomous systems that operate independently over extended periods, using various tools to accomplish complex tasks."_
    This adds autonomy, time horizons, and tools into the mix. But it raises questions: what if my agent only needs five seconds, not five hours? What if it's just routing a decision?

- **OpenAI** → _"Agents are systems that independently accomplish tasks on your behalf."_
    Translation: a fortune cookie. So broad it could describe half of software.

And if that wasn't enough, here's the extended cast of definitions (I read them so you don't have to):

- **Nvidia** → reasoning, planning, tools, memory. [link](https://developer.nvidia.com/blog/introduction-to-llm-agents)

- **SuperAnnotate** → sequential reasoning + style adaptation. [link](https://www.superannotate.com/blog/llm-agents)

- **TrueFoundry** → action-taking, planning, multi-step tasks. [link](https://www.truefoundry.com/blog/llm-agents)

- **Turing** → reason, plan, act, interact with environments. [link](https://www.turing.com/resources/what-are-llm-agents-and-how-to-implement)

- **Botpress** → interpret language + perform tasks. [link](https://botpress.com/blog/llm-agents)


Consensus? Not even close.

**Even with all the disagreement, some themes keep showing up**. Autonomy, tools, reasoning, memory, multi-step operations - the usual suspects.

[Swyx does a great job synthesizing these commonalities](https://www.latent.space/p/agent), and I'll put it in my own words:

- **Tools** → an agent isn't just talk, it can act.

- **Goals** → it has objectives it's working toward.

- **Control flow** → it decides what happens next, not just follows a script.

- **Multi-step ops** → it can chain actions, not just fire once.

- **Memory** → it remembers context across steps.

- **On your behalf** → it's not just for itself, it's working for you.


Not everyone phrases it the same way, but if you strip things down, most definitions orbit these ideas.

Even with those commonalities, the conversation still feels stuck in a binary trap: is this thing an _agent_ or not?

Here's where Andrew Ng reframed it for me:

> _"Rather than arguing over which work to include or exclude as being a true agent, we can acknowledge that there are different degrees to which systems can be agentic."_
> - [Andrew Ng on X](https://x.com/AndrewYNg/status/1801295202788983136)

That shift - **from a noun (_agent_) to an adjective (_agentic_) - blew my mind**. Instead of forcing a yes/no definition, it opens up a spectrum: _how agentic is this system?_

On one end, you've got **workflows**: deterministic, predefined paths where the model just fills in the blanks. On the other, fully **agentic systems**: autonomous, tool-using, self-directing. Most real-world setups? They live somewhere in between.

Think of it less as a definition, more as a spectrum:

`Workflow ▬▬▬▬▬▬▬▬▬▬▬▮ Agent`

**Anthropic makes this distinction clear:**

- **Workflows** → systems where LLMs and tools are orchestrated through **predefined code paths**. Deterministic, predictable, repeatable.

- **Agents** → systems where LLMs **direct their own processes**, deciding how to use tools and how to reach a goal. Flexible, autonomous, adaptive. ([Anthropic, _Building Effective Agents_](https://www.anthropic.com/research/building-effective-agents))


To be fair, in my own experience, most "agentic" systems I've built or seen in practice are really hybrids - a mix of workflows and agentics. The only difference is _where they land on the spectrum_. The more predefined logic you bake in, the closer you get to workflows. The more autonomy you allow the system, the further it drifts toward the agent end.

The tradeoffs live here too:

- **Workflows** buy you predictability, cost control, and speed.

- **Agents** buy you adaptability, exploration, and coverage in open-ended problems.

So where does that leave us?

**For me, it means dropping the obsession with a single neat definition**. Most of the "agentic" systems I've built, seen companies launch, or hacked on myself are hybrids - part workflow, part agent. The real difference is where they land on the spectrum. The more autonomy you give, the more they lean agent. The more you predefine, the more they lean workflow. Simple as that.

And the choice isn't academic. It comes down to tradeoffs: workflows buy you predictability, cost control, and speed; agents buy you adaptability, exploration, and coverage when the problem space is messy. Every team has to decide where on that line they want to sit.

So the next time someone corners me with "what's an agent?" I'll honestly say: _I don't know, and I don't really care._ What I can tell you is how agentic your system is - and that's the question that actually matters.

And if you want to zoom further into the agentic side, there are plenty of ways to wire them - from ReAct to Plan-Execute and beyond. When you start talking about wiring , it's less philosophy and more plumbing. And plumbing deserves its own article.
