__NUXT_JSONP__("/blog/DOM-the-ORM", (function(a,b,c,d,e,f,g,h,i,j,k){return {data:[{article:{slug:"DOM-the-ORM",description:"How a single change opens the DOM up to be our persistence hero",date:"2021-11-17T00:00:00.000Z",img:"Scott_Fryxell_posters_Friday, May 21, 2_41 PM.svg",toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"I am not above using a hack."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I am finishing this conversion to Vue 3.2. I am comfortable with it now. I let my tests start to fail and knew my coverage was gonna drop. I will also let my tests fail from time to time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"VueSchool let me spend October and November learning Vue 3.2, and typescript, and Nuxt, and vuetify, and a whole host of other pieces of the vue ecosystem. Having gone hard and studied and focused on learning where we are as an industry, I am turning back towards My specific development goal – making realness posters fun. My immediate goal is How to color, style and animate the posters realness creates. I've got the social network part built. Converting pictures that you take into vector graphics with multiple layers that you can color and animate."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I use firebase storage as to store data in html files. I am happy with my stack."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Up to now I have used Microdata to describe my types - and a simple 100 line javascript file to parse them. Posters, Avatars, Events, Statements."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But animating and styling posters is complex. The data that cab exist on a single element is non trivial."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A path element along could contain 50 or so relevant attributes that I may want to style. I have this problem with svg animate elements too. With a ruleset and validations I don't want to duplicate."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With a simple one line change I am able to bind a complex element to my data model. It's any animation I can imagine - Run on the GPU. I have easy access to every Object in HTML CSS, and SVG."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I think of HTML as a first class citizen. I can describe any data type in HTML. Up to now I have satisfied using micro data for this purpose."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But SVG poses a unique problem. I want all of the attributes, validations, rulesets and privelages of a path element. I need to know everything about it. And I don't want to reproduce it myself."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u002F\u002F from\ncase 'path':return element.outerHTML\n\n\u002F\u002F from\ncase 'path':return element\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Microdata lets me set SVGPathElement directly. I was never constrained to string values. Item supports complex HTML types intuitively."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"with change I get runtime "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.motiontricks.com\u002Fcreating-dynamic-svg-elements-with-javascript\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"typing"}]},{type:a,value:" for any path elements "},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cpath itemprop=\"vector\"\u002F\u003E"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Any time I want to type based on an html Element I can. I have sensible defaults and configurable complexity."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What I love about this is I have easy access to all of CSS's animation effects. Which I can trust to be accelerated on the GPU."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"browsers, you can use CSS for attributes like cx, cy, r etc. When SVG2 is released, it will have geometry properties (cx, cy, r, rx, ry etc.). I’m not going to dive too deep into upcoming features. You can read more about that at your leisure."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This has convinced me that HTML is database."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I want to spend my performance budget wisely."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I can build Realness AND build a service that serves validated transforms in HTML"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FCSS\u002Fpath",rel:[h,i,j],target:k},children:[{type:a,value:"event setting d via style"}]},{type:a,value:" which is crazy and amazing to me"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A secondary"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"How am I going to animate these vector graphics in a way that I can make downloadable? I have landed on using CSS's animation tools first but haven't yet figured out how to incorporate the named animation into the downloaded vector."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can make and attach your own custom comoponents to and attach then manipulate them as types during your runtime."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is better typing than Even if you need to extract your data to a database I would argue that this is a more natural way to write webapps. It's a natureal friend of serverless edge and data sanctity."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002FDOM-the-ORM",extension:".md",createdAt:"2025-02-15T21:02:53.415Z",updatedAt:"2025-02-15T21:02:53.416Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","code","a","nofollow","noopener","noreferrer","_blank")));