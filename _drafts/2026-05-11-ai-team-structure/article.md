---
title: "Structure Compresses the Value Loop"
date: 2026-05-12
status: draft
tags:
  - ai
  - teams
  - process
  - leadership
  - product
  - engineering
---

# Structure Compresses the Value Loop

How many mornings have I sat in a standup where the engineering team has been pair-programming together all day and already knows, in real time, what everyone is working on? The standup runs anyway, because somebody's job is to run it, which mostly amounts to reading out a document that could have been an email. How many times have I been one of seventy people on a Zoom with most cameras off, half the room reading other tabs, while four people take turns saying things the rest of us already knew? Nobody ever asked whether these rituals fit our team. Somebody read about them in a book, or saw them work somewhere else, and copied them in. We are a different company. The ritual runs anyway.

Last quarter my company finished pulling apart its customer-journey teams and put product/platform pillars in their place. A few pillars, one seat. Sitting in that seat the first week, the old shape of process stopped making sense. Underneath was a sharper question than the one the reorg was technically answering: what should a software team look like once AI absorbs most of the busy work, and what part of the old shape needs to die first?

## What I'm Claiming, and What I'm Not

I want to be honest about this essay. It is a pattern I see converging across the people I read and across what is happening in my own seat. It is not a field study, and Andrew Ng has called the broader question of AI team shapes open. At the level of the whole industry, he is right. What I am describing is the leading edge of that question as I see it.

The pattern, in one sentence: AI has raised the per-person floor enough that flat, tiny teams with decision authority inside the team are newly viable at meaningful scale. That structural shift is the load-bearing variable. The right structure makes high-agency individuals possible. High-agency individuals, paired with closed-loop discipline, compress the iteration cycle from weeks to days. Everything people want to redesign about process is downstream of that.

One scope note. This essay assumes you are on a team that has, or can hire, high-agency individuals. How to get a low-agency team to high agency is a different essay and I do not have a clean answer for it. If you are reading this from inside a 500-person company, hold tight; there is a section for you at the end.

## Structure Is Where Decisions Live

Here is the cleanest definition I have found: structure is where decisions live. The phrase rules out the things you might first reach for. Org chart depth tells you little. Headcount per team tells you less. What matters is where the final call on what this team ships gets made. If that call lives outside the team, no ritual hygiene saves you. You can run the best standups in your industry and still ship at the speed of whoever is upstream of you.

A high-agency team, then, is one where decisions live inside, the mission resolves conflict, and the hiring bar was paid up front. Each of those three doors is doing real work. Decisions inside: nobody waits. Mission resolves conflict: nobody re-litigates priorities. Hiring bar paid: nobody is managed into agency they do not have.

One more idea before we go on, because the rest of the piece runs on it: loop closure. Signal infrastructure (telemetry, customer contact, evals, demos) plus someone paying attention and adjusting the next ship. Both halves required. A team with great dashboards and no one watching them has zero loop closure. A team with sharp instincts and no signal has none either. The pair is the thing.

This is the spine claim. Flat, tiny, and decision authority inside the team is the shape AI has newly made viable at scale. Hold that. I am going to show you why that shape, which existed in 2018, is the one producing different outcomes in 2026.

## Every Ship Is a Training Example

Here is the mechanism the structure serves. Ship into the world. Observe what happens, including silence. Learn what value means for these users in particular. Adjust the next ship. That is the whole loop.

The loop is universal. The signal is local. What "value" means for a hamburger has almost nothing to do with what it means for Microsoft Word, which has almost nothing to do with what it means for a security operations dashboard. Value is undefinable in general. It can only be discovered domain by domain, ship by ship.

The reason this is more than "be agile faster" is the metaphor that turned the whole thing around for me. Every ship is a training example for the team. The team is the model being trained on user feedback. Each iteration sharpens the next. The team learns what value is. Delivery follows.

Pre-AI, this loop ran in weeks to months. PRDs, sprints, QA, staged rollouts, retros, then maybe you got to learn something. AI compresses it to days. A small team that can build a working prototype Tuesday afternoon, ship it to ten real users by Wednesday morning, and read the telemetry by Thursday is operating at a different clock speed from any "agile" shop, no matter how fast. That compression is the era-specific unlock. The same shape running on a slower clock would have looked, in 2018, indistinguishable from any other small team.

Closed-loop discipline is the third leg, and it is the one people forget. Signal infrastructure plus the discipline to act on it. Without the discipline half, fast shipping produces a hundred features no one uses and a backlog of dashboards no one reads. The compression buys you more iterations per quarter. What you do with those iterations is the part nobody can install for you.

## What 2018 Couldn't Do

The honest objection is that we have seen the shape before. Basecamp ran flat and tiny in 2018. Early Linear was a handful of people. 37signals has been small and opinionated for two decades. If the structure existed back then, what does AI actually change?

The shape existed. The output it could produce was capped by the people inside it. The bottleneck was per-person skill, and per-person skill is slow to move. You could find six exceptional engineers, give them mission and authority, and they would still take a month to ship the thing six exceptional engineers can ship in a month. The structure was viable for small bets. It hit a ceiling as ambition scaled.

What AI changed is the ceiling on what one person can produce. It raised the floor for the floor-bound. For everyone else, it amplified what was already there. That asymmetry is why the K-curve in productivity outcomes is real. The same flat structure, running on individuals with the new ceiling, runs at a different clock speed and takes on scope that previously required a layer of coordinators to keep aligned. The structure was always enabling. AI made the per-person engine powerful enough that the same shape now produces materially different outcomes at thirty, fifty, a hundred people.

## Hire Well or Manage Forever

So how does a team actually get to high agency? Three mechanisms, in order of upstream-ness.

First, the hiring bar. There is a binary that took me too long to see. As a leader, you spend your time hiring or you spend your time managing. The hours are zero-sum. Hire well or manage forever. Managing forever means the team has less agency because *you* are managing it. The agency you wanted to give them is sitting in your calendar. The hiring bar is the upstream investment that buys downstream agency. You pay once at the top of the funnel, or you pay every week for the life of the team.

Second, mission as tiebreaker. Most of the alignment rituals that fill calendars exist because someone has to decide between two reasonable options. When the mission is sharp enough to actually decide, an entire genus of ritual disappears. You do not need a prioritization meeting to choose between two roadmap items if the mission says one of them is what you exist to do and the other is not. The team already knows what wins. The conversation is about how, not whether.

Third, decision authority and loop closure, paired. This is the one most companies try to do as halves. Decision authority without loop closure is empowered teams shipping into the dark. Loop closure without decision authority is engaged teams who can see what is happening and cannot act on it. Either half on its own is theatrical. The pair is what makes a team capable of learning and adjusting on its own. Authority gives them the right to move. Loop closure gives them something to move toward.

## Theater Isn't Melting

Now we can talk about process. Process is downstream. The conversation about what to kill and what to keep stops making sense unless the structure is right. With the structure assumed, here is the discriminator.

A ritual is theater if it fires whether or not it is needed. The standup that runs every morning regardless of whether anything has changed. The weekly half-day planning meeting that runs whether the roadmap is settled or wide open. The retro that happens every other Friday because the calendar says so. Each of these can have a legitimate use. They become theater the moment they fire whether or not they have one.

A ritual is not theater if a human, exercising taste, decides each time whether to invoke it. A weekly metrics readout that an engineering lead chose to keep because last week's signal needed discussing. An eval suite that gets run because someone smelled a regression. A demo Friday that happens because something is actually worth showing. Same nouns, different epistemic status.

Theater is not melting in the way some commentators want to believe. The rituals that fire regardless of judgment are. Rituals gated by taste survive, and the good news is they sharpen, because the people running them are the people who decided they were worth running.

If you want a Monday morning move, here it is. Audit every recurring ritual on your team. For each one, ask: would a thoughtful person, looking at this week's situation, choose to invoke this? Kill the ones that fire regardless. Keep the ones gated by judgment. Add a small number of loop-closing ones, demos and metric reads and evals, but only if those are gated too. Otherwise you are replacing one set of theater with another, just with newer nouns.

Here the K-shape arrives, and the two readers I have been writing to need to hear different things. If you are a senior engineer who has been doing this on your own, the news is that the practice is becoming legible at the team level and you have permission to name it. Demos over memos. Taste over checklists. If you are mid-career and your job has been to run the rituals, the news is harder. The rituals that defined the role are the ones the audit kills first. Read that carefully. The role is the thing melting. You are the person inside the role, and the last section of this essay is for you.

## The Teams That Already Live This Way

Three teams to point at, plus the seat I am writing from.

Midjourney is the canonical example because it is the one nobody can hand-wave away. Roughly eleven people. A product earning, by reasonable estimates, hundreds of millions of dollars a year. No traditional product management layer. Founder-led, ships continuously. swyx has written about it as the prototype of the "tiny teams playbook," and the playbook is exactly the shape this essay is describing. Flat. Decision authority inside. Closed loop.

Uber's Programs and Platforms group is the example at scale, and the interesting move there is the ritual they installed. Every quarter, teams have to justify their right to exist. Gergely Orosz has documented this. Read it as loop closure with teeth. The signal that closes the loop runs deeper than telemetry. It is whether the team is producing something the rest of the business can use, and whether it can defend that against a quarterly judgment call. The shape looks different from Midjourney. Same pattern, reorganized for scale. Decisions inside the team, judgment-gated rituals, mission as tiebreaker.

Claude Cowork, the multi-user agent product Felix Rieseberg has talked about on the MAD Podcast, is the example I keep coming back to. Small team, sharp mission, novel product. Mission as tiebreaker is doing a lot of work there. The scope is held by what they exist to build, not by a roadmap negotiation.

The seat I am writing from is the fourth data point and the smallest. Pillars instead of journeys. Decision authority pushed down into the pillars. Practices reorganized around tight feedback loops rather than ceremony. The cleanest thing I can say from the inside is that I was running the loop already, and the new structure is making it cheaper to keep running. The shape is the same shape the other three are running.

## If You're Not in a 10-Person Startup

If you are inside a 500-person company, the question is whether any of this is yours to use. The honest answer depends on whether decision authority can travel down, and whether your specific seat is a place it can land.

The structural prerequisite, said plainly: someone above you has to be willing to push decision authority into the team that ships the work. If that movement is happening at your company, even at the wrong pace, every mechanism I described earlier (hiring bar, mission as tiebreaker, decision authority paired with loop closure) is what you should be installing on whatever scope you have. Hire for agency, including in your interview loops if you have them. Press the leadership team for a mission sharp enough to actually decide ties. Pair every grant of authority with the signal infrastructure that makes the authority meaningful. The work is real, and it is also slow.

If decision authority is not traveling down, and there is no sign that it will, read it as data. The K-shape from earlier is a verdict on the seat, not on the person sitting in it. Sometimes the right move is to argue for the seat to change. Sometimes the right move is to change seats.

A Tuesday move, for the mid-career coordinator whose manager still expects PM artifacts and whose calendar is still full of meetings: ship one thing yourself this sprint. One. Even if you still run the standup and write the doc. Be the person who runs the standup, writes the doc, and shipped something this week. Two sprints in a row of that and your evidence base about your own seat starts to fill in. You will know whether the seat permits the tilt or fights it. Both answers are useful.

The leader's version of the Tuesday move is to find one team where you can push decision authority down a level this quarter, pair it with a single loop-closing ritual, and see what happens. Pick a team where the people are ready for it. The hiring bar and the agency lever are the same lever, one step earlier than the other.

Every ship is a training example. The team is the model. Each iteration sharpens the next one, or it doesn't. The era-specific unlock is AI inside a structure that can act on what it surfaces, run by people who will. If you can put yourself or your team in that arrangement, the gradient you climb is steep. If you cannot, the most useful thing you can do is be honest about why, and start the slow work of changing the arrangement. The compounding is real, and it has a direction. The work of this era is to make sure your direction is one you would have chosen.
