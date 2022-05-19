---
date: 2022-05-18
img: /posters/Scott_Fryxell_Wednesday, May 18, 4_27 PM.svg
---

Edge poses weird quandries when you start taking advantage of how close your code is to your data.

HTML has been my vuex/pinia for years. If I wanna know the state I'll load the object from the database and get it. It's instant because the database is on the client with the client code.

Pinia has feelt like an extra layer. Mutations I've already got mutations, the data is right there. But I have a problem I do like composables for

I'm working with Relations (who you are following) right now and they are loaded in like 15 modules. each instance knows about itself. I have to pass events to for everything to cordinate.

This has created some spaghetti code that I spent yesterday cleaning up with [module level reference](https://vueschool.io/articles/vuejs-tutorials/home-rolled-store-with-the-vue-js-composition-api/) variables defined inside composable files — `@/use/people`. State can be known accross all my modules. This brings my app into feature parity with Pinia.

I think this is an elegant upgrade to how I'm mangaging state in the app. module scope removes the spaghetti of having to pass changes via events.

I can continue to use `itemid.load` and `list`. opting for this module level scope when I have to share state accross components. This leverages composables while I let html manage the mutations.

I want to keep both aproaches. The work these last few days has been how do I harmonize composables into the data. Having the database so close is what's novel about edge.
