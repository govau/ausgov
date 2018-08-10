import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Campaign from "../components/Campaign";

import favicon from "../assets/favicon.ico";

import "./index.scss";

const description = "Australian Government information";

const Layout = ({ children, data }) => (
	<main className="au-grid">
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{
					name: "description",
					content: `${description}`,
				},
				{
					name: "keywords",
					content: `australia, ausgov, australia.gov.au, 
						australian information, australian government`,
				},
				{
					name: "og:title",
					content: `${data.site.siteMetadata.title}`,
				},
				{
					name: "og:url",
					content: `${data.site.siteMetadata.siteUrl}`,
				},
				{ name: "og:description", content: `${description}` },
				{
					name: "og:site_name",
					content: `${data.site.siteMetadata.title}`,
				},
				{ name: "twitter:site", content: "@ausgov" },
				{
					name: "twitter:title",
					content: `${data.site.siteMetadata.title}`,
				},
				{
					name: "twitter:description",
					content: `${description}`,
				},
				{
					name: "twitter:creator",
					content: "@dta",
				},
				{ name: "charset", content: "utf-8" },
				{ name: "lang", content: "en-AU" },
			]}
			link={[
				{
					rel: "shortcut icon",
					type: "image/x-icon",
					href: `${favicon}`,
				},
			]}
		/>
		<Header siteTitle={data.site.siteMetadata.title} />
		<div className="au-body">{children()}</div>
		<Campaign />
		<Footer />
	</main>
);

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
