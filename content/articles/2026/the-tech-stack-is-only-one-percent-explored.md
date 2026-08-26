---
date: 2026-07-16
draft: true
title: The Tech Stack Is Only One Percent Explored
description: Nielsen's wide tech tree; venture's thin sliver; Realness as a device-first medium — limited stack, explored hard, like the inert-HTML lore of 2457.
img: new-posters/Sunday evening, April 12 - 1776042845045.svg
---

# The Tech Stack Is Only One Percent Explored

Michael Nielsen, talking with [Dwarkesh](https://www.youtube.com/watch?v=myP8UjAM1pk)
([around 51:00](https://www.youtube.com/watch?v=myP8UjAM1pk&t=3060s)):

> The idea there that I'm at least somewhat attached to is that the tech tree
> or the science and tech tree is probably much larger than we realize. We're
> in this funny situation. People will sometimes talk about a theory of
> everything as a potential goal for physics, and then there's this presumption
> that physics is done once you get there. Of course, this is not true at all.
> If you think about computer science, computer science started in the 1930s
> when Turing and Church and so on laid down what the theory of everything was.
> They just said, "Here's how computation works." We've spent ninety-odd years
> since then exploring the consequences of that…
>
> My expectation is that there will be different ways of exploring this tech
> tree, and we're still relatively low down. We're still at the point where
> we're just understanding these basic fundamental theories, and we haven't yet
> explored them.
>
> This looks to me like we're down at the bottom of the tech tree. We've barely
> gotten started there, and I expect that to be the case broadly. Certainly,
> programming is a very natural place to look. The idea that we've discovered
> all the deep ideas in programming just seems obviously ludicrous. We keep
> discovering what seem like deep, new, fundamental ideas.

Public-key cryptography was already hiding in that theory. Phases of matter
keep multiplying — the schoolbook list of three or four grows into
superconductors, superfluids, condensates, quantum Hall systems, and more
still coming. Knuth's mathematician wanted a thousand deep theorems before
calling computer science a field. Those theorems showed up.

Different civilizations might explore different branches entirely — which is
why aliens might show up with a tech stack that does not look like ours.

Around the fifty-one minute mark that lands differently for me as a builder.
If the tree is that wide, then venture capital is not funding "tech." It is
funding the smallest sliver of the tree that fits a particular shape: fast
growth, server-side leverage, a story that scales with headcount and cloud
spend. The rest of the tree does not disappear. It just stops getting term
sheets.

That is not a moral complaint about VCs. It is a map. Capital herds exploration
into one corridor. Outside that corridor, the ground is quieter — and full of
value that never had to clear a partner meeting.

I have been applying that to something smaller and closer: the stack already
running on every phone and laptop that can open a browser.

## The path we walked

Most product teams treat the web as a thin client over someone else's computer.
You ship HTML and JavaScript. The interesting work happens in a data center.
Photos go up. Vectors come down. Identity lives on a server. The device is a
viewport.

That path is real. It paid for the last two decades of software. It is also
only one corridor through a much wider tree.

The same device can:

- run Wasm at near-native speed
- keep structured data in IndexedDB and the Origin Private File System
- spin workers so a heavy job does not freeze the UI
- install as a PWA, work offline, update when you deploy
- hash its own static assets against a public release manifesto

None of that requires inventing a new physics. It requires choosing a different
branch of the tree we already have.

## What Realness is doing on that branch

The relevant part for Realness is not the checklist of APIs. It is the
**medium** that opens when you commit to one sliver of a device-first world
view and explore it deeply.

I keep a scrap of lore for that world — year 2457, after the angels of death
broke Earth's orbit with brilliance and fumbling. In that universe only inert
HTML is legal. No JavaScript parsing atoms. Semantic markup as gospel. Stone
that does not pretend to be smart. Victorians photographed and launched as
ships along gravity-bent arcs, ore returning to a geofenced Lower Haight drawn
on celestial charts. The tech stack is deliberately narrow. The culture grows
*from* that limit.

That is the same shape as Nielsen's aliens with a different tree — and the
same shape as Realness now. Pick a corridor. Stay in it. Let the medium
emerge.

Realness's corridor is on-device: the phone as a computer, not a viewport.
Funded industry standardized on the server corridor and stopped looking. If
you are not raising a round, you do not need the round's preferred
architecture. You can spend years on a branch that never looks like a Series
A slide.

Inside that sliver the medium shows up:

- A photo becomes a layered SVG poster in the browser (tracing, workers,
  Wasm). The original pixels do not need to leave the machine for the art to
  exist — Victorians leaving the ground to save the ground, in miniature.
- Persistence is edge-first. What you make lives locally; sync is optional and
  deliberate. Seekable. Deterministic enough to trust without a thinking
  server in the middle of every gesture.
- The app is a PWA. Install it. Use it offline. When we ship, we publish
  checksums to GitHub so anyone can `npm run verify` that production matches
  the tagged build — silence that can be checked, not faith in a store.

That is not "the full remaining ninety-nine percent." It is what happens when
you treat one under-explored branch as a complete universe: limited tech,
focused tree, medium that could not have grown on the venture corridor.

## Why the one-percent framing

One percent is not a measurement. It is a posture — and a description of where
attention and money concentrate.

If you believe the browser stack is basically done — React, fetch, a backend —
you optimize inside that corridor. Venture will meet you there. If you believe
we are still low on the tree, you look for deep ideas that were already
available and ignored: local-first data, verifiable static deploys, serious
compute in workers, graphics pipelines that do not round-trip a photo to a
cloud GPU just to get a vector.

Working outside venture is not exile from the tech tree. It is permission to
walk the parts of the tree capital is not pricing yet.

Nielsen's alien thought experiment is about path dependence at civilizational
scale. The same shape shows up at product scale. Two teams with the same APIs
can end up in different parts of the tree because they keep choosing the
familiar branch — or the fundable one.

I want Realness on the branch where the device does the work and the network
is a sync channel, not the factory floor — a limited tech tree, explored hard
enough that a medium (and a lore) can grow out of it.

## What I am not claiming

- That servers are obsolete.
- That every app should ship a Wasm tracer.
- That we have mapped the remaining ninety-nine percent.

I am claiming this: the stack in your pocket is not a finished instrument with
a thin API surface left to polish. It is closer to Nielsen's picture of
computation after Turing — a theory of everything with decades of deep
consequences still underexplored.

We keep discovering what was already possible. Realness is my lab for that on
the device.

Watch the conversation:
[Michael Nielsen – Why aliens will have a different tech stack than us](https://www.youtube.com/watch?v=myP8UjAM1pk).
