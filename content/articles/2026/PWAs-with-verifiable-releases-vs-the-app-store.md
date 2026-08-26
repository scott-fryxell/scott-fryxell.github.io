---
date: 2026-07-16
draft: true
title: PWAs with Verifiable Releases vs the App Store
description: App stores sell trust as a gate. A PWA can publish checksums on GitHub and let anyone rehash the live site.
img: Scott Fryxell @ Monday afternoon, April 13 - 1776110869716.svg
---

# PWAs with Verifiable Releases vs the App Store

App stores sell you a feeling: someone serious reviewed this, so it must be
safe to install.

What you actually get is a gate. Apple and Google decide who ships, what APIs
you touch, how you take money, and how long a build sits in review while your
users wait. The binary that lands on a phone is opaque. You trusted the store's
process. You did not rehash the bytes yourself.

A PWA is just a website that can install to the home screen, work offline, and
update when you deploy. No store listing. No review queue. That used to sound
like less trust. Lately I think it can mean a different kind.

## What we ship for Realness

Realness is a progressive web app. The cut that matters looks like this:

1. Write the story under `## Unreleased` in the changelog (that file also shows
   on `/docs` once released).
2. `npm version` bumps the package, promotes the changelog, commits, tags
   `vX.Y.Z`.
3. `npm run ship` deploys the build, attaches `build-manifest.json` to a GitHub
   release, then verifies production against that release.

The manifesto is a JSON file listing every deployed path and its SHA-256.
GitHub holds a copy as a release asset. Anyone can run:

```bash
npm run verify
```

That downloads the checksums from **GitHub**, not from the live site, then
rehashes what `realness.online` actually serves. If they match: LEGIT. The site
does not get to grade its own homework.

That is a small claim, said plainly: these static bytes are the build we
published. It does not prove Firebase rules are fair or that a CDN never lied
to one user. It proves something app stores almost never offer you as a ritual
you can run yourself.

## Store trust vs published checksums

| | App store | Verifiable PWA release |
|---|---|---|
| Who attests | Platform (review + signing) | Publisher + public checksums |
| Can you check bytes? | Not really | Yes — rehash the live origin |
| Update path | Their review / staged rollout | Deploy when you are ready |
| Gatekeeping | Account, policy, revenue cut | DNS + hosting you control |
| Failure mode | Opaque reject / silent binary | Verify fails in the open |

Stores are good at "is this malware-shaped" and "does this follow our rules."
They are bad at "prove to a skeptical community that production matches the
source cut we tagged."

Communities that host their own Realness instance care about that second
question. Moderators pointing members at a URL want a command, not a vibe.

## Why a PWA fits this better than a store binary

The web already has a public origin. Same URL for install, update, and verify.
The release artifact and the thing people use are not different channels with
different rules.

You can still do everything wrong. You can skip attaching the manifesto. You
can rebuild between deploy and release. Then `npm run verify` fails, or worse,
never becomes a habit. The point of wiring changelog → version → ship → verify
is to make the honest path the short path.

App stores make the gated path the short path. Everyone else waits.

## What I am not claiming

- PWAs replace native for every product.
- Checksums replace security review.
- GitHub is incorruptible.
- Users will all run `npm run verify`.

I am claiming this: if you are building software for people who already
distrust platforms, a PWA plus a published build manifesto is a coherent story.
Install from the web. Update when we deploy. If you doubt us, here is how to
check the bytes against a release we cannot quietly rewrite without the check
going red.

Trust but verify, with a script.

## Mantra

Write under Unreleased.  
`npm version patch -m "chore(release): v%s"`  
`npm run ship`  
Expect LEGIT from GitHub.

That is the product feature hiding inside the release process.
