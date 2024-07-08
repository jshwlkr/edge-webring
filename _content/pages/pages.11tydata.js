
module.exports = {
  layout: "base",
  class: "page",
  permalink: "/{{ title | slugify }}/index.html",
  eleventyImport: {
    collections: ["css"],
  },
};
