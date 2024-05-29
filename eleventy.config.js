const { UserConfig } = require("@11ty/eleventy/src/UserConfig");

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootNotes = require("markdown-it-footnote");
const moment = require("moment");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");
const safeLinks = require("@sardine/eleventy-plugin-external-links");
const navigation = require("@11ty/eleventy-navigation");
const rss = require("@11ty/eleventy-plugin-rss");

const img = require("./eleventy.config.images");

/**
 * @param {UserConfig} eleventyConfig
 * @returns {void}
 */
module.exports = function (eleventyConfig) {
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(mdOptions)
    .use(markdownItAttrs)
    .use(markdownItFootNotes);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg}");

  eleventyConfig.addPlugin(img);

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
    width: 24,
    height: 24,
  });

  eleventyConfig.addPlugin(safeLinks);

  eleventyConfig.addPlugin(navigation);

  eleventyConfig.addPlugin(rss);

  // FILTERS

  const mdRender = new markdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function (rawString) {
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
    return `<span class="spoiler">${content}</span>`;
  });

  eleventyConfig.addShortcode("furi", (kanji, furi) => {
    return `<ruby><rb>${kanji}</rb><rp>(</rp><rt>${furi}</rt><rp>)</rp></ruby>`;
  });

  eleventyConfig.addPairedShortcode("lang", (content) => {
    return `<span lang="ja">${content}</span>`;
  });

  // COLLECTIONS

  eleventyConfig.addCollection("books", function (collection) {
    return collection.getFilteredByTag("books").reverse();
  });

  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
		return (data) => {
			// Always skip during non-watch/serve builds
			if (data.draft && !process.env.BUILD_DRAFTS) {
				return false;
			}

			return data.permalink;
		};
	});

  // PASSTHROUGH

  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/assets/etc");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
