module.exports = function(config) {
	config.addPassthroughCopy({'_src/assets/css': '/css'});
	config.addPassthroughCopy({'_src/assets/img': '/img'});

	config.addCollection('blog', collection => {
		return collection
			.getFilteredByGlob('_src/blog/*.md')
			.filter(post => post.data.draft === false);
		});

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
