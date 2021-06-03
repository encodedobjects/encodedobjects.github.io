import React from "react";
import Link from "gatsby-link";
import { graphql } from 'gatsby' 

export default function IndexPage(props) {
  const projects = props.data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <section className="section">
        <div className="columns is-multiline is-centered">
          {projects.map(project => {
            const fm = project.node.frontmatter;
            const path = project.node.fields.slug;
            const sharpImage = fm.thumbnail.childImageSharp;
            const title = fm.title;
            return (
              <div className="column is-one-third">
                <Link to={path}>
                  <figure style={{ textAlign: "center" }}>
                    <img
                      src={sharpImage.fixed.src}
                      srcSet={sharpImage.fixed.srcSet}
                      alt={title}
                    />
                    <figcaption>{fm.title}</figcaption>
                  </figure>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { type: { eq: "project" } }
        frontmatter: { draft: { eq: false }, unlisted: { eq: false } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fixed(width: 448, height: 252, cropFocus: ATTENTION) {
                  src
                  srcSet
                }
              }
            }
            date(formatString: "MM/DD/YY")
          }
        }
      }
    }
  }
`;
