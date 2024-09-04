const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const stylus = require('stylus');
const fs = require('fs');
const path = require('path');

module.exports = e11y => {
  e11y.addPassthroughCopy({ public: '/' });

  // Copy @realness.online/web assets
  e11y.addPassthroughCopy({
    'node_modules/@realness.online/web/src/style': '/',
    'node_modules/@realness.online/web/src/icons': '/icons',
  })
  e11y.setLibrary('md', markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItPrism))

  // e11y.addDataExtension("md", contents => {
  //   console.log(contents.inputPath);
  //   const filename = path.basename(contents.inputPath, '.md');
  //   const title = filename
  //     .split('-')
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');

  //   return {
  //     eleventyComputed: {
  //       title: data => data.title || title
  //     }
  //   };
  // });

  e11y.addGlobalData("eleventyComputed", {
    title: data => {
      if (data.title) return data.title
      return data.page.fileSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  })
  e11y.addShortcode('page_title', title => `${title} - Scott Fryxell`);

  e11y.addFilter('dateIso', date => date.toISOString() )
  e11y.addFilter('dateReadable', date =>   date.toDateString())
  e11y.addFilter("full_date", date => new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }))

  // Create a collection for blog posts
  e11y.addCollection('posts',  articles =>  articles.getFilteredByGlob('articles/**/*.md'));

  // Add Stylus as a template engine
  e11y.addTemplateFormats('styl')

  // Add the new include path
  const realnessStylePath = path.join(
    __dirname,
    'node_modules',
    '@realness.online',
    'web',
    'src',
    'style'
  );

  // Add it to the include paths for Nunjucks
  // let nunjucksEnvironment = e11y.nunjucksEnvironment;
  // nunjucksEnvironment.loaders.forEach((loader) => {
  //   console.log(loader);
  //   loader.searchPaths.push(realnessStylePath);
  // });

  // e11y.addExtension('styl', {
  //   outputFileExtension: 'css',
  //   compile: async function (inputContent, inputPath) {
  //     let result = stylus(inputContent)
  //       .set('filename', inputPath)
  //       .set('compress', true); // Set to false if you don't want minification

  //     return async () => {
  //       return result.render();
  //     };
  //   },
  // });

  // // Optional: Add a watch target for Stylus files
  // e11y.addWatchTarget('./src/styles/');

  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      layouts: '_includes/layouts',
      data: '_data',
    },
    templateFormats: ['md', 'njk', 'html', 'styl'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
