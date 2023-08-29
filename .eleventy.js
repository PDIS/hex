module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets")

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'excerpt',
    excerpt_separator: "<!-- 文摘 -->"
  })

}
