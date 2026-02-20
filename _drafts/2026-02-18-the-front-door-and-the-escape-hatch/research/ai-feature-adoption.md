# Research: AI Feature Adoption & Discoverability

*Researched 2026-02-19*

## Summary

The data tells a clear story: AI features have high headline adoption numbers but low actual usage depth. More critically, discoverability is a documented failure mode — users literally don't notice AI features exist, even when they're in the interface. The Nielsen Norman Group's research on Amazon's Rufus chatbot is the smoking gun: zero participants discovered the AI on their own, including daily Amazon users.

## Key Findings

### The Adoption-Usage Gap

The gap between "has used AI" and "regularly uses AI meaningfully" is massive.

- **54.6% of US adults** (18-64) have adopted generative AI tools — a 10-point jump in one year. This exceeds the PC adoption rate (19.7% in 1984) and internet adoption (30.1% in 1998).
- **But only 5.7% of total work hours** involve AI — up from 4.1% just months earlier.
- **Only 31% of employees** use AI regularly (9% daily, 17% weekly, 5% monthly).
- **Only 3% of AI users** pay for premium services — one of the largest monetization gaps in consumer tech.
- **42% of companies abandoned most AI initiatives in 2025** (up from 17% in 2024).
- **Positive sentiment is dropping:** From 70%+ in 2023-2024 down to 60% in 2025, even as adoption rises.
- **Source:** [St. Louis Fed](https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025), [Microsoft AI Economy Institute](https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/reports/global-ai-adoption-2025/), [Menlo Ventures](https://menlovc.com/perspective/2025-the-state-of-consumer-ai/)
- **Credibility:** High — Federal Reserve, Microsoft research institute, major VC firm with survey methodology.
- **How to use:** The gap between adoption and actual usage supports the "chat box as hedge" argument. People try AI features and then... don't use them regularly. The product said "here's everything" and the user said "I don't know what to do with this." That's the blank text box problem at scale.

### The Discoverability Crisis — Amazon Rufus

NN/g's usability study on Amazon's Rufus AI chatbot is devastating:

- **Zero participants** proactively clicked on an AI prompt suggestion during the study — not even daily Amazon users.
- **No visual indicator** suggested the search bar was any different than it had always been, providing no indication that users could enter natural-language queries.
- **Amazon's busy design** competed with the AI features, making the Rufus button effectively invisible.
- Even on mobile, the **unlabeled and ambiguous icon** was ignored by users.
- **Key quote:** The AI prompt suggestions "went completely unnoticed without facilitator guidance."
- **Source:** [NN/g: AI Discoverability: Amazon's Mistakes](https://www.nngroup.com/articles/discoverability-ai-amazon/) (March 2025)
- **Credibility:** Very high — Nielsen Norman Group is the gold standard for UX research.
- **How to use:** This is the strongest evidence for "most users never find the escape hatch." If daily Amazon users can't find a chatbot in the search bar of the world's largest e-commerce platform, the discoverability problem isn't a minor UX bug — it's a fundamental limitation of the paradigm.

### Users Stick to Familiar Tools

- **91% of AI users** reach for their favorite general AI tool for nearly every task, despite countless specialized apps to choose from.
- **Source:** [Menlo Ventures State of Consumer AI](https://menlovc.com/perspective/2025-the-state-of-consumer-ai/)
- **How to use:** This reinforces the "front door" argument — users want familiar, opinionated tools, not infinite possibility. They'd rather use one general tool they understand than explore specialized options. Familiarity and structure beat capability.

### NN/g on AI Features Generally

- **"Today, we see lots of companies that rushed into implementing useless AI features and chatbots. AI chat is not always the answer."** — NN/g
- **2023 was particularly rife** with rushed, poorly thought-out AI features as companies scrambled to latch onto the AI craze.
- **Conversation starters** (prompt suggestions) are emerging as a key pattern to address the blank-page problem — but they're a band-aid on a structural issue.
- **Source:** [NN/g: AI Features Must Solve Real User Problems](https://www.nngroup.com/articles/ai-user-value/), [NN/g: Prompt Controls in GenAI Chatbots](https://www.nngroup.com/articles/prompt-controls-genai/)
- **Credibility:** Very high.
- **How to use:** NN/g's criticism directly supports the piece's thesis. Their point about conversation starters is interesting — it's the product trying to add affordances back to a paradigm that stripped them out. They're trying to rebuild the front door from inside the escape hatch.

### Developer AI Adoption — Stack Overflow

- **84% of developers** are using or planning to use AI tools in development (up from 76% last year).
- **51% of professional developers** use AI tools daily.
- **But 52% of developers** either don't use AI agents or stick to simpler tools. 38% have no plans to adopt agents.
- **Source:** [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai/)
- **Credibility:** High — industry's largest developer survey.
- **How to use:** Even among developers (the most AI-receptive population), there's a significant gap between "using AI for inline suggestions" (simple, structured, in-context) and "using AI agents" (complex, open-ended, chat-like). The more structured the AI interaction, the higher the adoption.

## Counterpoints or Complications

- The adoption-usage gap might be temporary. Early internet adoption had similar patterns (people "used" the internet but only checked email). The usage depth might catch up.
- Amazon's Rufus failure might be specific to Amazon's cluttered design, not a universal indictment of AI discoverability.
- Rising negative sentiment toward AI could be cultural/political rather than a UX problem.

## Raw Quotes

- "AI prompt suggestions went completely unnoticed without facilitator guidance" — NN/g on Amazon Rufus
- "AI chat is not always the answer" — NN/g
- "91% of AI users reach for their favorite general AI tool for nearly every task" — Menlo Ventures
- "42% of companies abandoned most AI initiatives in 2025" — industry research

## Sources Consulted

- [NN/g: AI Discoverability: Amazon's Mistakes](https://www.nngroup.com/articles/discoverability-ai-amazon/)
- [NN/g: AI Features Must Solve Real User Problems](https://www.nngroup.com/articles/ai-user-value/)
- [NN/g: Prompt Controls in GenAI Chatbots](https://www.nngroup.com/articles/prompt-controls-genai/)
- [St. Louis Fed: State of Generative AI Adoption](https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025)
- [Microsoft AI Economy Institute](https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/reports/global-ai-adoption-2025/)
- [Menlo Ventures: State of Consumer AI](https://menlovc.com/perspective/2025-the-state-of-consumer-ai/)
- [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai/)
