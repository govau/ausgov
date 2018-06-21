module.exports = {
	siteMetadata: {
		title: "australia.gov.au",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		"gatsby-plugin-catch-links",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		"gatsby-transformer-remark",
	],
};
