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

## What GRPO Actually Is

GRPO (Group Relative Policy Optimization) is DeepSeek's efficient RL algorithm that eliminates the value network. It does NOT specifically target verbosity — it's about compute efficiency (cuts RLHF compute roughly in half).

## The Irony (For the Essay)

We train AI on human text → humans are verbose → AI becomes verbose → we build systems to correct for our own bias → we're engineering machines to be better at brevity than we are.

## Usable Framing

> "AI models trained with standard RLHF become verbose because reward models inherit our bias toward length. Researchers have responded with techniques like R-DPO and SimPO that explicitly penalize verbosity — essentially teaching models to fight the very preference they learned from us."

## Sources

- [A Long Way to Go: Investigating Length Correlations in RLHF](https://openreview.net/forum?id=G8LaO1P0xv)
- [SimPO: Simple Preference Optimization](https://arxiv.org/html/2405.14734v1) — NeurIPS 2024
- [ArmoRM: Multi-Objective Reward Modeling](https://rlhflow.github.io/posts/2024-05-29-multi-objective-reward-modeling/)
- [Verbosity Compensation Behavior](https://www.emergentmind.com/topics/verbosity-compensation-behavior)
- [GRPO Explained](https://cameronrwolfe.substack.com/p/grpo)
