---
date: 2022-04-10
---

I've built out the posters that realness generate. It's what I envisage a poster to look like. It's created from a source image but has characteristics that take advantage of svg,

A poster is 4 layers. There is a background layer, a light layer, a regular layer and a bold layer — similar to how fonts work. Each layer has a gradient and potentially a filter associated with it.

This is the future, but the future is choking safari. SVG's are rendered by the CPU rather than the GPU. The code for SVG in webkit (what safari is built on) is 20 years old. There are fixes for moving svg to render on the GPU from the people at igalia. But when their code will be accepted by webkit and released is unkown.

It's got me thinking about how to degrade the performance of the graphics gracefully. if I could turn on and off features of SVG's based on the render time I should be able to degrade nicely into slow computers. but show the UI off on devices that can handle the cycles or browsers that offload SVG to the GPU.

This is the front row seat to Apple's monopoly — They control all rendering of web content on their phone,. and let safari die on the vine. Numb at the fingertips unable to feel the priority of fixing twenty year old performance bottlenecks. This low key drives developers into their ecosystem. Monopoly all the way.
