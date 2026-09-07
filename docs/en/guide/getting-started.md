---
title: Getting Started
description: "SFMMM quick start: system requirements, downloading the app, the first-run wizard, an interface tour and one-click game launch, plus building from source — for Secret Flasher Manaka players."
---

# Getting Started

SFMMM is a Windows desktop app built on **Tauri 2** for the *Secret Flasher Manaka* series — where *Secret Flasher Manaka 2* is the series' current, fully overhauled experience commonly played today. SFMMM is crafted around it to deliver a one-stop mod management experience: local mod enabling and disabling, Workshop browsing and subscribing, community discussions and a notification center, with full support for both the v1 and v2 custom mission folder ecosystems.

## System Requirements

- Windows 10 / 11
- *Secret Flasher Manaka* installed (the official latest v1.1.3 is recommended; the app automatically verifies the game executable's hash)

## Getting the App

Head to the Releases page of the [GitHub repository](https://github.com/b9348/sfmmm) to download the latest installer.

The app has built-in silent auto-updates: it checks for new versions on startup, downloads them in the background over multiple threads, and applies the update automatically on your next launch — no manual reinstall needed. You can also check for updates manually on the [Settings page](/en/guide/settings), choosing from the default download source, GitHub, or Quark Drive.

## First-Run Wizard

The first time you start SFMMM, a setup screen walks you through it in just two steps:

1. **Choose the game directory** — the app verifies that `SecretFlasherManaka.exe` exists in the selected folder to make sure the path is valid;
2. **Choose the interface language** — Chinese / English / Japanese.

After that, you're taken straight to the main screen. The game directory can be changed anytime on the [Settings page](/en/guide/settings).

## Interface Layout at a Glance

The main interface uses Windows-style sidebar navigation, top to bottom:

| Area | Contents |
| --- | --- |
| Top | The currently logged-in user ("Login / Register" when signed out); click to open your profile, edit it, or log out |
| Sidebar | Three main groups: **Local Mods**, **Workshop** and **Notifications**, each holding its sub-pages below |
| Sidebar bottom | **Launch Game** button, theme switcher (Light / Dark / System), **Settings** entry and the version number |
| Content area | The current page's content; your position is kept even after a refresh |

The sidebar can be collapsed / expanded with the hamburger button at the top left; the collapsed state is remembered and stays the same on your next launch.

## Launching the Game

Click the **Launch Game** button at the bottom of the sidebar to fire up the game in one click. If the game path hasn't been configured yet, the app will first prompt you to complete the setup on the Settings page.

::: tip While the game is running
After you enable or disable custom missions while the game is running, press the **ALT + F9** combo in-game to refresh the game's mission list.
:::

## What's Next

- Explore [Local Mods](/en/guide/localmods/mods) — enabling / disabling mods and one-click prerequisite installs
- Browse the [Workshop](/en/guide/workshop/browse) — browse, subscribe, rate and comment
- Track subscription downloads — [Subscription Records](/en/guide/workshop/records)

## Building from Source

If you'd like to contribute or build it yourself:

```bash
# Requirements: Node.js >= 18, pnpm, Rust >= 1.75

pnpm install      # Install dependencies
pnpm dev          # Run the frontend only
pnpm tauri dev    # Run the desktop app
pnpm tauri build  # Build the installer
```

The project uses a **React 19 + Vite + Fluent UI** frontend with a **Rust** backend, backed by SQLite locally and MySQL remotely.
