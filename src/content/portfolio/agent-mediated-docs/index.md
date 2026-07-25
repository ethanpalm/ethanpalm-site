---
title: What the data shows when docs meet LLMs
description: Analyzed agent-mediated documentation interactions across 17,784 sites and presented the findings at Write the Docs Portland 2026.
link: https://wtd2026.mintlify.app/
order: 2
tags:
  - analytics
  - education
  - speaking
---

There are few benchmarks to know if you or your users are successful using AI with documentation. I delved into the Mintlify platform data to evaluate how people discover, read, and maintain documentation using AI.

I presented this information at [Write the Docs Portland 2026](https://www.writethedocs.org/conf/portland/2026/speakers/#speaker-ethan-palm-what-the-data-shows-when-docs-meet-llms-and-why-i-m-excited-for-the-future-ethan-palm) and built a [companion site](https://wtd2026.mintlify.app/) for the data.

## Research

I pulled and analyzed agent-mediated interaction data across 17,784 Mintlify-hosted sites using ClickHouse and Helicone.

Rather than present a flat list of stats, I organized the findings into three stages of documentation interactions: discovering, reading, and writing. Agents find docs differently than people, use them differently, and increasingly help produce them.

## Findings

**Discovering** — At the time of presenting, AI conservatively accounted for roughly 35% of documentation readership.

**Reading** — across 95,000 AI chat interactions, 55% were a single question with no follow-up. Humans lean on embedded AI assistants for quick answers. Conversations with a lot of back-and-forth generally had more negative sentiment.

**Writing** — Pull requests created by agents are merged about half the time. Agent-authored doc changes are good enough to trust in production workflows, but can be improved.

## Presenting

My main goal was for the audience at Write the Docs (mostly technical writers) to have actionable data. I didn't want to just dump numbers on people. So I built benchmarks for people to measure their documentation against.

- AI readership above 35% so that you know agents can discover your content
- 55%+ of AI chat interactions finishing in a single turn so your users are finding quick success instead of getting frustrated with a chatbot
- 55%+ of agentic PRs merged so that you're not wasting tokens on content you don't use
