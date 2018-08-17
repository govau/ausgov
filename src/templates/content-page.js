import React from "react";

import "./content-page.scss";

export default function Template({ data }) {
	const post = data.markdownRemark;

	return (
		<div className="content-page">
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
	}
`;
