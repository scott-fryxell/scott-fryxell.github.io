---
date: 2022-05-22
img: /posters/Scott_Fryxell_posters_Saturday, April 17, 10_47 AM.svg
---

Firebase storage files are not stored or sent gzip'd. I'll need [to do it myself](https://cloud.google.com/storage/docs/transcoding). When done I reduce my file sizes by 60%. a 30k vector file will become 10k.

I am using a lot of intricate art as sample posters. some of these can get as big as 100k, which is okay as it's rare that posters create such detail. but gzipping make performance concerns disappear. 100k becomes 30k gziped. Network performance will be instance. This is some 30ms type shit. This will reduce costs to run a realness instance by 60%.

Firebase is generous; In the three years I've used the service realness hasn't cost me a dime. They give developers the space to create. I already have a compression worker built to do the gziping on the edge.

If realness starts creeping toward costing money, I have this in my pocket ready to go. I got too much to build to do it now, but it's headroom. Performance is about knowing your headroom.
