---
createdAt: 2021-04-01
img: /abstract-flower.svg
alt: 'The outline of a flower; framed by green and pale red patterns.'
---

*Monday, November 8th 2021*

Consultants have a bad reputation. It's common for development teams to view them with suspicion. They come in, make some sweeping statements, wow your management team and leave as useless as they are dramatic. But at VueSchool we think an engineering consultant is a different breed of consultant. Born in the trenches. A daily coder and a resource for you to lean on when having an external perspective can help your project ship.

Recently we helped a client with a consumer application sort through some performance problems as they bring their application out into the world. Stability and performance are their priority. Their business goal is to prove the app in the market place, secure a round of funding, take the beta off and go like hell.

Their CTO has been on the job for a month. He is comfortable with the product and can speak it's goals. He is not sure of the code quality. What state is this app in? How does it perform? He wants to know what he is working with.


## State of the application

There is a history of crashes while a user is broadcasting, there have been extensive efforts made by the development team to address stability. We need to concretely prove that broadcasting works. Broadcasting is not as performant as other services. We need to understand why? Is there something in Vue or the Firebase stack that is bottlenecking performance?

The feed has a few problems. It is slow to load on mobile with initial paint time above six seconds. Any aggressive scrolling locks the feed up and it's UI is regularly below 60 frames per second. There are reports of the application locking up when browsing back and forth between the feed and a video stream.

## State of the nerds

The CTO's goal is to get a clear picture of the state of this application. Where are we? Are these bugs related? What part does vue play? What happens when you broadcast for hours?  He's a seasoned guy, having run many teams in different parts of the software industry. But he doesn't know this stack. Vue is new to him, firebase is new to him.

He wants to get a baseline.

The lead engineer has been working night and day on this app for the past eighteen months. His was among the first commits to the project. He's been the architect and the force that's got the app built and working, He's gone hard and feels like this app is close, but he can't be the one to prove the app is in good enough shape to come out of beta.

He knows the app is working for him, but he's not confident about its stability for others. He's likes his application architecture and design choices and isn't looking to make dramatic changes this far into the project.

I have found that development teams with high standards also value external validation and are motivated by a practical humility to have people review their work.

## Schedule for work

The client proposes we have Daily, 15 minute meetings with CTO and lead engineer where we do a quick review and clarify the marching orders. Once a week we get all the interested parties together for 45 minutes to go over progress and strategize next steps. We use Slack for regular focused conversations with the lead engineer. There are four weeks of work and I maintain a shared Google doc for each as a notebook of the facts.

## Broadcasting a program

Tooling is the hero of this story. I had a localhost versions of the app running within 20 minutes of getting access to the code. On my dev machine I could create a profile, view profile interact with the full application. They had even gone so far as to apply a dev stylesheet so that the background made clear that you were working on development data.

I could broadcast immediately, I could as deep as I wanted into the code base.  go deep and play with a fully functional app. Right from the jump. Since I was connected to shared dev server I had a functioning feed with recent content that I could post too immediately available to me.

Any videos I created are stored in a dev site which is publicly available. I was immediately sharing videos of what I was doing with the team. I could go to the dev site from any machine and use it. This cleared the way for me to give clear and regular feedback to the team.

The customer support team make regular and extensive product walk throughs. I was a power user by the end of the first day.

We ran an initial twelve hour broadcast with the goal of identifying any memory leaks and performance problems. I used the dev site directly from an older machine (2013 MacBook Air) to see how the application performs under stress and to verify that the application will work reliably for the widest possible pool of broadcasters.

We broadcast program from one machine, added a second stream to the program from another laptop and then a third stream from a phone broadcaster to the stream. We ran three broadcasters on one stream for hours, We played pre-recorded videos on loop, exercised the chat function. Ran an ever-changing audio signal through the broadcast.

I hit this poor machine as hard as I could for the twelve hour stream and it performed flawlessly. It streamed the full twelve hours and could have continued forever. The laptop was stressed the entire broadcast. We were able to determine that the encoder had a gate which capped itself at 60% CPU utilization.  making reasonable tradeoffs between broadcast quality and machine capability. Memory usage was stable for a long period. There were no leaks.

It seemed to the CTO that the application was inneficient. He reasoned that a single program should be able to stream somewhere close to the amount of people that can join a google meetup or zoom call.

He wanted to understand what we were spending our performance budget on. My role was to gather the facts and document what is known and unknown. I am but a vessel for CTO and the tech lead to make decisions.


## Browsing a feed

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Using on mobile

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Why it worked

- Tooling is flexible and was invested in
- CTO is available and willing to commit resources to remove roadblocks. He has clear priorities for me and though is new cares for his team
- Development team responds quickly to questions, are current and have an established culture of move fast and best practices.
- The team is thinking with me about how to solve performance problems. My role is to be diligent and provide the right level of information and offer solutions that make the smallest amount of changes to the codebase