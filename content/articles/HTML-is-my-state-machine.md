---
date: 2022-05-18
img: Scott_Fryxell_Wednesday, June 1, 9_48 AM.svg
---

Edge poses weird quandries when you start taking advantage of how close your code and data are.

I have used HTML for some Pinia duties for years. the current state of any object is the html that is being rendered. If I need new state I load the object from the local database and render it. It's instant.

I use The DOM to manage mutations. What the person is viewing is what the components are sharing. The data is right there. Nothing is out of sync from the user.

The state can be shared accross components via `load` and `list` methods I have keyed to microdata's `itemid`x attribute `itemid=/${userid}/posters/${crated_at}`. Most of the time this works great. But ocassionally I need changes I'm making to spread out accross each component instantly rather than waiting for `load` and `list` to be called. This is where Vue 3's composables have come in handy.

In Realness, Relations are who you are following. They are referenced in like 15 modules. Each instance of relations only knows about itself and isn't aware of changes. I have to pass events for everything to coordinate.

This has created some spaghetti code that I spent yesterday cleaning up with [module level reference](https://vueschool.io/articles/vuejs-tutorials/home-rolled-store-with-the-vue-js-composition-api/) variables defined inside composable files eg `@/use/people`. State changes can be shared accross all modules instantly bringing feature parity with Pinia.
