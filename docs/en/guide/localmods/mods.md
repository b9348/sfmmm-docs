---
title: Mods
description: "SFMMM Mods: manage BepInEx DLL mods, toggle individually or in batch, Windows-style multi-select, Workshop badges and updates, source-conflict detection, and one-click prerequisite installs."
---

# Mods

**Local Mods** is the first group in the sidebar — the app's local file management hub. Within it, the **Mods** sub-page manages the DLL mods and configuration files under the `BepInEx/plugins` directory. The app hides BepInEx's directory hierarchy and presents the mods list directly.

## Mod List

Entering the page scans your local mods automatically. Each entry shows:

- **Type badge** — distinguishes DLL mods from plain configuration files; folder configurations get their own badge as well;
- **Workshop badge** — if the file belongs to a Workshop subscription, the subscription source, version number, language and cloud rating stars are shown too;
- **Search** — quick keyword filtering;
- **Status stats** — the status bar at the bottom shows the current mod count, and the list header shows the time of the latest scan.

## Enabling / Disabling

You can temporarily disable a mod without uninstalling it:

- **Toggle individually** — switches a file's enabled state by renaming the file (e.g. `.json` → `[ban]json`); the frontend normalizes names so ownership is still recognized, and the list updates in place without a rescan;
- **Disable all / Enable all** — batch-toggles the enabled state of every mod.

::: tip While the game is running
If the game is running, press **ALT + F9** in-game to refresh the mission list after disabling or enabling custom missions.
:::

## File Management

- **Windows-style multi-select** — click to select one, Ctrl to toggle individual items, Shift for a range;
- **Reveal in Explorer** — with multiple items selected, every selected item is highlighted at once in the file explorer; with a single item, the backend decides intelligently based on the real type (a directory opens directly, a regular file opens its parent folder with the file highlighted) — equally reliable for junctions / symbolic links;
- **Refresh** — rescans the mod directory.

## One-Click BepInEx Prerequisites

The Mods page keeps monitoring the install state of the runtime prerequisites. When anything is missing, a warning banner appears at the top of the page — click it to install everything in one go from multiple download points (**Built-in / HuggingFace / Lanzou Cloud**):

| Check | Description |
| --- | --- |
| BepInEx loader | The foundation for running DLL mods |
| v1 mission plugin (SFM_custom_mission.dll) | Required to load v1 custom missions |
| v2 mission plugin | Required to load v2 custom missions (also checks the Chinese font on Chinese interfaces) |
| Mosaic removal patch (rmmosaic) | An optional patch |
| Doorstop version compatibility | If incompatible, switching to the recommended version is suggested |

Download tasks run on the Rust backend — **leaving the page doesn't interrupt them, and progress resumes automatically on return**, with the percentage, downloaded size and download speed shown live.

## Workshop Subscription Integration

Local mods and Workshop data are linked in both directions:

- **"Workshop" badge** — local files are matched against install records and the manifest to be recognized as Workshop subscriptions automatically, showing the version, language and rating directly;
- **Update-available badge** — flags a newly released cloud version with one-click **update to the latest** (fetches the latest files from the cloud and reinstalls them in place);
- **Source-conflict detection** — when a local file's hash doesn't match the cloud's, a red "source conflict" badge appears, identifying files that were manually replaced or tampered with;
- **Group-level operations** — the files of one subscription are grouped into green-outlined group cards automatically; the group header can pause / resume, update, or unsubscribe the whole group in one click;
- **Go to Workshop** — jumps straight from the local list to that mod's cloud details page.

## Game Version Verification

The app ships with a hash baseline of the official latest (v1.1.3) game executable. When a mismatched game version is detected, a warning that the "game version may not be the official latest" appears at the top of the page, helping you rule out mod issues caused by an outdated game version.
