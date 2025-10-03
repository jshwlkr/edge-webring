
import { IdAttributePlugin } from "@11ty/eleventy";
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginIcons from 'eleventy-plugin-icons';
import pluginTinyCSS from '@sardine/eleventy-plugin-tinycss';
import pluginSyntax from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginSitemap from "@quasibit/eleventy-plugin-sitemap";
import pluginSafeLinks from "@sardine/eleventy-plugin-external-links";
import CleanCSS from "clean-css";
import { optimize, loadConfig } from 'svgo';

import ring from "./_data/ring.js";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default async function(config) {

	config.addLayoutAlias("base", "layouts/base.liquid");
	config.addLayoutAlias("page", "layouts/page.liquid");

	config.addPassthroughCopy({
		'_includes/assets/fonts/libre-franklin-latin-wght-normal.woff2':'libre-franklin-latin-wght-normal.woff2',
		'_includes/assets/fonts/noto-serif-latin-wght-normal.woff2':'noto-serif-latin-wght-normal.woff2',
		'_includes/assets/css/colors.css':'colors.css',
		'_includes/assets/css/reset.css':'reset.css',
		'_includes/assets/css/layout.css':'layout.css',
	});

	config.addPlugin(IdAttributePlugin);
	config.addPlugin(pluginNavigation);
	config.addPlugin(pluginSafeLinks);
	

		config.addPlugin(pluginSitemap, {
			sitemap: {
			hostname: ring.url,
			},
		});

	config.addPlugin(pluginSyntax);


	config.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	if (ring.env !== "build") {
		config.addPlugin(pluginTinyCSS);

		config.addPlugin(pluginIcons, {
 		sources: [
			{ name: 'simple', path: 'node_modules/simple-icons/icons' },
			{ name: 'feather', path: 'node_modules/feather-icons/dist/icons' },
			{ name: 'lucide', path: 'node_modules/lucide-static/icons' },
		],
		icon: {
			class: (name, source) => {
				return 'icon ' + source + '-' + name;
			},
			transform: async (svg) => {
				try {
					const result = optimize(svg);
					return result.data;
				} catch (error) {
					throw new Error('Error optimizing content with SVGO.');
				}

			},
		}
		
	});

	} else {
		config.addPlugin(pluginIcons, {
			sources: [
				{ name: 'simple', path: 'node_modules/simple-icons/icons' },
				{ name: 'feather', path: 'node_modules/feather-icons/dist/icons' },
				{ name: 'lucide', path: 'node_modules/lucide-static/icons' },
			],
			icon: {
				class: (name, source) => {
					return 'icon ' + source + '-' + name;
				}
			}
		});
	}

	config.addWatchTarget("**/*.css");

};

export const config = {
	dir: {
    input: "_content",
    includes: "../_includes",
    data: "../_data",
    output: "_site",
	},
};