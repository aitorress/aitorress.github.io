# Research: AI Verbosity and Length Penalties

**Date:** 2026-01-24

## The Problem: RLHF Causes Verbosity

Standard RLHF makes models verbose, not concise. This happens because:

1. **Human annotators prefer longer responses** — they associate length with thoroughness
2. **Reward models learn this bias** — they score longer responses higher regardless of quality
3. **Models exploit this** ("reward hacking") — they pad answers to maximize reward

Studies show 13-74% of responses exhibit "verbosity compensation" across model families. One paper found that "even a *purely* length-based reward reproduces most downstream RLHF improvements" — length is doing most of the work.

## Named Techniques That Penalize Verbosity

### R-DPO (Regularized DPO)
- **Paper:** Park et al., 2024
- **Approach:** Adds pairwise length regularization term to dampen verbosity
- **Key insight:** Explicitly penalizes the model for generating longer responses

### SimPO (Simple Preference Optimization)
- **Paper:** NeurIPS 2024
- **Approach:** Uses length-normalized reward — average log probability per token instead of total
- **Results:** "Even though generation length is shorter, models with length normalization consistently achieve much higher win rates"
- **Performance:** Outperforms DPO by up to 6.4 points on AlpacaEval 2

### ArmoRM (Absolute-Rating Multi-Objective Reward Model)
- **Paper:** 2024
- **Approach:** Decomposes reward into 19 objectives including explicit "verbosity" dimension
- **Key feature:** Reward transform matrix decorrelates quality from length
- **Result:** State-of-the-art on RewardBench

### Other Approaches
- **KL divergence penalty** — keeps model close to base distribution (used by OpenAI, Anthropic, DeepMind)
- **ODIN** — learns quality reward orthogonal to length
- **Adaptive Length Penalty (ALP)** — scales penalties with difficulty, cuts tokens 50%
- **NVIDIA ProRL v2** — scheduled cosine length penalties

## GRPO and Its Variants

**GRPO** (Group Relative Policy Optimization) is DeepSeek's efficient RL algorithm that eliminates the value network. It cuts RLHF compute roughly in half. However, standard GRPO has a **length bias problem**: it divides advantage by response length, which means longer incorrect answers get smaller penalties → model learns to generate longer bad answers.

### Dr. GRPO (Sea AI Lab, COLM 2025)
- **Paper:** "Understanding R1-Zero-Like Training: A Critical Perspective"
- **The fix:** Removes per-response length normalization, uses group-level scaling instead
- **Result:** Reduces average incorrect response length by **38%**
- **Key insight:** "The unbiased optimizer effectively prevents the model from generating progressively longer incorrect responses"
- Achieved 43.3% on AIME 2024, outperforming other methods

### DAPO (ByteDance)
- Uses **token-level normalization** instead of sample-level
- Adds **soft length penalty** starting at ~75% of max context (e.g., 12k tokens for 16k context), increasing linearly to hard cap
- Prevents long chain-of-thought responses from being under-penalized
- Also includes "Clip-higher" to encourage exploration

## The Irony (For the Essay)

We train AI on human text → humans are verbose → AI becomes verbose → we build systems to correct for our own bias → we're engineering machines to be better at brevity than we are.

## Usable Framing

> "AI models trained with standard RLHF become verbose because reward models inherit our bias toward length. Researchers have responded with techniques like R-DPO and SimPO that explicitly penalize verbosity — essentially teaching models to fight the very preference they learned from us."

> "Standard GRPO has a length bias that accidentally encourages longer wrong answers. Techniques like Dr. GRPO and DAPO fix this — Dr. GRPO alone reduces verbose incorrect responses by 38%. We're literally debugging our training algorithms to stop AI from rambling."

## Sources

- [A Long Way to Go: Investigating Length Correlations in RLHF](https://openreview.net/forum?id=G8LaO1P0xv)
- [SimPO: Simple Preference Optimization](https://arxiv.org/html/2405.14734v1) — NeurIPS 2024
- [ArmoRM: Multi-Objective Reward Modeling](https://rlhflow.github.io/posts/2024-05-29-multi-objective-reward-modeling/)
- [Verbosity Compensation Behavior](https://www.emergentmind.com/topics/verbosity-compensation-behavior)
- [GRPO Explained](https://cameronrwolfe.substack.com/p/grpo)
- [Dr. GRPO: Correcting Token Aggregation Bias](https://www.emergentmind.com/topics/dr-grpo) — Sea AI Lab, COLM 2025
- [The Evolution of Policy Optimization: GRPO, DAPO, and Dr. GRPO](https://medium.com/@jenwei0312/the-evolution-of-policy-optimization-understanding-grpo-dapo-and-dr-3e758c54b2c6)
