const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        wpgraphql {
          posts {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const posts = result.data.wpgraphql.posts.edges.map(edge => edge.node);

  posts.map(post => {
    createPage({
      path: post.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        postId: post.id,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};
