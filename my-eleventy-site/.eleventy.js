const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('static');
  eleventyConfig.addPassthroughCopy('posters');

  // Handle CSS
  eleventyConfig.addPassthroughCopy('assets');

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

  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      layouts: '_includes/layouts',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
