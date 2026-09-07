---
title: Discussions
description: "SFMMM Discussions: posts and polls (single choice / multiple choice / number rating), Discourse-style boosts, Markdown bodies, image lightbox and threaded replies, plus bar-chart poll results."
---

# Discussions

**Discussions**, the second sub-page under the **Workshop** group, is a community board separate from the mod system: post to exchange ideas, run polls for surveys, and interact with likes.

## Post List

The list page supports:

- **Search** — keyword filtering across posts;
- **Sort** — Edited / Newly published / Most likes / Boost count;
- **Time direction** and **per-row count** controls.

Posting requires login; when signed out, clicking "new post" pops up the login dialog automatically. Post details use the same **overlay + prefetch cache** instant-open pattern, and links of the form `#/discuss/<id>?comment=<cid>` can locate a specific floor directly.

## Poll Posts

When posting, you can choose a "Regular post" or a "Poll post". Poll posts support three poll types:

| Type | Description |
| --- | --- |
| Single choice | One vote per person |
| Multiple choice | Min / max selectable counts can be configured |
| Number rating | Min / max values and a step can be configured |

The visibility of poll results can be set to "always visible" or "visible after voting"; once you vote, results are shown as a **bar chart**, votes can be changed, and the participant count and average score are displayed.

## Boosting

Discourse-style lightweight interaction:

- At most one boost phrase per person per post, up to 16 characters;
- Aggregated as rounded "avatar + phrase" tags shown under the post;
- Your own boost is highlighted and can be removed anytime;
- It only expresses your stance and doesn't affect post sorting.

## Post Details

- The body supports **Markdown**, and clicking an image opens a lightbox view;
- Like, edit or delete your own posts;
- The comment area shares the exact same component set as mod comments: threaded replies, Markdown, image uploads, and identical edit / delete permission rules.

## My Discussions

In [My · Creator Workspace](/en/guide/workshop/my) you can view the posts you've published and all your replies, merged into a single list in reverse chronological order, distinguished by "post / reply" tags; clicking a reply entry jumps straight to the discussion details and locates the matching floor.
