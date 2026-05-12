---
title: "Structure Compresses the Value Loop"
pubDatetime: 2026-05-12T00:00:00Z
description: "A ritual becomes theater the moment it fires regardless of whether it is needed. Once AI compresses the iteration loop and decisions live inside the team, most of the rituals you used to hold stop passing that test."
tags:
  - ai
  - value
  - feedback-loop
---

A while ago my company reorganized away from customer-journey teams and into product and platform. I organized my own work into three pillars inside one seat, and half the rituals I used to attend stopped making sense. I assumed at first that this was a transition problem, the kind of disorientation that follows any reorg. The pattern persisted long past the point where it could be explained that way. The old shape had been producing the old rituals, and the new shape made most of those rituals visibly redundant at best. The ones that survived were the ones I _chose_ to keep, week by week.

## The Discriminator

What I came away with after that period was a working rule: a ritual becomes theater the moment it fires regardless of whether it is needed. Consider the weekly half-day planning meeting that runs whether the roadmap is settled or wide open, the retrospective that happens every other Friday because the calendar says so, or the standup that runs whether anything has changed overnight. Each of these can have a real purpose, and each one becomes theater the moment it is held without anyone asking whether it should be.

A ritual stays useful when a human is exercising taste each time and deciding whether to invoke it. A metrics readout earns its slot when last week's signal needs real discussion, an eval suite gets run when someone smelled a regression they want to chase down, and a demo Friday happens only when there is something worth showing.

Some commentators talk about theater as a category melting away across the industry. The thing actually melting is the subset of rituals that fire regardless of judgment, while rituals gated by taste survive and sharpen over time. The person running a judgment-gated ritual is also the person who decided it was worth running, and that selection effect is what does the sharpening.

The interesting question becomes what made the discriminator suddenly viable for so many teams at once. A team running on judgment-gated rituals needs people whose judgment is trustworthy, working inside a structure that lets them exercise it, on a clock fast enough that bad calls show up before they compound. A year ago none of those three conditions came cheaply. Today two of them have gotten substantially cheaper.

## High-Agency Teams

Start with the cheap condition. AI raised the per-person floor enough that flat, tiny teams with decision authority inside the team are newly viable at meaningful scale. That structural shift is the load-bearing variable in the whole argument. The other two conditions, judgment-trustworthy people and a fast clock, are what you build on top of it.

A pattern is converging across the writers I follow and across what I see in my own seat. Andrew Ng has called process redesign for AI an open question across the broader field, and I think he is right about the broader field. What this essay describes is happening at the leading edge of that question.

Org chart depth tells you very little about a team's agency, and headcount per team tells you even less. What matters more is where the final call on what this team ships gets made. When that call lives outside the team, no amount of ceremony hygiene will save you. You can run the best standups in your industry and still end up shipping at the speed of whoever sits upstream of you.

Three mechanisms tend to get a team to high agency, and they sit at different levels of the funnel.

The hiring bar sits upstream of everything else. As a leader you can spend your hours either hiring or managing, and those hours are zero-sum. Managing means the team has less agency because _you_ are the one managing it, which means the agency you intended to give them is sitting in your calendar instead.

Mission as tiebreaker eats most of the alignment rituals that fill calendars. Those rituals exist because someone has to choose between two reasonable options and the people in the room cannot agree on which to take. When the mission is sharp enough to actually decide, an entire genus of ritual disappears. The conversation shifts toward how to execute on the chosen direction rather than whether the direction is the right one.

The third mechanism is the one most companies attempt as two separate halves. Decision authority and loop closure only do their work when you pair them. Decision authority without loop closure produces empowered teams that ship into the dark. Loop closure without decision authority produces engaged teams who can see what is happening and have no permission to act on it. Either half running on its own quickly becomes theatrical. Pairing the two halves is what makes a team genuinely capable of learning and adjusting on its own.

Loop closure deserves its own treatment in this argument. It consists of signal infrastructure (telemetry, customer contact, evals, demos) combined with someone paying attention to what the signal says and adjusting the next ship accordingly, and both halves of that combination have to be present for loop closure to mean anything. A team with great dashboards and nobody watching them is operating with zero loop closure, just as a team with sharp instincts and no signal infrastructure is. When real loop closure sits paired with decision authority, the team it sits inside becomes capable of training itself.

## The Era-Specific Unlock

The honest objection here is that we have seen this shape before. Basecamp was running flat and tiny back in 2018, early Linear was a handful of people, and 37signals has been small and opinionated for the better part of two decades. If the structure already existed back then, the question becomes what AI has changed.

Pre-AI, the loop ran in weeks to months. PRDs, sprints, QA, staged rollouts, retros, and then maybe you got to learn something at the end of it. A small team that can build a working prototype Tuesday afternoon, ship it to ten real users by Wednesday morning, and read the telemetry by Thursday is operating at a different clock speed from any "agile" shop, no matter how fast. Run the same loop in weeks instead of days and you become indistinguishable from any small team in 2018.

The bottleneck pre-AI was per-person skill, which is slow to move. You could find six exceptional engineers, give them mission and authority, and they would still take a month to ship what six exceptional engineers can ship in a month. The shape was always enabling in principle. The per-person engine that drove the shape was simply not powerful enough to produce materially different outcomes once you got to thirty, fifty, a hundred people inside the company.

AI changed the ceiling on what one person can produce. The same flat structure, running on individuals with the new ceiling, takes on scope that previously required a layer of coordinators to keep aligned.

## The Team Is the Model

The frame I ended up holding on to was that a high-agency team running a closed loop is a model being trained on user feedback, where every ship serves as a training example, the team itself is what the training is shaping, and each iteration sharpens the next.

Defining value in the abstract is a fool's errand. Value is undefinable in general, and it can only be discovered domain by domain. Customer satisfaction does not generalize to Microsoft Word productivity, which does not generalize to insurance-claim throughput. The way value gets achieved is the part that generalizes. The loop is universal even when the signal is local to the specific domain. You ship, you observe what happens, you learn what value means for these particular users, and you adjust the next ship accordingly. What AI has done is compress this cycle from weeks to days, and that compression is the era-specific unlock.

A team that ships fifty deliberate experiments in a quarter ends up with fifty training examples of what its users actually want, while a team that ships only five ends up with five. The gap between those two teams compounds across every subsequent quarter.

## Where This Breaks

The shape does not work everywhere, and I should say where I think it breaks.

The first failure mode is the case where the loop physically cannot compress. If you build FDA-cleared software, pacemakers, or aircraft systems, your ship cadence is set by regulators rather than by your own prototyping speed. Flat and tiny still beats coordinator-heavy in these domains, although the era-specific unlock is muted because compression is bounded externally. Hardware sits in the same category for a different reason. You cannot ship-then-learn when the manufacturing run is the bet you are placing. The closed loop runs in quarters in hardware, and the AI lever lives on the design surface rather than on the delivery surface.

The second failure mode is the case where the signal itself is delayed. Enterprise B2B selling on quarterly buying cycles fits here, as does government procurement, along with anything else where the user is far from the buyer and the buyer decides slowly. You can compress your ship and still find yourself unable to compress when you actually learn whether the ship mattered. The compression argument breaks at the signal boundary rather than at the build boundary.

The third failure mode is internal to the shape itself. Being flat, tiny, fast, and decision-authority-inside-the-team is a precondition for the outcomes I am describing, and it remains only that. The shape assumes the people inside the team have the taste to direct the speed they now have access to. A high-agency team without taste-trained people will ship a hundred features that nobody uses. The structure makes the engine, and the people inside the team decide which way to point it.

If your domain is hardware, your customers buy in quarters, and your team is staffed mostly with generalists doing their first product job, this essay is probably aimed somewhere other than you. The team I am describing is one where the bottleneck has shifted over time from coordination to judgment.

## The Teams That Already Live This Way

Midjourney is the most cited example in this conversation. Roughly eleven people, a product earning hundreds of millions a year, and no traditional product management layer to speak of. Everyone quotes the headcount and the revenue. The part that actually matters in the example is what they have removed from their organization. Their organization runs without a PRD culture, a sprint cadence, or a roadmap committee. The rituals that survive there are gated by what is shipping. swyx has written it up as a "tiny teams playbook," and the playbook is the shape this essay has been describing.

Uber's Programs and Platforms group is the version at scale, and the interesting move there is the ritual they installed inside the structure. Every quarter, every team has to justify their right to continue existing. Gergely Orosz has documented this in detail. The way to read the practice is as loop closure with teeth, since the signal that closes the loop runs deeper than what telemetry alone can tell you. The signal includes whether the team is producing something the rest of the business can use, and whether the team can defend that work against a quarterly judgment call from leadership.

Claude Cowork is the example I keep coming back to. Felix Rieseberg has talked about the multi-user agent product on the MAD Podcast. It is a small team with a sharp mission building a novel product, and mission as tiebreaker is doing a lot of the work for them. The scope of what they build is held by what they exist to build rather than by a roadmap negotiation among stakeholders.

## Monday and Tuesday

The Monday-morning move here is to audit every recurring ritual on your team. For each one, ask whether a thoughtful person looking at this week's specific situation would choose to invoke it. Kill any ritual that fires regardless of the answer, keep the ones that are genuinely gated by judgment, and add a small number of loop-closing rituals (demos, metric reads, evals) on the condition that those too are gated by judgment rather than by the calendar.

If you are inside a 500-person company, the question becomes whether any of this is yours to use at all. The honest answer depends on whether decision authority is able to travel down to your seat, which in turn depends on someone above you being willing to push it down. When that movement is happening at your company, even at the wrong pace, the move is to hire for agency in every interview loop you run, to press the leadership team for a mission sharp enough to actually decide ties, and to pair every grant of authority with the signal infrastructure that would make the authority meaningful.

If decision authority is not traveling down and there is no sign that it will, read that as data about your situation. Sometimes the right response is to argue for the shape of the seat itself to change, and sometimes the right response is to leave the seat behind for a different one.

For the mid-career coordinator whose manager still expects PM artifacts and whose calendar is full of meetings, the move is to ship one thing yourself this sprint. Just one piece of real product, even if you continue to run the standup and write the doc in parallel. The hard part of this move sits underneath the shipping itself. Your performance review still measures the artifacts you produce more than the products you ship into the world. The Tuesday move is a bet against your own incentive structure, which you run for two sprints in order to gather evidence about whether your seat permits the tilt or fights it. Running that bet is worth it even when the information you gather is uncomfortable.

The leader's version of the same move is to find one team this quarter where you can push decision authority down a level, pair the push with a single loop-closing ritual, and watch what happens over the following months. Choose the team carefully, picking one where the people inside it are already showing signs of readiness for the change.

## The Quiet Way It Lands

The change announces itself quietly when it happens. A meeting that used to anchor your week stops getting put on the calendar, and nobody asks why it disappeared. A weekly readout that used to require a deck becomes a Slack message, and the conversation around it gets sharper than the deck ever was. The standup gets shorter because there is more shipping happening and less reporting required to track it. Then one day you notice that you spent the whole week deciding what to ship rather than justifying what you had already shipped, and the gradient under your feet had changed without anyone bothering to announce that it had.

Every ship is a training example, the team is the model itself, and each iteration sharpens the next one when the conditions allow it. The era-specific unlock is AI placed inside a structure that can act on what it surfaces, run by people who will. When you can put yourself or your team in that arrangement, the gradient you climb gets steep quickly. When you cannot, the most useful thing you can do is be honest about why, and start the slow work of changing the arrangement so that someday you can.
