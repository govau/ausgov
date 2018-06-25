module.exports = {
	siteMetadata: {
		title: "australia.gov.au",
		siteUrl: `https://ausgov.apps.y.cld.gov.au/`,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		"gatsby-transformer-remark",
		"gatsby-plugin-catch-links",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "ausgov.apps.y.cld.gov.au",
				sitemap: "https://ausgov.apps.y.cld.gov.au/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
	],
};
