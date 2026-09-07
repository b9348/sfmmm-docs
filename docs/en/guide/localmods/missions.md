---
title: Custom Missions v1 / v2
description: "SFMMM Custom Missions v1/v2: manage CustomMissions / CustomMissions2 as a file browser — toggle missions, one-click plugin and Chinese-font installs, Workshop recognition, cross-page locating."
---

# Custom Missions v1 / v2

The **v1** and **v2** sub-pages under the **Local Mods** group manage the game's custom mission directories, `CustomMissions` (v1) and `CustomMissions2` (v2), presented as a card-based file browser.

## Page Structure

Both pages share the same set of file-browser capabilities:

- **Breadcrumb navigation** — shows the current level; click any level to jump straight to it;
- **Double-click to enter** — double-click a folder card to open its subdirectory;
- **Card layout** — folder cards show an "N folders, M files" count; file cards show an extension badge and, when applicable, a disabled-state badge;
- **Grid density** — "X per row" (1–10), with your preference remembered;
- **Noise filtering** — noise files such as `readme.txt` are ignored automatically to keep the list clean;
- **Refresh button** — rescan the directory at any time.

## Managing Mission Files

- **Enable / disable** — the same rename mechanism as in mod management, toggling missions individually or in batch;
- **Multi-select and locate** — Windows-style multi-select (Ctrl / Shift) and one-click highlighting of the selected items in the file explorer;
- **Disable all / Enable all** — very handy when you need to return to the original missions.

## Prerequisite Detection & Installation

The v1 / v2 pages each check the runtime prerequisites they need and show a warning banner when they're missing:

- **v1** — checks the BepInEx loader and the v1 mission plugin (SFM_custom_mission.dll);
- **v2** — checks the BepInEx loader and the v2 mission plugin; users on Chinese interfaces also get an extra check for the **Chinese font**, so mission text never renders incorrectly.

All prerequisites support one-click installation from multiple download points (**Built-in / HuggingFace / Lanzou Cloud**), with background downloads whose progress survives interruptions.

## Workshop Mission Recognition

Custom missions installed from Workshop subscriptions are recognized and displayed automatically:

- Cards show the "Workshop" badge, version number, language and rating stars;
- Three quick actions are offered: **view details on the Workshop**, **update to the latest version**, and **unsubscribe**;
- Mission files from the same subscription are grouped automatically, supporting group-level pause / resume, update and unsubscribe in one click;
- A "has update" badge appears when a new version is live on the cloud; a manually modified local file shows "source conflict" instead.

## Cross-Page Locating

Clicking "View in Local Mods" on the [Subscription Records](/en/guide/workshop/records) page jumps to the corresponding sub-page automatically, matches the mod_key, then scrolls to the target card, centers it and highlights it for 2 seconds — so even among hundreds of missions, the one you want is found in an instant.
