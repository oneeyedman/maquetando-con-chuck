module.exports = function(config) {
	return {
		dir: {
      input: '_src',
      output: 'dist',
      includes: '_templates',
      data: "_data",
    },
    templateFormats: ['njk', 'md'],
    htmltemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
	}
}
