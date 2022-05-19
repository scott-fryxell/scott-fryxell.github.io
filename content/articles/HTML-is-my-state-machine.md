---
date: 2022-05-18
img: /posters/Scott_Fryxell_Wednesday, May 18, 4_27 PM.svg
---

Edge poses weird quandries when you start taking advantage of how close your code and data are.

I have used HTML for some Vuex/Pinia duties for years. the current state of any object is the html that is being rendered. If need new state I load the object from the database and get it. It's instant because the database is on the client with the client code.

Pinia has felt like an extra layer. The DOM manages Mutations elegently. I get the state of the html and save it. What the person is viewing is the state that's being saved. The data is right there.

The state can be shared accross components because each component can load the state on screen or the state in persistance. Most of the time this is enough. But ocassionally I need changes I'm making to spread out accross each component instantly. This is where Vue 3's composables have come in handy.

I'm working with Relations (who you are following) right now and they are loaded in like 15 modules. each instance knows about itself. I have to pass events to for everything to coordinate. This has created some spaghetti code that I spent yesterday cleaning up with [module level reference](https://vueschool.io/articles/vuejs-tutorials/home-rolled-store-with-the-vue-js-composition-api/) variables defined inside composable files `@/use/people`. State can be known accross all my modules. This brings my app into feature parity with Pinia.
