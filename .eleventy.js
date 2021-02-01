module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(["liquid"]);

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts",
		},
	};
};
