---
title: Documentation metrics and analysis - onboarding completion
description: Set up telemetry and observability to see how Mintlify documentation supports onboarding.
order: 3
tags:
  - analytics
---

## Challenge

Historically, measuring documentation quality is a challenge. Good is subjective. Easy to measure metrics like page views aren't meaningful or actionable. You need to connect the docs to observable outcomes.

A key KPI for Mintlify is onboarding completion, which is tracked by a series of PostHog events. I set out to show how documentation influences onboarding completion.

## What I built

**Observability** - I set up cross-domain tracking for every `.mintlify.com` domain, so that users across `app.mintlify.com` (the product dashboard) and `mintlify.com/docs` (the documentation site) can be stitched together and product events can correlate with docs events. The cross-domain tracking also allows other marketing and learning sites to be used for similar analysis. An engineer helped me build the identity stitching infrastructure.

**Docs onboarding dashboard** - I built a PostHog dashboard that streams onboarding completion and documentation events. This lets us see which pages people read before completing onboarding, how many pages they read, how long it takes to complete onboarding from when they first enter the docs site, and more. 93% of all users read at least a single page of documentation before onboarding.

**Onboarding prompts** - On the pages with the most traffic before finishing onboarding, I added copyable prompts for users to paste to LLMs to assist with onboarding. Onboarding completion for all docs visitors rose from 7% to 9% over two weeks.
