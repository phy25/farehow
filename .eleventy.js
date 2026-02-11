module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Add collection for agencies
  eleventyConfig.addCollection("agencies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/agencies/*.md").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });
  
  // Add default permalink pattern for agency pages
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: function(data) {
      // Only apply to agency pages that don't have a custom permalink
      if (data.page.inputPath && data.page.inputPath.includes("/agencies/") && !data.permalink) {
        const fileName = data.page.fileSlug;
        return `/${fileName}/`;
      }
      return data.permalink;
    }
  });
  
  // Return configuration object
  return {
    dir: {
      input: "src",
      output: "build",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
