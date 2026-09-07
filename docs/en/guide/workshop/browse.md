---
title: Cloud · Browse Mods
description: "SFMMM Cloud Browse Mods: search, filter and sort mods, instant prefetched details, multilingual Markdown or rich-text descriptions, three-state install/update buttons, ratings, threaded comments."
---

# Cloud · Browse Mods

**Cloud**, the first sub-page under the **Workshop** group, is a complete cloud mod store: browsing, searching, filtering, subscribing and downloading, rating and commenting all in one place.

## Browsing & Discovery

The toolbar at the top provides full discovery capabilities:

- **Search** — keyword search, triggered by Enter or the search button;
- **Type filter** — All / v1 mission / v2 mission / DLL mod / Composite;
- **Sort** — Edited (recently updated) / Newly published / Most likes / Top rated;
- **Time direction** — newest first or oldest first, with the preference persisted;
- **Per-row count** — freely adjust the grid density.

Mod cards show the mod_key, the author (avatar + name; clickable to view their profile popup), created / updated time, comment count, like count, category badge, rating stars, a two-line-truncated summary, and per-language file rows (language badge + name + version + size).

## Instant Details

The details view is deeply optimized for snappiness:

- **Hover prefetch** — hovering over a card for 700ms, or pressing down on it, starts prefetching the detail data, so a click hits the cache and renders immediately;
- **Overlay rendering** — the details page opens on top of the list, which stays mounted; **going back reloads nothing — the scroll position and image cache are fully preserved**;
- **Navigation stack** — clicking other mods from within a details page maintains a navigation stack, so back returns to the previous details rather than the list; the mouse side button (back) works too;
- **Next-page prefetch** — once the current page is ready, the next page is requested automatically, so paging through needs no loading.

## Mod Details Page

The details page is fully informative:

- Author profile card (browse all the mods they've published, their total downloads and total likes);
- **Star rating** — after logging in you can rate or clear your rating; the average and the number of ratings update live;
- Created / updated time and download count;
- **Multilingual descriptions** — switched via the per-language checkboxes at the top; languages without a translation are shown greyed out; full descriptions support both **Markdown and rich text**;
- **Lightbox gallery** — images in the description open into a zoomable lightbox preview.

## Subscribe & Download

The "Available Versions" section lists files by language (with the first 8 hash characters visible), and the install button shows three states:

- **Install** — when not installed;
- **Update** — when the local version is lower (compared semantically);
- **Installed, Reinstall** — when already installed, allowing a forced reinstall.

Downloads run on the Rust backend, with a progress bar showing "Pending / Downloading (percent + speed) / Extracting / Recording" in real time. **Tasks keep running even when you leave the page**, and every record is managed centrally on the [Subscription Records](/en/guide/workshop/records) page.

Installed mods can also: open the install directory (the manifest's files are highlighted automatically in the file explorer), view the file list, or unsubscribe in one click (removes each file precisely per the manifest and cleans up the empty directories).

## Likes & Comments

- **Like** — a floating heart on cards and the details page; one-click favoriting, guarded by login;
- **Comments** — support threaded replies ("View N replies" with collapse / expand), newest-first / oldest-first sorting, Markdown formatting, images uploaded to an image host on paste or insert, and an image lightbox; you can edit / delete your own comments; a post owner can delete all comments on their post, and a commenter can delete replies left under their own comment; jumping in from a notification auto-scrolls and locates the matching floor.

## Apply to Edit

If you're not the author and find issues with the content, you can submit an edit application to the author (see [Notifications · Applications](/en/guide/notify)); once approved, you can help maintain that mod's information.
