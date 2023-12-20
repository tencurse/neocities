const markdownIt = require("markdown-it");
const moment = require("moment");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

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

  eleventyConfig.addPlugin(lucideIcons, {
    "width": 16,
    "height": 16
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
    const star = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    const halfStar = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-half"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"/></svg>`;

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

  eleventyConfig.addPairedShortcode("spoiler", (content) => {
    return `<span class="spoiler" onclick="revealSpoiler(this)">${content}</span>`;
  })

  // COLLECTIONS

  eleventyConfig.addCollection("books", function (collection) {
    return collection.getFilteredByTag("books").reverse();
  });

  // PASSTHROUGH

  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/js");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};