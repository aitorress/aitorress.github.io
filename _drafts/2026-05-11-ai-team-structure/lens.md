# Lens — AI Team Structure Essay

**Date:** 2026-05-11
**Source:** Author-provided synthesis (combines analysis + author-input + research notes into a single load-bearing brief)

---

## Lens

**Question the essay answers:** What should a software team and its process look like once AI absorbs most of the busy work — and what part of the old shape needs to die first?

**Form:** Blog post.

**Audience:** Build-shops — engineering, product, design. *Not* sales (per M12 scoping). Two readers in mind:
- **Senior IC / staff engineer** already compounding with AI — vindication.
- **Mid-level coordinator (PM, EM, designer-by-meetings)** — warning + path. The takeaway is *shift to contributor / IC with agency*.

**Scope tightening (from M7 + Q1):** This essay is for teams that have, or can hire/develop, high-agency individuals. It's not a recipe for getting a low-agency team to high agency in one step — that's a different essay.

**Edge / personal stake:** NCLH's reorg from customer-journey to product/platform (Web / Mobile / Core Services) was the triggering moment — three pillars in one seat brought this question into daily practice. The deeper observation: how my own pace shifted once I started leaning on taste and critique to deliver, and what that says about how peers and companies are structuring AI work in real time.

**Categorical pin:** *informed synthesis* — the pattern emerging from the leading edge of this work, applied to my own practice. Not a field study. Not a vibe.

**Falsifier:** if the same flat/tiny + closed-loop pattern produced the same outcomes in 2018 as in 2026, the thesis is wrong and this is a lean-startup essay wearing AI clothes. The draft must name what 2018 flat/tiny teams (Basecamp, early Linear, 37signals) *could not do* that AI now makes possible.

**Fallback frame if the thesis collapses:** *(open — to be determined)*

---

## Working thesis (load-bearing)

> AI raises the per-person floor enough that **flat, tiny teams with decision authority inside the team** become newly viable at meaningful scale. That structural shift is the load-bearing variable. The right structure makes high-agency individuals possible; high-agency individuals plus **closed-loop discipline** (signal infrastructure and the discipline to act on it) compress the iteration cycle from weeks to days. **Every ship is a training example for the team; the team is the model being trained on user feedback.** Value is undefinable in general — it's domain-specific — but the loop is universal, and AI compresses the loop. The "process redesign" people are talking about is downstream of this: when the structure is flat and the loop is fast, most pre-AI rituals stop firing because they are no longer needed. What remains is a small set of **judgment-gated rituals** that close the loop — weekly metrics readouts, evals, demos, mission-as-tiebreaker. **Theater isn't melting; rituals that fire regardless of judgment are.** Rituals gated by taste survive and sharpen.

---

## Spine claims

1. **Structure is the load-bearing variable.** Flat + tiny + decision authority inside the team is the shape AI newly makes viable at meaningful scale.
2. **Structure is enabling, not deterministic.** It makes good process possible. Individuals — high-agency, taste-trained — are what guarantee it.
3. **Shipping is the mechanism by which taste discovers value.** Value is undefinable in general; the loop is universal. AI compresses the loop from weeks to days — *that's* the era-specific unlock.
4. **Closed-loop discipline is the third leg.** Signal infrastructure plus the discipline to act on it. Without it, fast shipping produces 100 features no one uses.
5. **Theater = ritual that fires regardless of judgment.** Not-theater = ritual gated by taste. The replacement set is small, judgment-gated, loop-closing.
6. **Three mechanisms produce high-agency teams:** hiring bar, mission as tiebreaker, decision authority + loop closure (paired).

---

## Operational definitions

- **Theater** = a ritual that fires regardless of whether it's needed in this case.
- **Not-theater** = a ritual gated by taste — a person decides each time whether to invoke it.
- **Structure** = where decisions live. Not org chart depth, not headcount per team — *who makes the final call on what this team ships.* If that's outside the team, no ritual hygiene saves you.
- **Loop closure** = signal infrastructure (telemetry, customer contact, evals, demos) **plus** someone paying attention and adjusting the next ship. Both halves required.
- **High-agency team** = a team where decisions live inside, the mission resolves conflicts, and the hiring bar was paid up front.

---

## The loop

The mechanism by which taste discovers value:

1. Ship into the world.
2. Observe what happens (adoption, retention, complaints, silence).
3. Learn what value means *for these users*.
4. Adjust the next ship.

Value is domain-specific (hamburger satisfaction ≠ Microsoft Word productivity) — it can't be generalized. **The loop is universal; the signal is local.** Pre-AI, the loop ran in weeks-to-months. AI compresses it to days. That compression is the era-specific unlock — and the reason the same shape (flat/tiny, high-agency, closed-loop) that existed in 2018 now produces materially different outcomes.

**Metaphor for the essay:** every ship is a training example, and the team is the model being trained on user feedback. Each iteration sharpens the next.

---

## Three mechanisms for high-agency teams

How a team gets to high agency (answers M7's self-recursion problem):

1. **Hiring bar.** *Hire well or manage forever.* As a leader you either spend time hiring or spend time managing — and managing means the team has less agency because *you* are managing. The hiring bar is the upstream investment that buys downstream agency.
2. **Mission as tiebreaker.** When conflict arises, the mission decides. This eliminates entire categories of alignment rituals that used to exist for conflict resolution — the team already knows what wins.
3. **Decision authority inside the team + loop closure (paired).** Structural permission to act + operational signal to act on. Without both, agency is theatrical. Decision authority = where decisions live. Loop closure = weekly metrics readouts, evals, demos. Together they make the team capable of learning and adjusting on its own.

---

## Evidence anchors

The pattern this essay describes is visible at:

1. **Midjourney** (via swyx's Tiny Teams Playbook) — ~11-person team running a multi-hundred-million-revenue product. Tiny team, no traditional PM layer, founder-led, ships continuously.
2. **Uber's Programs/Platforms** (Gergely Orosz) — quarterly team-right-to-exist reviews; every team has to justify continued existence.
3. **Claude Cowork** (Felix Rieseberg on MAD Podcast) — small mission-aligned team shipped a novel multi-user agent product in months; mission as tiebreaker + tight scope.
4. **(Open slot — pick at draft time.)** Candidates: Linear, Vercel, or someone from peer network who can be named with confidence.
5. **NCLH** (own seat) — Web/Mobile/Core Services reorg; new practices around tight loops and decision authority pushed into pillars.

**Evidence framing for the essay** (per Q6 honesty): *"I'm confident in the pattern because the people I'm reading are converging on it and I'm seeing it in my own seat. I'm aware Ng calls it open — that's the broader field; I'm describing the leading edge."* This sentence belongs near the top.

---

## Essay-worthy lines (extracted from the interview — for use in the draft)

- *"Every ship is a training example for the team; the team is the model being trained on user feedback."* — the loop metaphor (R2)
- *"Hire well or manage forever."* — the hiring binary (R7)
- *"Theater = ritual that fires regardless of judgment. Not-theater = ritual gated by taste."* — the discriminator (A.2, R4)
- *"Structure = where decisions live."* — operational definition (R4)
- *"Value is undefinable in general; the loop is universal, the signal is local."* — the M11 unlock (R2)
- *"Demos over memos."* — the PRD-vs-prototype move (M1)
- *"AI doesn't level skills; it raises the floor. It also amplifies what is there, which makes the K-curve meaningful."* — reconciles M2 with M8/M9
- *"Audit every recurring ritual. Kill the ones that fire regardless of need. Keep the ones gated by judgment. Add a small number of loop-closing ones — but only if they're gated too."* — Monday-morning advice (R4)

---

## Draft-pass tasks

Things that still need work when sitting down to write. Not thesis-blocking, but unanswered until the draft addresses them.

- **Adoption mechanism for a 500-person company.** Q4 names the prerequisite (push decision authority down) and Q7 names the mechanisms (hiring bar, mission, loop closure). The draft needs an explicit *how does a legacy org actually adopt this* paragraph — including the answer to "what if the structural prerequisite isn't met?"
- **The "what 2018 couldn't do that AI now makes possible" paragraph.** The falsifier remains abstract until this is named in the body. Candidate: pre-AI flat/tiny teams were skill-bottlenecked per person; AI raises the per-person ceiling enough that the same structure now produces N× output, making the compressed loop viable.
- **The fourth evidence anchor.** Pick a real team you can defend (Linear, Vercel, or someone from peer network).
- **The two-reader voice.** Hardest craft challenge. The lever: lead with the structural argument so the K-shape lands as a *consequence of team-shape*, not a verdict on the reader. Gives the mid-PM somewhere to stand.
- **The Tuesday move for the mid-PM must actually work for someone whose manager still expects PM artifacts.** Either name the structural permission they need from above, or offer a smaller move (ship one thing yourself next sprint, even if you also still run the standup).
- **Rename consideration.** The essay is operationally about *structural redesign with process as downstream observation* — not "process redesign" in the abstract. Decide before drafting whether to rename the piece or reframe inside the existing title.
