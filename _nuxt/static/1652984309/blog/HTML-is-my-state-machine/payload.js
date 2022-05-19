__NUXT_JSONP__("/blog/HTML-is-my-state-machine", (function(a,b,c,d,e,f){return {data:[{article:{slug:"HTML-is-my-state-machine",date:"2022-05-18T00:00:00.000Z",toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Edge poses weird quandries when you start taking advantage of how close your code is to your data."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"It's been my vuex\u002Fpinia for years. If I wanna know the state I'll load the object from the database and get it. It's instant because the database is on the client with the client code."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Pinia has feelt like an extra layer. Mutations I've already got mutations, the data is right there. But I have a problem do like composables for"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"I'm working with Relations right now and they are loaded in like 15 modules. each instance knows about itself. Changes don't apply to other instances."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"This has created some spaghetti code for updates to statements that I spent yesterday cleaning up with module level reference variables inside a composable module. this way the state can be known accross all my modules. If I save the data where I get it this isn't a propblem."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"What's got me feeling so uncomfortable here?"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"I realized I need to move all the loading via database into a single composable. I want to make sure I know what I've got what purposes I'm using "},{type:b,tag:e,props:{},children:[{type:a,value:"load()"}]},{type:a,value:" and "},{type:b,tag:e,props:{},children:[{type:a,value:"list()"}]},{type:a,value:" for."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"I think this is an elegant upgrade to how I'm mangaging state in the app. module scope removes the spaghetti of having to pass changes via events."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"and then in my composable I can load and list all I want. Components utilize composables while I manage mutations via list, load and save."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"I want to keep both aproaches. How do I harmonize them into cohesive music? Having the database so close is what's novel about edge."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002FHTML-is-my-state-machine",extension:".md",createdAt:f,updatedAt:f}}],fetch:{},mutations:void 0}}("text","element","p","\n","code","2022-05-19T18:17:36.523Z")));