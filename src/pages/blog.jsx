import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'
import { Item } from 'semantic-ui-react'
import { PageHeader, OverflowWrapper, BlogItem } from '../components'
import Layout from '../components/Layout'

const Blog = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPost(sort: { fields: [date], order: DESC }) {
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
    `}
    render={data => (
      <Layout>
        <div className={styles.wrapper}>
          <PageHeader text="Blog" inQuotes />
          <OverflowWrapper>
            <div style={{ padding: '2rem' }}>
              <Item.Group divided>
                {data &&
                  data.allWordpressPost.edges.map(({ node }) => {
                    return <BlogItem node={node} key={node.id} />
                  })}
              </Item.Group>
            </div>
          </OverflowWrapper>
        </div>
      </Layout>
    )}
  />
)

export default Blog

const styles = {
  wrapper: css`
    padding: 2rem 0;
    height: 98vh;
  `,
}
