import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby' 

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="container project">
      <div className="section">
        <Helmet title={post.frontmatter.title || ""} />
        <div className="project-header">
          <h1 className="title">{post.frontmatter.title}</h1>
          <h2 className="subtitle">{post.frontmatter.subtitle}</h2>
        </div>
        <div
          className="project-content content is-medium"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
      }
    }
  }
`;
