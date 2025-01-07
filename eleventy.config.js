
import { IdAttributePlugin } from "@11ty/eleventy";
import pluginNavigation from "@11ty/eleventy-navigation";

import postCSS from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";


const postCSSPlugins = [
	tailwindcss,
	autoprefixer
];

import ring from "./_data/ring.js";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default async function(config) {

	config.addLayoutAlias("base", "layouts/base.liquid");
	config.addLayoutAlias("page", "layouts/page.liquid");

	config.addPassthroughCopy({
		'_includes/assets/css/global.css': './global.css'
	});

	config.addPassthroughCopy({
		'_includes/assets/js/copy.js': './copy.js'
	});

	config.addPlugin(IdAttributePlugin);
	config.addPlugin(pluginNavigation);

	config.addWatchTarget("./tailwind.config.js");

};

export const config = {
	dir: {
    input: "_content",
    includes: "../_includes",
    data: "../_data",
    output: "_site",
	},
};