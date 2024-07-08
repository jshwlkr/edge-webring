const pluginLightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
const pluginTinyCSS = require('@sardine/eleventy-plugin-tinycss');
const pluginSafeLinks = require('@sardine/eleventy-plugin-external-links');
const pluginSVGSprite = require("eleventy-plugin-svg-sprite");

const terser = require("terser");

/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = function(config) {

  config.setQuietMode(true);

  config.addPlugin(pluginLightningCSS);
  config.addPlugin(pluginTinyCSS);
  config.addPlugin(pluginSafeLinks);
  config.addPlugin(pluginSVGSprite, {
    path: "./_assets/icons",
    globalClasses: "icon",
    // https://github.com/FortAwesome/Font-Awesome
  });

  config.addLayoutAlias("base", "layouts/base.liquid");

  config.addWatchTarget(".browserslistrc");
  config.addWatchTarget("./_assets/**/*");

  config.addTemplateFormats("js");

  config.addExtension("js", {
    outputFileExtension: "js",
    compile: function (contents, inputPath) {
      
      if (inputPath.endsWith(`11tydata.js`)) return;
      
      return async (data) => {
        let ret = await terser.minify(contents);
        return ret.code;
      };
    },
  });

  return {
    dir: {
      input: "_content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
