(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{251:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("8b7b70e6",content,!0,{sourceMap:!1})},252:function(t,e,r){"use strict";r.r(e);r(27),r(61);var n={props:{article:{type:Object,required:!0}},methods:{format_date:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},format_title:function(t){return t.replace(/-/g," ")}}},l=(r(253),r(47)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"post"},[r("header",[r("meta",{attrs:{name:"description",content:t.article.body.children[0].children[0].value}}),t._v(" "),r("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("h1",[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[t._v(t._s(t.format_title(t.article.slug)))])],1)]),t._v(" "),r("details",[r("summary",[t._v("Last updated: "+t._s(t.format_date(t.article.updatedAt)))]),t._v(" "),r("nav",t._l(t.article.toc,(function(link){return r("NuxtLink",{key:link.id,attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])})),1)]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("footer")],1)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r(251)},254:function(t,e,r){var n=r(78)(!1);n.push([t.i,"article.post>header>img{width:75vw}article.post>header>h1{padding:0 1rem}article.post>details{display:inline-block;margin-left:1rem}article.post>details summary{font-size:small;opacity:.4}article.post>details>nav>a{text-decoration:none;line-height:2;margin-left:1rem;display:block}article.post .nuxt-content-container{margin:auto;max-width:33rem}",""]),t.exports=n},270:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(46),{components:{asArticle:r(252).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(47),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("as-article",{attrs:{article:t.article}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsArticle:r(252).default})}}]);