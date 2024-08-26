const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const stylus = require('stylus');
const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ public: '/' });

  // Copy @realness.online/web assets
  eleventyConfig.addPassthroughCopy({
    'node_modules/@realness.online/web/src/style': '/',
    'node_modules/@realness.online/web/src/icons': '/icons',
  });

  // Configure Markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItPrism);
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Add a shortcode for setting page title
  eleventyConfig.addShortcode('setPageTitle', function (title) {
    return `${title} - Scott Fryxell`;
  });

  // Add date filters
  eleventyConfig.addFilter('dateIso', (date) => {
    return date.toISOString();
  });

  eleventyConfig.addFilter('dateReadable', (date) => {
    return date.toDateString();
  });

  // Create a collection for blog posts
  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('articles/*.md');
  });

  // Add Stylus as a template engine
  eleventyConfig.addTemplateFormats('styl');

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
  // let nunjucksEnvironment = eleventyConfig.nunjucksEnvironment;
  // nunjucksEnvironment.loaders.forEach((loader) => {
  //   console.log(loader);
  //   loader.searchPaths.push(realnessStylePath);
  // });

  // eleventyConfig.addExtension('styl', {
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
  // eleventyConfig.addWatchTarget('./src/styles/');

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
