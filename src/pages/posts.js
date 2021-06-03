import React from "react";
// import { graphql } from 'gatsby' 

export default function Posts(props) {
  // const posts = props.data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <section className="section">
        <div className="content is-medium">
          <h1>Posts</h1>
          <p>Coming soon!</p>
        </div>

        {/* {posts.map(post => {
          const fm = post.node.frontmatter;
          const path = post.node.fields.slug;
          const sharpImage = fm.thumbnail.childImageSharp;
          return (
            <div className="columns">
              <div className="column is-one-fifth">
                <Link to={path}>
                  <figure style={{ textAlign: "center" }}>
                    <figcaption>{fm.title}</figcaption>
                    <img
                      src={sharpImage.resolutions.src}
                      srcSet={sharpImage.resolutions.srcSet}
                    />
                  </figure>
                </Link>
              </div>
              <div className="column is-one-fifth">{post.node.excerpt}</div>
            </div>
          );
        })} */}
      </section>
    </div>
  );
}

// export const query = graphql`
//   query PostQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: {
//         fields: { type: { eq: "post" } }
//         frontmatter: { draft: { eq: false } }
//       }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             thumbnail {
//               childImageSharp {
//                 fixed(width: 448, height: 252, cropFocus: ATTENTION) {
//                   src
//                   srcSet
//                 }
//               }
//             }
//             date(formatString: "MM/DD/YY")
//           }
//         }
//       }
//     }
//   }
// `;
