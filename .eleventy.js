const Image = require('@11ty/eleventy-img')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets")

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'excerpt',
    excerpt_separator: "<!-- 文摘 -->"
  })

  eleventyConfig.addLiquidShortcode('svg', async (src) => {
    let metadata = await Image(src, {
      formats: ['svg'],
      dryRun: true,
    })
    return metadata.svg[0].buffer.toString()
  })
}
