---
title: Saves
description: "SFMMM Saves: table-based management of game saves — one-click .bak backups, fingerprint-verified overwrite restore, inline rename, type badges, and Toast feedback for every action."
---

# Saves

**Saves**, the fourth sub-page under the **Local Mods** group, provides table-based management of the game's save files. The `.sd` files in the save directory are listed in a clear table with file name, type, size, modified time and an actions column.

## Type Badges

Every file carries a colored type badge, so you can tell at a glance:

| Badge | Type | Description |
| --- | --- | --- |
| 🔵 Blue | Save | Game progress file (`.sd`) |
| 🟡 Yellow | Settings | Game configuration file |
| 🟢 Green | Backup | A backup created on this page (`.sd.bak`) |

## Backup & Restore

- **Backup** — one click copies `{name}.sd` to `{name}.sd.bak`; the original file is left untouched;
- **Restore** — restores from a backup after a fingerprint check first; if a save with the same name already exists, a confirmation dialog clearly states that "restoring will overwrite it", and the overwrite only happens after you confirm — preventing accidental overwrites;
- **Inline rename** — edit the file name right inside the table row; Enter to confirm, Escape to cancel;
- **Open save folder** — opens the saves directory in the file explorer;
- **Refresh** — reloads the list.

The result of every action is reported through a Toast notification — a success message or a clear failure reason at a glance, so you never worry about accidentally deleting a good save.
