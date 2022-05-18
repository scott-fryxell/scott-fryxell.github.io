---
date: 2022-04-10
img: /posters/Scott_Fryxell_posters_Friday, February 11, 8_45 AM.svg
---

I've built out the posters that realness generate. It's what I envisage a poster to look like. It's created from a source image but has characteristics that take advantage of svg,

A poster is 4 layers. There is a background layer, a light layer, a regular layer and a bold layer — similar to how fonts work. Each layer has a gradient and potentially a filter associated with it.

This is the future, but but the future is choking safari. and It's got me thinking about how to degrade the performance of the graphics gracefully. if I could turn on and off features of SVG's based on the render time I should be able to degrade nicely into slow computers. but show the UI off on devices that can handle the cycles or browsers that offload SVG to the GPU.
