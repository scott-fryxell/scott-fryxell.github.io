---
date: 2026-06-30
draft: true
title: Qualified Developers Only
description: Firebase is built on the premise that only a credentialed engineer should access the code — and that premise is breaking.
img: Scott Fryxell @ Tuesday morning, June 9 - 1781023369520.svg
---

# Qualified Developers Only

I've been fighting Firebase again. Not the product — the premise.

Google does not design Firebase for a team. They design it for a professionally
trained, highly educated developer who is the *only* person with both access
and a good reason to touch the code. Everyone else is supposed to stay out.
Sales stays out. Design stays out. Marketing stays out. The agent harness stays
out. If you are not credentialed to hold the stack in your head, you are not
the user.

That is more radical than "clumsy developer experience." It is gatekeeping baked
into the platform. The complexity is not an accident waiting for a better README.
It is compatible with a world where only engineers belong in the repo.

## Five knobs, zero shared state

There is no single "current project" in a typical Firebase app. To switch
environments I touch at least five things that do not talk to each other:

1. `.env.local` — `VITE_PROJECT_ID` and the rest of the client config
2. `firebase use` — which project the CLI and emulators register under
3. `service-account.json` — which GCP identity admin scripts use
4. `gcloud config set project` — exports, logs, storage sync
5. Which dev script I run — functions-only vs the full emulator stack

Each knob can be "correct" on its own and wrong together. My browser can point
at production while the functions emulator serves staging on port 5001. Everything
starts. Nothing aligns. The failure shows up as CORS or `functions/internal` —
symptoms that require a qualified developer to interpret.

Service accounts do not democratize access. They are another credential layer
for the same priesthood. Run `--only functions` and Firebase warns that Auth,
Firestore, and the rest will hit production. The warning assumes you are the
kind of person who reads warnings. It assumes you are allowed to be here.

## The priesthood is the feature

The checklist is not in the repo because it does not need to be — not for the
audience Google imagines. A new developer follows the README, hits a wall, and
Slacks me. I know which five settings last worked. That makes me the only
person in our company who can work with this code safely.

Google would call that a skill problem. I call it the intended shape. Tribal
knowledge selects for credentialed engineers. Opaque failures select for
credentialed engineers. Misaligned env layers select for credentialed engineers.
You do not fix this with documentation alone. Documentation for five unrelated
knobs still assumes the reader is a developer who *should* be configuring GCP.

Bus factor of one is not a bug in their model. It is proof the gate held.

## Cross-domain code is the future they did not plan for

The future is not more engineers. The future is codebases that sales, design,
marketing, and an agent harness can read and run — because those people have
*good reasons* to touch the product, not because they smuggled themselves past
the gate.

We run Pi for that. It reads the code, runs commands, proposes diffs. Firebase
fights it the same way it fights a designer asking to spin up staging. Five
knobs with zero shared state is five places Pi drifts from reality. It will
confidently run `pnpm dev`, hit the same CORS wall, and burn context debugging
a misconfiguration that lives in my head, not in any file. The agent has no
credential that Google recognizes. Neither does design. Neither does sales.

Google still sells infrastructure as if code is a professional enclosure —
a space where only qualified developers belong, and everyone else consumes
what engineers ship. That enclosure is breaking. Not because people got dumber.
Because the work changed. Because Pi exists. Because a copy edit, a demo, a
repro, and a staging walkthrough are legitimate reasons to be in the tree.

Making a repo legible across domains — one honest entry point, environment in
the tree, failures that name themselves — is our terrifying future. Terrifying
for us. We lose the enclosure. We lose being the only ones who can run the thing.
We lose the five-knob checklist as a moat. Potentially magical for everyone else.
Design ships copy without a ticket. Sales demos staging without Slacking Scott.
Pi fixes a repro without ordination. The harness works because the repo admits
other people belong in it.

That is a direct challenge to who Google thinks code is *for* — and to who we
have been.

## What we need instead

One declared target: `local`, `staging`, or `production`. One command. Fail
loudly if layers disagree. Onboarding that does not require ordination into the
priesthood.

Firebase will not give you that. Flexibility is the product, and flexibility
for credentialed engineers reads as footguns for everyone else.

I'm not saying don't use Firebase. I'm saying Google built it on the premise
that only qualified developers should access the code — and that premise is
incompatible with how software gets made now.

Fixing it on our side is mostly tooling: a single `use-project` script, a one-page
map of what connects to what, errors that name the mismatch. That won't fix
Google. It might declare, in the repo itself, that other people belong here too —
and that we are willing to be terrified so they can have something magical.
