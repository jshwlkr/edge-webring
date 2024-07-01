
/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = function(config) {

  config.setQuietMode(true);

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
