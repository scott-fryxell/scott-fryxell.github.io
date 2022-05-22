---
date: 2022-05-22
img: /posters/Scott_Fryxell_Sunday, May 22, 10_05 AM.svg
---

Firebase storage files are not stored or sent gzip'd. I'll need [to do it myself](https://cloud.google.com/storage/docs/transcoding). When done I reduce my file sizes by 60%. a 30k vector file will become 10k.

I am using a lot of intricate art as sample posters. Some vector files can get as big as 100kb, which is okay, as it's rare that posters are converted with such detail. A sick feature of text based picture files is how good they are at being compressed — gzipping posters will make performance concerns disappear. 100k becomes 30k gziped. this will optimize the Network performance, and costs to run a realness instance. The app is rocket fast. on the edge I can store them uncompressed so they render the quickest.

A tool is fast.

Firebase is generous; In the three years I've used the service realness hasn't cost me a dime. They give developers the space to create. I already have a compression worker built to do the gziping on the edge, and convert to `${created_at}.html.gz`.

If realness starts creeping toward costing money, I have this in my pocket ready to go. I got too much to build to do it now, but it's headroom. something I can throw in their if the shit gets real. Performance is about knowing your headroom.
