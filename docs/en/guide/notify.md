---
title: Notifications
description: "SFMMM Notifications: Replies, Applications, Likes and Ratings in one hub — unread badges drive the sidebar, one-click jumps locate the matching floor, and authors approve or reject edit applications."
---

# Notifications

The **Notifications** group in the sidebar is the app's message hub, containing four sub-pages: **Replies**, **Applications**, **Likes** and **Ratings**. Unread messages appear as a blue badge in real time on the corresponding group and sub-items in the sidebar (`99+` once over 99), so you can grasp community activity at a glance.

## Replies

Aggregates "comments / replies / likes" notifications, spanning both mods and discussions:

- **Unread blue dot + badge**, with "Mark all as read";
- Each notification card auto-extracts the first image of the body as a thumbnail, and plain-text excerpts are truncated automatically;
- Shows the actor's avatar and time;
- **Click to jump** — marks the message read automatically and locates the matching mod details or the specific floor in a discussion, so you never lose a reply's context again;
- Paginated browsing supported.

## Applications

The author-facing queue of **pending edit applications**:

- Shows the applied scope (basic info / language files (all) / a specific language), the target mod, the applicant, the reason and the time;
- One-click **approve / reject**; once approved, the applicant can help maintain the mod's content within the applied scope (see [Creator Workspace · Edit Permission System](/en/guide/workshop/my#edit-permission-system)).

## Likes

The list of mods you've liked, shown as standard Workshop cards; clicking goes straight into the details:

- Data is **read from the local SQLite cache first**, and only queries the remote database when the cache is empty, writing back afterward — so the page opens with almost no wait;
- Can be refreshed manually; unliking on the details page syncs back to the list automatically on return;
- Has its own per-row count preference.

## Ratings

The list of mods you've rated, working exactly like "Likes": local cache first, manual refresh, and the list syncs after you clear a rating on the details page.

::: tip Page preloading
The four sub-pages of Notifications (and the four sub-pages of the Workshop) use a **preload chain**: activating the current page pre-mounts the next one, so switching displays instantly with no waiting; already-mounted pages are merely hidden rather than destroyed when you switch away, and they force-refresh their data when you return — fast, yet never stale.
:::
