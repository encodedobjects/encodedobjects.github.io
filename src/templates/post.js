import React from "react";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="container post">
      <div className="section">
        <Helmet title={post.frontmatter.title || ""} />
        <div className="post-header">
          <h1 className="title">{post.frontmatter.title}</h1>
          <h2 className="date">{post.frontmatter.date}</h2>
        </div>
        <div
          className="post-content content is-medium"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
