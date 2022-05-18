---
date: 2022-05-18
---

Edge poses weird quandries when you start taking advantage of how close your code is to your data.

It's been my vuex/pinia for years. If I wanna know the state I'll load the object from the database and get it. It's instant because the database is on the client with the client code.

pinia feels like an extra layer. But I do like composables ability to store state across modules by declaring variable at the module scope. (a job I used the local database for).

I'm working with Relations right now and they are loaded in like 15 modules. each instance knows about itself.

This has created some spaghetti code. That I spent yesterday cleaning up with composables. I realized I need to move all the loading via database into a single composable. I want to make sure I know what I've got what purposes I'm using `load()` and `list()` for.

I think this is an elegant upgrade to how I'm mangaging state in the app. module scope removes the spaghetti of having to pass changes via events.

and then in my composable i can load and list all I want. Components utilize composables while I manage mutations via list, load and save.

I want to keep both aproaches. How do I harmonize them into cohesive music? Having the database so close is what's novel about edge.
