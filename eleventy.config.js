const { IdAttributePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootNotes = require("markdown-it-footnote");
const moment = require("moment");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");
const safeLinks = require("@sardine/eleventy-plugin-external-links");
const navigation = require("@11ty/eleventy-navigation");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const path = require("path");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Drafts, see also _data/eleventyDataSchema.js
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // PASSTHROUGH
  eleventyConfig.addPassthroughCopy("./src/assets/css")
    .addPassthroughCopy("./src/assets/img")
    .addPassthroughCopy("./src/assets/fonts")
    .addPassthroughCopy("./src/assets/js")
    .addPassthroughCopy("./src/assets/etc");

  // Watch images for the image pipeline.
  eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpg,jpeg,gif}");

  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(mdOptions)
    .use(markdownItAttrs)
    .use(markdownItFootNotes);
  eleventyConfig.setLibrary("md", markdownLib);

  // PLUGINS

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: 'html',
    // optional, output image formats
    formats: ['webp'],
    // optional, output image widths
    widths: ['auto'],
    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
        loading: 'lazy',
        sizes: '100vw',
        decoding: 'async',
    },
    sharpOptions: {
      animated: true,
    },
});

  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "\n",
    preAttributes: {
      tabindex: 0,
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
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "feed.xml",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "karma",
      subtitle: "This is a longer description about your blog.",
      base: "https://karuma.me/",
      author: {
        name: "Ten",
        email: "10kph@proton.me"
      }
    }
  });

  // FILTERS
  eleventyConfig.addPlugin(IdAttributePlugin, {
    // by default we use Eleventy’s built-in `slugify` filter:
    // slugify: eleventyConfig.getFilter("slugify"),
    // selector: "h1,h2,h3,h4,h5,h6", // default
  });

  const mdRender = new markdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function (rawString) {
    return mdRender.render(rawString);
  });

  eleventyConfig.addFilter("toUTC", function (value) {
    const date = moment(new Date(value)).utc().format("MMM DD, YYYY");
    return date;
  });

  eleventyConfig.addShortcode("image", async function (src, alt, widths = ["auto"], sizes = "") {
    let formats = ["webp"];
    const input = "./src" + src;

    let metadata = await Image(input, {
      widths,
      formats,
      outputDir: path.join(eleventyConfig.dir.output, "./assets/img"),
      urlPath: "/assets/img/"
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
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

  return {
    dir: {
      input: "src",
      output: "public",
    }
  }
}