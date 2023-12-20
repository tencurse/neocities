const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  // PASSTHROUGH

  eleventyConfig.addPassthroughCopy("./src/assets/css");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};