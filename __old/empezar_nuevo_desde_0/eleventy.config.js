export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('assets');
	return {
		dir: {
			input: 'src',
			output: '_site',
			includes: '_templates',
      data: '_data'
		}
	};
}
