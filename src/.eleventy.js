module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/md");
  eleventyConfig.addPassthroughCopy("src/media");
  //   if you want to add more folders just include here
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
