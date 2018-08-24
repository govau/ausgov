import React from "react";
import Helmet from "react-helmet";

import "./content-page.scss";

export default function Template({ data }) {
	const post = data.markdownRemark;

	return (
		<div className="content-page">
			<Helmet
				title={`${post.frontmatter.title} | ${
					data.site.siteMetadata.title
				}`}
			/>

			<div className="container au-body">
				<h1>{post.frontmatter.title}</h1>
				<p dangerouslySetInnerHTML={{ __html: post.html }} />
				<br />
			</div>
		</div>
	);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}

		site {
			siteMetadata {
				title
			}
		}
	}
`;
