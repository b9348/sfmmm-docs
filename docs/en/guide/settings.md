---
title: Settings
description: "SFMMM Settings: switch the interface language, configure the game path, update via default source, GitHub or Quark Drive with silent background downloads, choose light/dark/system themes, plus About."
---

# Settings

Click the **Settings** entry at the bottom of the sidebar (or click the version number at the lower left) to open the settings page. It's made up of four cards, with an additional theme-switcher shortcut at the bottom of the sidebar.

## Interface Language

Switch among Chinese / English / Japanese; the change takes effect after you restart the app. The language chosen in the first-run wizard is recorded here as well.

## Game Path

- **Browse to select** the game's directory; the app validates that the directory is usable;
- Supports **one-click open** of the game directory;
- After a path change, both local mod scanning and "Launch Game" automatically use the new path.

## Check for Updates

The app has a complete built-in auto-update system:

- The **"Check update" button** has three states: checking (spinner) / downloading (turns into "Cancel download") / idle;
- When a new version is found, it shows `vcurrent → vlatest` and offers **three download channels**:

| Channel | Description |
| --- | --- |
| Default source | The app's built-in source, downloaded as a background task |
| GitHub source | Auto-resolves the Releases direct link and verifies the version matches |
| Open Quark Drive | Opens the share link in your browser to download it yourself |

- Downloads run as background tasks with a progress bar, downloaded / total size and live speed, and can be cancelled at any time;
- Once downloaded, choose "**Restart & Update**" now or "**Later**" — the update applies automatically at next launch, with no manual reinstall needed;
- Stale installers are cleaned up automatically and failures back off, so the whole upgrade experience is worry-free.

> By default, the app also **silently checks** for new versions on every launch and downloads them in the background over multiple threads; once a new version is ready, a red **NEW** badge appears next to the version number at the bottom of the sidebar.

## About

- Opens the GitHub repository ([b9348/sfmmm](https://github.com/b9348/sfmmm));
- Issues and suggestions are welcome as feedback;
- An **acknowledgements** card sits at the bottom.

## Theme Switcher

At the bottom of the sidebar (above the Launch Game button) you can switch the interface theme quickly:

- ☀️ **Light**
- 🌙 **Dark**
- 💻 **Follow system**

The theme choice is persisted in the local database; the app follows the Fluent Design style, with both light and dark themes fully adapted visually.
