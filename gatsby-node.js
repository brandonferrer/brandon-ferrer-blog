/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                excerpt
                content
                categories {
                  id
                  name
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const postTemplate = path.resolve('./src/components/blog/BlogPage.jsx')
      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, edge => {
        const {
          id,
          date,
          slug,
          title,
          excerpt,
          content,
          categories,
        } = edge.node
        createPage({
          path: `blog/${edge.node.slug}/`,
          component: slash(postTemplate),
          context: {
            id,
            date,
            slug,
            title,
            excerpt,
            content,
            categories,
          },
        })
      })
      resolve()
    })
  })
}
