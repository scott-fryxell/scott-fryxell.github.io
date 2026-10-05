---
date: 2026-09-24
draft: true
title: History in reverse
description:
  Plans are projects, the vault is what you know, and sessions already hold
  most of your history. Read them backward and you get versioning without git.
---

## Sessions are the log

A pi session is a file of everything the agent did. Every edit is in there
with a diff and a patch. Every read holds a copy of the file at that moment.
Every message I sent is in there too, which is the reason for each change.

Databases have a write-ahead log: record every change first, and you can
replay from a checkpoint to rebuild the state. Sessions are already that log.
They just get read backward.

Keep only the current file. To see an older version, start from now and undo
the session's patches, newest first. Apply them loosely, matching on nearby
text instead of exact lines, so my own hand edits in between don't break the
chain. Where a patch won't land, the nearest read fills the gap.

Only save a snapshot when the chain breaks: a shell command rewrote the file,
something got deleted, I changed too much by hand. Store snapshots by content
hash so the same text is never stored twice.

What comes back isn't exact. Each version is marked as exact or reconstructed
across a gap. It's probably fine, and that's the point. I don't need every
keystroke. I need to see what a plan used to say and why it changed.

## Forgetting on purpose

History that only grows gets expensive, and that stops being fair to people
on small budgets.

This design forgets on its own. Recent history is dense with patches. Older
history has more gaps. Past a point, only snapshots are left. Thin those the
way Time Machine does: all of them for a day, then one a day, one a week, one a
month. Old sessions shrink to their patches and my messages. When a snapshot
covers a session's span, the session can go.

Keep the messages longest. They're tiny, and the reason outlives the text.

Recent things in detail, old things in outline. Storage stays about flat while
history keeps growing.

## How I got here

It started with a job application living in two places. A plan in the harness
and a note in my vault, both describing the same thing. Two places blows up a
process, so I picked one. Then I wondered whether the plans folder was in the
wrong place entirely.

## Plans are projects

My vault uses PARA: Projects, Areas, Resources, Archive. Projects have a goal
and an end. Areas are ongoing. Resources are things you collect. Archive is
what's finished.

A plan has a goal, gates, and a done-when. A plan is a project. So the harness
already holds the P, and my vault's Projects folder was mostly TODOs that
duplicated plans, drafts that belong in their repos, and clippings filed by
the work they feed.

Lay the harness over PARA and it fits:

| PARA      | Harness                                      |
| --------- | -------------------------------------------- |
| Projects  | `plans/`                                     |
| Areas     | the vault                                    |
| Resources | `work/`, `artifacts/`, the vault's clippings |
| Archive   | history                                      |

That explains something I already knew. The harness works for people who never
plan, and for people who never import their history. Nobody needs a vault to
start. A plan and a folder of work are already a system. The vault adds what
you know.

## Don't tell people how to file

Once a vault is a first-class part of the harness, the temptation is to
prescribe it. Make everyone use PARA, make every skill write to the same
folders.

Computers are flexible now. A model can read any layout and figure out
someone's system. So the harness shouldn't care where a note lives. It should
care what a note is. An imported Instagram post always carries a date, a
source, an id, a place, and a link to the photo. Where it lands is up to the
person. Strict about the record, loose about the filing. It's the same idea as
microdata in realness: the item carries its own meaning, whatever page it's on.

## Archive is history

Archive isn't a folder. It's versioning, change over time. It's what a
microVM pulls in when a session wakes up.

Some of the harness is already versioned. Every project in `work/` has git.
The vault has git. But plans, artifacts, and `AGENTS.local.md` have nothing.
The job application plan went through a dozen rewrites and a delete, and the
only record is a chat.

Bucket storage, like Dropbox or Firebase Storage, versions loose files well
enough. It keeps old copies and overwrites the current one. It can't diff, and
by default the last writer wins. It's also bad at two things the harness is
full of:

- **Git repos.** A `.git` folder is thousands of small files that must change
  together. Sync them one at a time and you get a half-written repo.
- **Symlinks.** Object stores don't have them. A link becomes a copy.

So the rule splits by what's already versioned. Anything with `.git` syncs
through git. Loose files sync through the bucket. Links get written down as a
list and recreated on the other side.

A plan can also say what it needs. Each plan keeps a short list of the
repos, vault folders, and artifacts it touches. A VM agent working that plan
pulls only the list. Waking is faster, there's less to sync back, and the list
doubles as a fence: the agent can't wander into work the plan never named.

Conflicts use a version check. Every write says which version it started from.
If someone else wrote since, the bucket refuses. Now you hold three copies:
the base, theirs, and yours. That's a three-way merge, the same thing git
does. Text merges on its own unless both sides changed the same lines. Images
keep both.

That's the whole idea. Plans are the projects. The vault is what you know.
Sessions are the log, and history is that log read in reverse.
