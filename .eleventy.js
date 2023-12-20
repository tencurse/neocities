const markdownIt = require("markdown-it");
const moment = require("moment");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  // PLUGINS

  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "\n",
    preAttributes: {
      tabindex: 0,

      // Added in 4.1.0 you can use callback functions too
      "data-language": function ({ language, content, options }) {
        return language;
      },
    },
  });

  // FILTERS

  const mdRender = new markdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
    return mdRender.render(rawString);
  });

  eleventyConfig.addFilter("toUTC", function (value) {
    const date = moment(new Date(value)).utc().format("MMM DD, YYYY");
    return date;
  });

  // SHORTCODES

  eleventyConfig.addShortcode("renderStar", (rating) => {
    const star = "★";
    const halfStar = "⯨";

    let stars = "";

    while (rating-- > 0) {
      if (rating !== 1.5) {
        stars += star;
      }
    }

    if (rating % 1 !== 0) {
      stars += halfStar;
    }

    return stars;
  });

  eleventyConfig.addShortcode("aside", (type, message) => {
    return `<aside class="${type}">${message}</aside>`;
  });

  // PASSTHROUGH

  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};