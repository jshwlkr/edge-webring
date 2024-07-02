const pluginLightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
const pluginTinyCSS = require('@sardine/eleventy-plugin-tinycss');
const pluginSafeLinks = require('@sardine/eleventy-plugin-external-links');

/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = function(config) {

  config.setQuietMode(true);

  config.addPlugin(pluginLightningCSS);
  config.addPlugin(pluginTinyCSS);
  config.addPlugin(pluginSafeLinks);

  config.addLayoutAlias("base", "layouts/base.liquid");

  return {
    dir: {
      input: "_content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
