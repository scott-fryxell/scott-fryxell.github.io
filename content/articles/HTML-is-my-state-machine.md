---
date: 2022-05-18
---

Edge poses weird quandries when you start taking advantage of how close your code is to your data.

It's been my vuex/pinia for years. If I wanna know the state I'll load the object from the database and get it. It's instant because the database is on the client with the client code.

Pinia has feelt like an extra layer. Mutations I've already got mutations, the data is right there. But I have a problem do like composables for

I'm working with Relations right now and they are loaded in like 15 modules. each instance knows about itself. Changes don't apply to other instances.

This has created some spaghetti code for updates to statements that I spent yesterday cleaning up with module level reference variables inside a composable module. this way the state can be known accross all my modules. If I save the data where I get it this isn't a propblem.

What's got me feeling so uncomfortable here?

I realized I need to move all the loading via database into a single composable. I want to make sure I know what I've got what purposes I'm using `load()` and `list()` for.

I think this is an elegant upgrade to how I'm mangaging state in the app. module scope removes the spaghetti of having to pass changes via events.

and then in my composable I can load and list all I want. Components utilize composables while I manage mutations via list, load and save.

I want to keep both aproaches. How do I harmonize them into cohesive music? Having the database so close is what's novel about edge.
