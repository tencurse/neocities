// src: https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.images.js

const { UserConfig } = require("@11ty/eleventy/src/UserConfig");

const path = require("path");
const img = require("@11ty/eleventy-img");

function relativeToInputPath(inputPath, relativeFilePath) {
  let split = inputPath.split("/");
  split.pop();

  return path.resolve(split.join(path.sep), relativeFilePath);
}

function isFullUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @param {UserConfig} eleventyConfig
 * @returns {void}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode(
    "image",
    async function imageShortcode(src, alt, widths, sizes) {
      let formats = ["webp", "auto"];
      let input;

      if (isFullUrl(src)) {
        input = src;
      } else {
        input = relativeToInputPath(this.page.inputPath, src);
      }

      let metadata = await img(input, {
        widths: widths || ["auto"],
        formats,
        outputDir: path.join(eleventyConfig.dir.output, "img"),
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      return img.generateHTML(metadata, imageAttributes);
    }
  );
};
