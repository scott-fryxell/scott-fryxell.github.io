---
date: 2025-02-14T08
img: Scott_Fryxell_Thursday, February 6 at 1_32 PM.svg
---


## Working with AI

I've been scaling up my work with Cursor's AI in the last three months. More than line completion, I am using it to help me work through and implement solutions; trying to push what I can get done.

It has been going well. I feel like I am two and sometimes three developers and the code I am writing has higher standards and is willing to go deeper.

I have upgraded to a fairly intense set of [linting](https://github.com/realness-online/web/blob/main/eslint.config.js) rules; have type visibility via [JSDoc](https://github.com/realness-online/web/blob/main/tsconfig.json). I even brought my test harness back online. Nothing's perfect, all three are works in progress but I feel like these are ideal setups for where cursor shines as an assistant. I can learn about how to type for clarity, get inference errors sorted quickly; fix linting mismatches and even repair and create tests that build my confidence.

I have more useful tools without paying extraordinary costs in harness maintenance. I am finding the sweet spot. It is amazing that the busy work is less of a headwind now. That I have a best practices machine at the ready has me going harder. And not being slowed down by testing feels like I've got a buddy back.

But my confidence to trust the work I'm doing with AI is not blind. I know to harden myself for the future. I learned how to survive in vim this last year, It's going to be my low assistance editor. To keep my ability to support the nerd handshake, I have [forked](https://github.com/scott-fryxell/kata-machine) into a deno version the Primeagen's kata machine.

This is the dream, right: we are stronger for AI, More capable; rewarded for pushing ourselves.

## The Interview Problem

[Finding out](https://www.404media.co/anthropic-claude-job-application-ai-assistants/) that Anthropic is asking developers to not use AI during the interview process is pretty bonkers. I think it shows that we've always half-assed our way into finding good engineers.

This morning I fixed a bug with syncing anonymous posters and statements when a user signs into the application. I got a solution that kinda worked with Cursor's (and Claude's) help. Then I went for a walk and without being in front of a computer found myself fixing the bugs I knew the solution I had just implemented created. I had the application and its intricacies in my head and was able to walk through my solution and find additional bugs.

This gets at the heart of what we should be hiring for – the ability to put a problem in your head and then play with it like a living, functioning system. We're stuck interviewing for memorization and intense recall when we should be looking for systems imagination.

When we give interviewees problems during an interview, we're not giving them time to load the model into their brains and then show you how it works for them. Their goals are to game your system hoping to be lucky enough to have studied the exact problem you're giving them to solve.

## A Whole Class of Bugs

These 22 lines of code remove a whole class of bugs around document ID:

```typescript
const convert: FirestoreDataConverter<DocumentData, DocumentData> = {
  fromFirestore: (
    snapshot: DocumentSnapshot<DocumentData>,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options)
    if (!data) return null
    const return_data = {
      ...data,
      id: snapshot.id,
      ref: snapshot.ref,
      path: snapshot.ref.path,
      created_at: snapshot.createTime?.toDate(),
      updated_at: snapshot.updateTime?.toDate(),
      read_at: snapshot.readTime?.toDate()
    }
    return return_data
  },
  toFirestore: (model: WithFieldValue<DocumentData>) => {
    const { updated_at, created_at, id, read_at, ...data } = model
    return data
  }
}
```

Only in the beginning of your firestore app can you store the document ID inside the document. If references get out of sync, you'll barely notice yourself driving into the wall.

These are the kinds of worries I have swimming around in my head.

## I, Hypocrite

When working in Firestore you want to build your app around the document id as the one source of truth. the change above reinforces document id as king. Using data converters frees me to have easy access in code to id while never duplicating it inside the schema. Now we are doing what we can in our app to enable fast development and intuitive developer experience while maintaining data integrity.

But with Realness this approach would prove to be unstable, because of how different the databases purpose are.

Since Realness is an HTML database build to be device centric we want the `itemid` attribute to be the source of truth the rest of the application relies on. The poster's file name can and will change based on the context. On the network it's saved as `/author/type/created-at` which is optimized for feeds.

When you download the poster the name is ornate `Scott Fryxell, Thursday, February 6 at 1_31 PM.svg`, as rococo as I can go with a file name.

by keeping the source of truth inside the html I can query it's [Microdata](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata) and build an object model magically. It comes alive on device and keeps my promise to the user that the server is  inert.

I can live in both of these worlds I can load them both into my imagination and compare contrast and analyze how they perform against their purpose.

## What Really Matters

It shouldn't matter that the developer is using AI. What matters is how good you can ride the bicycle of your mind.

I want to hire and work with people that have active imaginations, are tidy, and can hang out with queers and meat-heads in equal measure, who want a friend group filled with some motherfuckers who are on fetlife and others who go to church. You know, they keep themselves clean and can navigate peculiarities with curiosity.
