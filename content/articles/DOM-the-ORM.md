---
date: 2021-11-17
description: How a single change opens the DOM up to be our persistence hero
img: /posters/Scott_Fryxell_posters_Friday, May 21, 2_41 PM.svg
---

I am not above using a hack.

I am finishing this conversion to Vue 3.2. I am comfortable with it now. I let my tests start to fail and knew my coverage was gonna drop. I will also let my tests fail from time to time.

VueSchool let me spend October and November learning Vue 3.2, and typescript, and Nuxt, and vuetify, and a whole host of other pieces of the vue ecosystem. Having gone hard and studied and focused on learning where we are as an industry, I am turning back towards My specific development goal – making realness posters fun. My immediate goal is How to color, style and animate the posters realness creates. I've got the social network part built. Converting pictures that you take into vector graphics with multiple layers that you can color and animate.

I use firebase storage as to store data in html files. I am happy with my stack.

Up to now I have used Microdata to describe my types - and a simple 100 line javascript file to parse them. Posters, Avatars, Events, Statements.

But animating and styling posters is complex. The data that cab exist on a single element is non trivial.

A path element along could contain 50 or so relevant attributes that I may want to style. I have this problem with svg animate elements too. With a ruleset and validations I don't want to duplicate.

With a simple one line change I am able to bind a complex element to my data model. It's any animation I can imagine - Run on the GPU. I have easy access to every Object in HTML CSS, and SVG.

I think of HTML as a first class citizen. I can describe any data type in HTML. Up to now I have satisfied using micro data for this purpose.

But SVG poses a unique problem. I want all of the attributes, validations, rulesets and privelages of a path element. I need to know everything about it. And I don't want to reproduce it myself.


```

// from
case 'path':return element.outerHTML

// from
case 'path':return element

```


Microdata lets me set SVGPathElement directly. I was never constrained to string values. Item supports complex HTML types intuitively.

with change I get runtime [typing](https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/) for any path elements `<path itemprop="vector"/>`.

Any time I want to type based on an html Element I can. I have sensible defaults and configurable complexity.

What I love about this is I have easy access to all of CSS's animation effects. Which I can trust to be accelerated on the GPU.

> browsers, you can use CSS for attributes like cx, cy, r etc. When SVG2 is released, it will have geometry properties (cx, cy, r, rx, ry etc.). I’m not going to dive too deep into upcoming features. You can read more about that at your leisure.

- This has convinced me that HTML is database.
- I want to spend my performance budget wisely.
- I can build Realness AND build a service that serves validated transforms in HTML

- [event setting d via style](https://developer.mozilla.org/en-US/docs/Web/CSS/path) which is crazy and amazing to me


A secondary

How am I going to animate these vector graphics in a way that I can make downloadable? I have landed on using CSS's animation tools first but haven't yet figured out how to incorporate the named animation into the downloaded vector.




You can make and attach your own custom comoponents to and attach then manipulate them as types during your runtime.

This is better typing than Even if you need to extract your data to a database I would argue that this is a more natural way to write webapps. It's a natureal friend of serverless edge and data sanctity.
