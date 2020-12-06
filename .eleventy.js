const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  let markdownIt = require("markdown-it");
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  })
  markdownLibrary.use(require("markdown-it-footnote"));
  markdownLibrary.use(require("@iktakahiro/markdown-it-katex"));
  markdownLibrary.use(require("markdown-it-textual-uml"));
  markdownLibrary.use(require("markdown-it-anchor"), { level: [2,3,4], permalink: true, permalinkSymbol: '§' });
  markdownLibrary.use(require("markdown-it-toc-done-right"), { level: [2,3,4] });

  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.setTemplateFormats([
    "md", "njk", // for the Atom/RSS XML feed
    "jpg", "png", "ico", "svg", // no css since we are using postcss
  ]);
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        /* Collapsing whitespace will break mermaid support.
        Option descriptions here: https://github.com/kangax/html-minifier
        Informed by https://meiert.com/en/blog/html-minifier-config/ and 
        https://www.sumcumo.com/en/html-optimization-a-standard-config-for-htmlminifier */
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
  eleventyConfig.addPassthroughCopy({"src/assets/js": "assets/js"});
  eleventyConfig.addNunjucksFilter('formatDate', require("./src/assets/js/njk-date-filter"))
  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }

};