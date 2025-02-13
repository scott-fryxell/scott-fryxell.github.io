__NUXT_JSONP__("/blog/Interviews,%20AI,%20Imagination", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac){return {data:[{article:{slug:"Interviews, AI, Imagination",date:"2025-02-12T00:00:00.000Z",img:"Scott_Fryxell_Thursday, February 6 at 1_32 PM.svg",toc:[{id:P,depth:t,text:Q},{id:R,depth:t,text:S},{id:T,depth:t,text:U},{id:V,depth:t,text:W},{id:X,depth:t,text:Y}],body:{type:"root",children:[{type:b,tag:u,props:{id:P},children:[{type:b,tag:l,props:{href:"#working-with-ai",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:Q}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"I've been scaling up my work with Cursor's AI in the last three months. More than line completion, I am using it to help me work through and implement solutions. Trying to push what I can get done."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"It has been going well. I feel like I am two and sometimes three developers and the code I am writing has higher standards and is willing to go deeper."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"In the last three months I have brought online a fairly intense "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Frealness-online\u002Fweb\u002Fblob\u002Fmain\u002Feslint.config.js",rel:[z,A,B],target:C},children:[{type:a,value:"linter"}]},{type:a,value:"; have begun getting type visibility with "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Frealness-online\u002Fweb\u002Fblob\u002Fmain\u002Ftsconfig.json",rel:[z,A,B],target:C},children:[{type:a,value:"JSDoc"}]},{type:a,value:".  I even brought my test harness back online. Nothings perfect. all three are works in process but feel like the ideal baselines and perfect tooling for cursor to help me work with."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"I have more useful tools without paying the extraordinary costs in harness maintenance. I am finding the sweet spot. and it's amazing that the busy work is less of a headwind now. That I have a best practices machine at the ready has me going harder. and not being slowed down by testing feels like I've got a buddy back."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"But my confidence to trust the work I'm doing with AI is because I know to harden myself for the future. I learned how to survive in vim this last year, It's going to be my low assistance editor and to keep my ability to support the nerd handshake, I have "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fscott-fryxell\u002Fkata-machine",rel:[z,A,B],target:C},children:[{type:a,value:"forked"}]},{type:a,value:" into a deno version ThePrimeagen's kata machine."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"This is the dream right: we are stronger for it."}]},{type:a,value:g},{type:b,tag:u,props:{id:R},children:[{type:b,tag:l,props:{href:"#the-interview-problem",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:S}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.404media.co\u002Fanthropic-claude-job-application-ai-assistants\u002F",rel:[z,A,B],target:C},children:[{type:a,value:"Finding out"}]},{type:a,value:" that Anthropic is asking developers to not use AI during the interview process is pretty bonkers. I think it shows that we've always half-assed our way into finding good engineers."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"This morning I fixed a bug with syncing anonymous posters and statements when a user signs into the application. I got a solution that kinda worked with Cursor's (and Claude's) help. Then I went for a walk and without being in front of a computer found myself fixing the bugs I knew the solution I had just implemented created. I had the application and its intricacies in my head and was able to walk through my solution and find additional bugs."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"This gets at the heart of what we should be hiring for – the ability to put a problem in your head and then play with it like a living, functioning system."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"The issue with our interview process becomes clear when you look at it this way. We're stuck interviewing for memorization and intense recall when we should be looking for systems imagination."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"When we give interviewees problems during an interview, we're not giving them time to load the model into their brains and then show you how it works for them. They are hoping to be lucky enough to have studied the exact problem you're giving them to solve."}]},{type:a,value:g},{type:b,tag:u,props:{id:T},children:[{type:b,tag:l,props:{href:"#a-whole-class-of-bugs",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:U}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"These 22 lines of code remove a whole class of bugs around document ID:"}]},{type:a,value:g},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-typescript","line-numbers"]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:G}]},{type:a,value:" convert"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:" FirestoreDataConverter"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" DocumentData"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,_,r]},children:[{type:a,value:"fromFirestore"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n    snapshot"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:" DocumentSnapshot"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n    options"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:" SnapshotOptions\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:G}]},{type:a,value:" data "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"options"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"if"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"!"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:M}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"null"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:G}]},{type:a,value:" return_data "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n      id"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"id"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n      ref"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n      path"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"path"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n      created_at"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"createTime"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n      updated_at"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"updateTime"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n      read_at"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"readTime"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:M}]},{type:a,value:" return_data\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,_,r]},children:[{type:a,value:"toFirestore"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"model"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:" WithFieldValue"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:G}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:" updated_at"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" created_at"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" id"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" read_at"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:"data "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:" model\n    "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:M}]},{type:a,value:" data\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Only in the beginning of your firestore app can you store the document ID inside the document. If references get out of sync, you'll barely notice yourself driving into the wall."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"These are the kinds of worries I have swimming around in my head."}]},{type:a,value:g},{type:b,tag:u,props:{id:V},children:[{type:b,tag:l,props:{href:"#i-hypocrite",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:W}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"When working in Firestore you want to build your app around the document id as the one source of truth. the change above reinforces document id as king. Using data converters frees me to have easy access in code to id while never duplicating it inside the schema. Now we are doing what we can in our app to enable fast development and intuitive developer experience while maintaining data integrity."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"But with Realness this approach would prove to be unstable, because of how different the databases purpose are."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Since Realness is an HTML database build to be device centric we want the "},{type:b,tag:F,props:{},children:[{type:a,value:"itemid"}]},{type:a,value:" attribute to be the source of truth the rest of the application relies on. The poster's file name can and will change based on the context. On the network it's saved as "},{type:b,tag:F,props:{},children:[{type:a,value:"\u002Fauthor\u002Ftype\u002Fcreated-at"}]},{type:a,value:" which is optimized for feeds."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"When you download the poster the name is ornate "},{type:b,tag:F,props:{},children:[{type:a,value:"Scott_Fryxell_Thursday, February 6 at 1_31 PM.svg"}]},{type:a,value:", as rococo as I can go with a file name. And I love it for that"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"by keeping the source of truth inside the html I can query it's "},{type:b,tag:l,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTML\u002FMicrodata",rel:[z,A,B],target:C},children:[{type:a,value:"Microdata"}]},{type:a,value:" and build an object model magically. It comes alive on device and keeps my promise to the user that the server is  inert."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"I can live in both of these worlds I can load them both into my imagination and compare contrast and analyze how they perform against their purpose."}]},{type:a,value:g},{type:b,tag:u,props:{id:X},children:[{type:b,tag:l,props:{href:"#what-really-matters",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:Y}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"It shouldn't matter that the developer is using AI. What matters is how good you can ride the bicycle of your mind."}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"I want to hire and work with people that have active imaginations, are tidy, and can hang out with queers and meat-heads in equal measure, who want a friend group filled with some mother fuckers who are on fetlife and others who go to church. You know, they keep themselves clean and can navigate peculiarities with curiosity."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002FInterviews, AI, Imagination",extension:".md",createdAt:ac,updatedAt:ac}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","operator","\n","p"," ",",",":","a","keyword",".","(",")"," snapshot","function","\n    ",2,"h2","true",-1,"icon","icon-link","nofollow","noopener","noreferrer","_blank","{","}","code","const","=","\u003C","DocumentData","\u003E","data","return","?.","toDate","working-with-ai","Working with AI","the-interview-problem","The Interview Problem","a-whole-class-of-bugs","A Whole Class of Bugs","i-hypocrite","I, Hypocrite","what-really-matters","What Really Matters","\n  ","function-variable","=\u003E","...","ref","2025-02-13T17:39:03.693Z")));