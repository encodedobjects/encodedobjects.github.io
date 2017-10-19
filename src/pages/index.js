import React from "react";
import Link from "gatsby-link";

export default function IndexPage(props) {
  const projects = props.data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <section className="section">
        <div className="columns">
          {projects.map(project => {
            const fm = project.node.frontmatter;
            const path = project.node.fields.slug;
            const sharpImage = fm.thumbnail.childImageSharp;
            return (
              <div className="column is-one-third">
                <Link to={path}>
                  <figure style={{ textAlign: "center" }}>
                    <img
                      src={sharpImage.resolutions.src}
                      srcSet={sharpImage.resolutions.srcSet}
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
      filter: { frontmatter: { draft: { ne: true } } }
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
                resolutions(width: 448, height: 252, cropFocus: ATTENTION) {
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
