import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";

import favicon from "../assets/favicon.ico";

import "./index.scss";
import "../../pancake/css/pancake.min.css";

const Layout = ({ children, data }) => (
	<main class="au-grid">
		<div className="app-container">
			<Helmet
				title={data.site.siteMetadata.title}
				meta={[
					{ name: "description", content: "Australian information" },
					{
						name: "keywords",
						content: `australia, ausgov, australia.gov.au, 
						australian information, australian government`,
					},
					{
						name: "og:title",
						content: `${data.site.siteMetadata.title}`,
					},
					{ name: "og:url", content: "https://ausgov.gov.au" },
					{ name: "charset", content: "utf-8" },
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
			<br />
			<Footer />
		</div>
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
