---
date: 2026-08-25
draft: false
title: The Harness Is the Thing
description:
  Models are commodifying. The harness - skills, extensions, a scriptable
  app - is where the work and the leverage now live.
img: Scott Fryxell @ Sunday evening, April 12 - 1776042845045.svg
---

When I started out as a developer, I had a graybeard observe to me that
Moore's law also applies to software. I didn't understand that this constant conversation about how we were solving problems was the arc of progress; that complaining about J2EE and how slow Netbeans was, and wheezing about table-based layouts and constant full-page reloads, was the day-to-day optimizing that is also an engine of progress.

The last eighteen months have been a particular window of relentless
improvement. Tab completions have given way to agentic coding which has given
way to managing your agents with a harness. I've gone from being awed at the
productivity gains to settling into the game and squeezing the lemon to see what
I can get.

## There are new truths

Single developer projects can build to the caliber and consistency of large
development teams. You can and should build bespoke applications and you don't
have to sweat onboarding experienced engineers; if they know their stack
backwards and forwards they'll quickly know how to contribute to yours. But most of all, I have learned that the harness is the thing; the center from which my expectations meet the LLM's capabilities.

At the moment my rig is supported by two subscriptions (Cursor, Claude) that I can augment with Pi as needed. All three share my skills and `AGENTS.md`. Though I am using three TUIs, I have a unified experience. This has commodified the models for me; there is no magic sauce or special experience in Claude or Cursor that I need in order to be productive. I have zero anxiety about the transition from Cursor to Codex at the end of this month.

## The cost advantage

In the
[commodity](https://www.emergingtrajectories.com/lh/commodification-and-circularity/) era I can get great results from a host of available models, but I've been leaning on `deepseek-v4-flash-0731` since it came out. It's a rare case that I dip into my Anthropic budget to utilize Fable.

I can run Deepseek on most maintenance and simple tasks. It's when I am exploring a serious feature or large refactor with lots of moving parts that I reach for the frontier. Recently I learned about [prewalk](https://stencil.so/blog/prewalk), Can Bölük's technique that uses frontier for the planning phase and first task, then hands off once the pattern is set. I paired it with the planner/worker/critic split from [Building an Advanced Agentic Harness](https://data4sci.com/blog/building-an-advanced-agentic-harness) - a single prompt that plans, executes, and critiques itself confuses its own objectives, so each role gets isolated instead. I built both into a skill, with a supporting Pi extension that can take over at any stage of work.

**Exploration** leads to a **plan** formalized into an explicit DAG task list. Then a **worker** takes over, focusing on implementing the DAG one node at a time. Once complete, I bring in the **critic** to simplify and question what was implemented. Often this phase will push back enough that the worker phase is revisited. But once satisfied, the critic gives way to a **promoter**, which is my reminder that a job is not complete until you've properly communicated it to others.

I added the promoter step to shore up a weak spot I have for wanting to ship and move on. It's my reminder to let people know about work I'm completing. I need a little help from Fable in this phase, as promotion is subtle and easily borked, and nobody likes a critic so running it through the frontier gives it more weight.

![A shallow arc of five stops - explore, planner, worker, critic, promoter. A pale band runs along the inside of the whole arc, as deep as the tallest peak: that is the commodity model, and it carries most of the work. Two red peaks rise into the head of worker, and a much shallower one straddles the seam between critic and promoter.](/diagrams/frontier-zone.svg)

This has dropped my usage of Fable in even my most intense contexts by 75%. This feels sane, something akin to AI soak. I can take care of my clients and make real progress on my own projects on my two twenty-dollar plans, as I juggle in and out of Pi for Deepseek or the Fable infusion.

## A product harness connection

[My product](https://realness.online/about) is a camera app designed to make it easy to take a picture and see it converted into a vector graphic, one at a time. It's fun because it's simple. The resolution drops, simplification into value layers, and shapes. It keeps the context and removes the detail so you can draw it back in. That's all it's designed to do. You print it out and you draw on top of it. Or import it into Procreate and draw on top of it.

I open this functionality up to the harness via [poster-driver](https://realness.online/poster-driver). I open it in headless Chrome and drive the live site. This makes scripting the app as easy as loading a web page.

This has turned an advanced use case into a fun feature with plenty of runway to explore

```sh
# run from harness root
npm run make:animation artifacts/my-movie.mp4
```

The LLM helped me figure this out and wrote a script that I keep in my harness; so it can run a billion times without burning a token. The product got more powerful because the harness can reach it. There is support for the filesystem API. After enabling it on Brave, I am syncing my thoughts to the work directory. Harvesting my own sad boy lyrics to sing in my room by myself. It hurts so good. I am working on a blender file that is my neighborhood in 3d with posters overlaid on top. A scene, a storyboard a hell of a lot more than I can offer from the web. 

The app feels fully available now in a way that was impossible a year ago. Creative people can still use a non-AI tool in an AI way. We can keep for ourselves the funnest parts about being creative.

## Breaking down the harness

I live my workday out of [this harness](https://github.com/scott-fryxell/brayness). I have my nvim config mapped into the work directory, and now the LLM knows what file I have open and can edit it and, since I'm still a slow swimmer, help me use the right key commands. That's the way I'm trying to think of it: the LLM is there editing my config with me so I can stay focused on working while also staying disciplined about using vim commands.

The harness is self-contained to support more than a home directory (sandboxing, a web interface, File System Access API, Docker, Deno executable, etc).

The shit's so new it's still forming in my mind so I've been referencing `npm start`, `cursor-agent`, `claude` as TUIs to keep the concept of a harness clear. All TUIs share the harness.

Remaining auditable is important enough that the TUIs are instructed to keep things inside the artifacts/ directory. Cursor uses .gitignore to ignore files, which I think is smart, so a git-less root is required. I have a skill that syncs the harness with the repo in the work directory. Skills, extensions, and AGENTS.md are first-class citizens at the root, waiting to be modified and built upon. <a href="#claude-agents-wrapper" data-reveal-target="claude-agents-wrapper">TUIs have to toe the line.</a>

<section id="claude-agents-wrapper" class="inline-reveal-panel" hidden><pre language="zsh"><code># auto-load the nearest AGENTS.md into claude code
claude() {
  local dir="$PWD"
  while [[ "$dir" != "/" ]]; do
    if [[ -f "$dir/AGENTS.md" ]]; then
      command claude --append-system-prompt-file "$dir/AGENTS.md" "$@"
      return
    fi
    dir="${dir:h}"
  done
  command claude "$@"
}
</code></pre></section>

```
brayness/
├── AGENTS.md
├── AGENTS.local.md
├── bin/
├── prompts/
├── plans/
├── skills/
├── extensions/
├── artifacts/
└── work/
    ├── realness/
    ├── blog/
    ├── brayness/
    ├── nvim/
    └── ...
```


Initially I was too prescriptive with my skills; I am learning to lighten the
specificity, and that there is a line past which you are burning tokens mansplaining to clankers. If I'm serious about keeping my harness sharp, I'll need to adopt a more empirical approach to confirming the impact of changes.

Here are some mapped to my planning arc. 


<div class="plate skill-map">
  <section>
    <h3>explore</h3>
    <ul>
      <li>nvim-buffers</li>
      <li>flexible-visual-system</li>
      <li>vault</li>
      <li>interview-prep</li>
 			<li>vuetify-to-semantic</li>
    </ul>
  </section>
  <section class="lead">
    <h3>planner</h3>
    <ul>
      <li>planning</li>
      <li>memory</li>
      <li>previous-work</li>
      <li>project-tooling</li>
      <li>brayness-sync</li>
    </ul>
  </section>
  <section>
    <h3>worker</h3>
    <ul>
      <li>realness-design</li>
      <li>typography</li>
      <li>user-interface</li>
      <li>rust-best-practices</li>
      <li>agent-browser</li>
      <li>logo-finder</li>
    </ul>
  </section>
  <section>
    <h3>critic</h3>
    <ul>
      <li>critic</li>
      <li>test-coverage</li>
      <li>simplify</li>
      <li>vue-inspect</li>
    </ul>
  </section>
  <section>
    <h3>promoter</h3>
    <ul>
      <li>hyperframes</li>
      <li>readable</li>
      <li>zoom-to-ableton</li>
      <li>motion-systems</li>
    </ul>
  </section>
</div>


With my feet back on the ground I no longer feel lost in cursor-agent or Claude.
I have agency over workflow and can craft how I engineer solutions. What I learn
using Pi often rolls back into my Claude and Cursor experience. With Pi I trust I
can `bash` my way through any problem. Let the harness run the scripts.
Coordinate the scripts with the LLMs.

In the last three months I find myself leaving the editor for a terminal more and more. It feels like a harmony of reasons why. Trusting the code to the agents, switching to Ghostty, and fighting skill rot via nvim have happened, normally reshuffling the deck like this would cripple my output yet my personal projects and client work are at the highest level and tempo. Little things like building context around long-running agentic tasks with splits have helped settle me into the AI experience.

--- 

This was all made urgent when the government banned Fable and started signaling
daddy privilege over the industry. I, and I assume about a hundred thousand
other software developers, suddenly felt the need to diversify our model access.
So, for freedom, we collectively decided to give these Chinese models a try. Pi
went from a tool I had gotten working and was just playing around with to the
most important piece of my rig.
