const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = boundActionCreators;
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`./src/templates/project.js`);
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.error(result.errors);
        reject(result.errors);
        return;
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {} // additional data can be passed via context
        });
      });

      resolve();
    });
  });
};
