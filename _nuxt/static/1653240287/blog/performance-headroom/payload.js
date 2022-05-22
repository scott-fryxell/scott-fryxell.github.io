__NUXT_JSONP__("/blog/performance-headroom", (function(a,b,c,d,e){return {data:[{article:{slug:"performance-headroom",date:"2022-05-22T00:00:00.000Z",img:"\u002Fposters\u002FScott_Fryxell_Sunday, May 22, 10_05 AM.svg",toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Firebase storage files are not stored or sent gzip'd. I'll need "},{type:b,tag:"a",props:{href:"https:\u002F\u002Fcloud.google.com\u002Fstorage\u002Fdocs\u002Ftranscoding",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"to do it myself"}]},{type:a,value:". When done I reduce my file sizes by 60%. a 30k vector file will become 10k."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"I am using a lot of intricate art as sample posters. some of these can get as big as 100k, which is okay as it's rare that posters create such detail. but gzipping make performance concerns disappear. 100k becomes 30k gziped. Network performance will full optimized. This is some 30ms type shit. This will reduce costs to run a realness instance by 60%, and maintain the fast-by-design philosophy that is the tool mindset I'm going for"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Firebase is generous; In the three years I've used the service realness hasn't cost me a dime. They give developers the space to create. I already have a compression worker built to do the gziping on the edge."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"If realness starts creeping toward costing money, I have this in my pocket ready to go. I got too much to build to do it now, but it's headroom. Performance is about knowing your headroom."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fperformance-headroom",extension:".md",createdAt:e,updatedAt:e}}],fetch:{},mutations:void 0}}("text","element","p","\n","2022-05-22T17:23:53.474Z")));