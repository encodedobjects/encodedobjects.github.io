import React from "react";
import Link from "gatsby-link";

// const IndexPage = () => (
//   <div className="container">
//     <section className="section">
//       <div className="container">
//         <h1 className="title">Hello World</h1>
//         <p className="subtitle">
//           My first website with <strong>Bulma</strong>!
//         </p>
//       </div>
//     </section>
//   </div>
// );

// export default IndexPage;

export default function IndexPage(props) {
  const projects = props.data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <section className="section">
        <div className="columns">
          {projects.map(project => {
            const fm = project.node.frontmatter;
            const sharpImage = fm.thumbnail.childImageSharp;
            return (
              <div className="column is-one-third">
                <Link to={fm.path}>
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
            path
            date(formatString: "MM/DD/YY")
          }
        }
      }
    }
  }
`;
