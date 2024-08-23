const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = function(eleventyConfig) {
  // Copy static assets
  // eleventyConfig.addPassthroughCopy('posters');
  eleventyConfig.addPassthroughCopy('public');

  // Configure Markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItPrism, {
    theme: false
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Add a shortcode for setting page title
  eleventyConfig.addShortcode("setPageTitle", function(title) {
    return `${title} - Scott Fryxell`;
  });

  // Add date filters
  eleventyConfig.addFilter("dateIso", date => {
    return date.toISOString();
  });

  eleventyConfig.addFilter("dateReadable", date => {
    return date.toDateString();
  });

  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("articles/*.md");
  });

  return {
    dir: {
      input: '.',
      output: '_site',
      layouts: 'layouts'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
