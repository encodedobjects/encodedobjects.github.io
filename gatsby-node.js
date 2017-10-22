const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = boundActionCreators;
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    const type = slug.startsWith("/projects") ? "project" : "post";
    createNodeField({ node, name: "slug", value: slug });
    createNodeField({ node, name: "type", value: type });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                type
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
        const template =
          node.fields.type === "project"
            ? path.resolve(`./src/templates/project.js`)
            : path.resolve(`./src/templates/post.js`);

        createPage({
          path: node.fields.slug,
          component: template,
          context: {} // additional data can be passed via context
        });
      });

      resolve();
    });
  });
};
