---
date: 2026-09-16
draft: true
title: Everyone Gets Their Own Harness
description: A harness for every phone number, and the morals that keep it simple.
img: Scott Fryxell @ Tuesday afternoon, August 11 - 1786489476623.svg
---

<!-- Outline. Prose comes later. Sentences run seven to ten words. -->

## Opening: the plans site

- I wanted my plans readable somewhere besides the terminal.
- The harness should build it and hand over a URL.
- Everything larger in Brayness has this same small shape.
- Complexity keeps arriving; our morals decide what we build.

![The plans folder goes into a session, which builds a site you can open at a URL.](/diagrams/plans-site.svg "A harness builds the plans site")

## Moral one: everyone gets the same thing

- A harness is a folder, and Pi runs inside it.
- My harness came first, and it gets no special treatment.
- I sync as my phone number, a customer like anyone.
- Operator keys never live inside anyone's harness, mine included.
- Start once, freeze it, then hand out copies instantly.

![Three beats left to right: start it once, freeze, then three copies fan out.](/diagrams/boot-freeze-fork.svg "Start once, freeze, hand out copies")

## Moral two: every door asks first

- Your phone number is who you are, proven by Realness.
- A recycled number fails; it stays with its first account.
- Ids are names, never secrets, because every door checks.
- Browser, terminal, and program all ask the same question.
- Every door imports one shared function: `can(who, action, path)`.
- Doors deny by default, and each one has a test.
- Rights are microdata, written in the same HTML as posters.
- Your number owns its folder; sessions get only your grants.
- Granting a folder is one entry; revoking deletes it.
- Open: how does a session prove which one it is?
- Proposed: the storage door gives it a short-lived token.

![Three doors on the left - a browser, a terminal, and a program - lead into a session in the middle. One wire leaves the session to a live URL.](/diagrams/one-session-many-doors.svg "Getting in")

## Moral three: your copy is yours

- Local first: the device holds the copy you work on.
- Storage keeps the durable copy under your phone number.
- In a local folder nothing checks; the files are yours.
- Syncing beyond it passes the same door and check.
- `brayness login` signs in once; your keychain holds the token.
- Apps work offline as progressive web apps, then sync.
- Published apps stay reachable with nothing of yours running.
- Apps get their own keys and never touch your harness.

![An app built in a session, with two wires leaving it - one to the app served from the session, one to the app published to a host.](/diagrams/two-ways-to-be-seen.svg "Two ways an app gets seen")

## Moral four: remember the gist, forget the rest

- The session already logs every write before it happens.
- We back up when a session sleeps or ends.
- What we never logged is a kind of natural privacy.
- Detail lives until the push succeeds, then it fades.
- Across many sessions the pattern shows without every detail.

![Three panels. Memory sleep keeps programs running, files, and identity. Disk sleep lets programs stop but keeps files and identity. Put away sends the files to a bucket and deletes the machine.](/diagrams/three-sleeps.svg "Two kinds of sleep, and one way to be put away")

## Moral five: share as little as possible

- Storage is the only thing every harness shares.
- Less shared means less to attack and less to pay.
- Disk, Google, Amazon, or Cloudflare can hold it.
- Machines are interchangeable; they boot your copy and forget it.

## It still has to make money

- It must earn; morals decide how it earns.
- Hundreds of sessions sleep for every few that run.
- Cost per person is known, capped, and shown plainly.
- Every model call goes through one proxy that counts.
- Open: who pays, how much, and through Realness sponsorship?

![Three states of one machine. Running, about thirty sessions sit on a solid bar. Asleep, the bar is dimmed and a couple hundred are flat marks on disk. Put away, the bar is a dashed outline and the marks are in a bucket.](/diagrams/one-host-many-sessions.svg "One machine, many sessions")

## What it does not do yet

- The rights and sign-in checks exist; nothing calls them yet.
- Login, sync, and the storage door are not built.
- Today a session URL is still a root shell.
- Say plainly what is missing; claims must be checkable.

## Close

- Realness traces your footage; Brayness never makes the art.
- Everyone gets their own harness, and the same morals.

## Additional notes

I suspect for the next 6 months the harness will become the center of every dev teams focus. I’ve changed my thinking and am now exploring how I can bring the harness to members of my team who would not normally need access to the code. Our data scientist. Our project managers. Clients. There are so many ways we can augment other peoples use of this harness.

---

Dyslexia it maybe a superpower here. We now live in an age where no matter how fast you read the AI will still overwhelm you with text. Word bloat is real and we are all suffering through it. I have found that knowing when to read a text is a critical need.

---

The shit is anarchy, you know, these elites off in their own fantasy about AI and are elbowing each other to get to the top of the pyramid. They are so busy focused on each other and planing for a permanent underclass and yet I no longer am constrained by them.

The world is anarchy, The elites in America are ‘winning’ and planning for a permanent underclass. It’s anarchy, we all know it and have felt oppressed by corporate mathematicians. The Chinese came through, and-yet-we-love came through.

---

I don’t see the same excitement for technology that used to predominate, A PC in every home, the internet, the mobile revolution. I can build an incredible developer or artist experience with a harness. I can be myself with a harness.

Centralizing compute is driving inflation, Salaries in San Francisco are bloating and pricing out other wealthy people the expectations of nerds.

---
