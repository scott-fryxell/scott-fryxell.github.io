(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{255:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("8b7b70e6",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r.r(e);r(27),r(61);var l={props:{article:{type:Object,required:!0}},methods:{format_date:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric",timeZone:"America/Los_Angeles"})},format_title:function(t){return t.replace(/-/g," ")}}},n=(r(257),r(47)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"post"},[r("header",[t.article.img?r("img",{attrs:{src:"/posters/"+t.article.img,alt:t.article.alt,loading:"lazy"}}):t._e(),t._v(" "),r("h2",[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[t._v(t._s(t.format_title(t.article.slug)))])],1)]),t._v(" "),r("h5",[t._v(t._s(t.format_date(t.article.date)))]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("footer")],1)}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,r){"use strict";r(255)},258:function(t,e,r){var l=r(78)(!1);l.push([t.i,"article.post{overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center}@media print{article.post{min-height:100vh}}@media (max-width:33rem){article.post>header{display:block}}article.post>header>img{width:100vw;max-height:100vh}@media (min-width:33rem){article.post>header>img{width:70vw}}article.post>header>h2{min-width:30vw;padding:0 1rem;text-transform:capitalize}article.post blockquote{font-style:italic;margin-left:1rem}article.post div.nuxt-content img{max-width:29rem}article.post>h5{padding:0 1rem}article.post>details{display:inline-block;margin-left:1rem}article.post>details summary{font-size:small;opacity:.4}article.post>details>nav>a{text-decoration:none;line-height:2;margin-left:1rem;display:block}article.post>footer{padding:1em;page-break-after:always}article.post .nuxt-content,article.post .nuxt-content-editor{max-width:33rem;padding:0 1rem}",""]),t.exports=l}}]);