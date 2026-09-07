---
title: Subscription Records
description: "SFMMM Subscription Records: task hub for Workshop subscriptions — state badges, live progress and speed, cancel anytime, Rust downloads surviving page changes, and links to mod details or Local Mods."
---

# Subscription Records

**Subscriptions**, the fourth sub-page under the **Workshop** group, is the **background task hub** for every subscribe (download-and-install) task. The top shows live stats: "Running N · Done N · Failed N".

## Task States

Every subscription task has a status badge covering its complete lifecycle:

`Pending` → `Downloading` → `Extracting` → `Recording` → `Done`

plus three terminal states: `Uninstalled` / `Failed` / `Cancelled`.

## Live Progress

- **Progress bar + download speed** update in real time, sharing the same event source as the mod details page — the two views don't interfere with each other;
- Downloading, extraction, hash verification and database writes **all run on the Rust backend**, fully decoupled from the frontend page lifecycle — close the page and the tasks still finish;
- Running tasks can be **cancelled at any time**, and half-finished installers are deleted along with them;
- Failed tasks show localized error messages for easier troubleshooting.

## Task Details

Each task shows: the language file name (the translated name is preferred), version, language, category, mod_key, and a two-line-truncated summary.

## Cross-Page Navigation

Done (or already installed) tasks offer two quick entries:

- **View on the Workshop** — jumps to the cloud mod details page;
- **View in Local Mods** — maps by category to the matching sub-page under [Local Mods](/en/guide/localmods/mods), carrying the mod_key to locate and highlight the target card.

## Smart Deduplication & Status Correction

- **Install dedupe** — subscribing again to an already-installed mod skips the download, avoiding duplicate tasks;
- **"Uninstalled" virtual state** — completed tasks re-check the local install records; when the record no longer exists, they show as "Uninstalled" (without writing back to the database), mirroring the resubscribe dedupe logic;
- **Display-level dedupe** — among historical duplicates of the same mod + version + language, only the newest entry is kept, so the list always stays clean.
