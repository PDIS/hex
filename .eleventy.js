module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets")

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "!---" // default is "---", in conflict with markdown
  })
}
