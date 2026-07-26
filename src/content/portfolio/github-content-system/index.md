---
title: GitHub Docs content design system
description: Owned the content model and design system for one of the world's largest developer documentation sites.
link: https://docs.github.com/en/contributing
order: 4
tags:
  - content strategy
  - content design
  - documentation
---

GitHub Docs is used by more than 20 million developers every year. When I was at GitHub, the Docs team had about 20 people. Some members of other teams contributed to the documentation as well. Then we open sourced our documentation, inviting thousands more contributors.

## Challenge

When the GitHub Docs were first open sourced, our contribution system was still private. We suddenly had dozens of PRs each week from eager contributors who were trying their best, but without access to our content design system couldn't create PRs that met the Docs team's standards. Writers were spending hours each week reviewing and fixing PRs before merging them, or closing contributor PRs because they were too burdensome to get ready to merge.

Additionally, our content design system was poorly maintained. It sprawled across four different repositories with contradicting and out of date information.

## What I built

**Content design system** — The taxonomy, templates, and standards defining how every piece of documentation was structured. Content types included concepts, reference, how-to, troubleshooting, release notes, quickstart, and tutorial, each with a defined purpose, audience, and form.

**Content model evolution** — When user research or product needs revealed gaps, I designed new content types, documented them, and brought them into the shared model.

**Contributor documentation** — The system had to work for OS contributors who had never read a style guide and for PMs and engineers making their first documentation contributions. I open sourced, wrote, and maintained [docs.github.com/en/contributing](https://docs.github.com/en/contributing) as the primary resource for the GitHub Docs team, other GitHub teams, and OS contributors.

## What this changed

All contributors to the GitHub docs had a single resource for creating quality that met our standards. Our content design system became easier to maintain and expand.
