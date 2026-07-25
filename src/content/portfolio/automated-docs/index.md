---
title: Automated documentation
description: Built and own the prompt engineering and custom workflows behind Mintlify's automated documentation system.
link: https://mintlify.com/docs/automations
order: 2
tags:
  - AI
  - automation
  - content systems
---

## Challenge

AI code tools accelerated the pace of shipping code, which breaks traditional documentation management processes in a few ways.

- Shipping cycles compress, so there is less time to gather information and get SME review on content updates
- Out-of-the-box models do not produce acceptable documentation

Best case scenario: docs teams collaborate well with PMs and engineers to know what is coming soon and have content prepared when features launch. But more often no one tells the docs team what they are working on or what was recently released.

Docs need to keep up with code velocity. We need a safeguards against poor communication on teams and poor quality content being hastily generated.

## Solution

Automations that watch source repositories and project management tools to build context and trigger agent runs to update documentation.

## What I built

**Prompts** — I designed and improved the core prompts to improve accuracy, specificity, and tone for documentation generation and maintenance. I continue to experiment with custom prompts that roll into the customer-facing Mintlify automations product or as examples for customer trainings.

**Quality workflows** — Custom automations ingest [Vale](https://vale.sh) (the prose style linter we use) output to run our agent against a deterministic output. If human contributors don't know our style guide or forget to fix Vale errors or warnings, a follow up agent improves the content quality.

**Translation workflows** — I created workflows that extend automated updates into localized versions of the docs, which allowed Mintlify to move from a third-party AI-localization provider to our own system.

**Product feedback loop** — Automations that analyze support tickets, user feedback, and agent feedback to find and fix content gaps.

## What this changed

Automations give me peace of mind that I'm not missing anything Mintlify's engineering team ships. The automated PRs also serve as a strong first draft for me to merge, make slight changes to, or for engineers to document their own features.

On a bigger scale, automations let Mintlify customers have self-healing documentation without having to be domain experts in technical writing or LLMs.
