module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Add collection for agencies
  eleventyConfig.addCollection("agencies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/agencies/*.md").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });
  
  // Return configuration object
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
