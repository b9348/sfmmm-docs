---
title: My · Creator Workspace
description: "SFMMM My page: publish and edit mods with multilingual content and changelogs, category-aware file selection, edit-permission modes, deletion with image-host cleanup, and My Discussions."
---

# My · Creator Workspace

**Mine**, the third sub-page under the **Workshop** group, is the content-management backend for mod authors and discussion users, holding two tabs: "My Mods" and "My Discussions".

## Publishing a Mod

The publishing flow is thoughtfully adapted for creators:

### Basic Info

- **mod_key** — the mod's unique identifier, checked for duplicates automatically as you type;
- **Category** — v1 mission / v2 mission / DLL mod / Composite.

### Multilingual Content Blocks

Each language gets a full set of content filled in independently:

- Name, summary and detailed description;
- The detailed description supports both **Markdown** and a **rich-text editor** (bold / italic / headings / lists / quotes / images, and more) as two modes;
- A changelog and a version number;
- Images inserted into the description follow a "placeholder first, upload to the image host, then swap in the URL" flow, so writing is never interrupted waiting on an upload.

### File Selection (Smartly Adapted by Category)

| Category | How to select |
| --- | --- |
| v1 mission | Multi-select json / code / txt / zip files; paths are kept relative to `CustomMissions` |
| v2 mission | Select a folder; every file inside is collected recursively |
| DLL mod | Select a DLL file |
| Composite | Folders and files can be mixed; paths are kept relative to the game root |

Appending merges entries with deduplication, so repeated tweaks never force you to start over.

### Publishing Flow

Check mod_key → create the record → compress and package on the frontend → upload (single files capped at 20MB, or 100MB for R2-enabled users) → clean up old files, with the whole process visualized in a progress dialog.

## Editing a Mod

- The editable scope is **trimmed by permissions** (basic info / all languages / specific languages);
- Bumping the version without re-selecting files is blocked with a prompt, preventing the "version changed but nothing uploaded" mistake;
- Saving replaces directly, through one unified flow;
- Description images that get removed are cleaned up from the image host automatically, leaving no orphan files;
- Deleting a mod shows a confirmation dialog and reports per-file deletion progress.

## Edit Permission System

The author can set one of four collaboration modes for each mod:

| Mode | Description |
| --- | --- |
| Only I can edit | Default; completely private |
| Open | Anyone can edit |
| Open language editing | Specify which languages are open to community maintenance |
| Application required | Specify which languages can be applied for with edit rights |

Community applications land in the [Notifications · Applications](/en/guide/notify) pending queue, where the author can approve or reject them; once approved, the applicant can maintain content within the applied scope — this is how a mod's **multilingual translations can be handled collaboratively by the community**.

## My Discussions

Posts and replies (including threaded replies) are merged into a single list in reverse chronological order, tagged "post / reply"; clicking jumps to the discussion details, and a reply entry automatically locates the matching floor.
