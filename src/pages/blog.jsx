import React from 'react'
import { css } from 'react-emotion'
import { Item } from 'semantic-ui-react'
import { PageHeader, OverflowWrapper, BlogItem } from '../components'

const Blog = ({ data }) => {
  const postArray = data && data.allWordpressPost.edges
  return (
    <div className={styles.wrapper}>
      <PageHeader text="Blog" inQuotes />
      <OverflowWrapper>
        <div style={{ padding: '2rem' }}>
          {/* <Item.Group divided>
            {postArray.map(({ node }) => {
              console.log('node', node)
              return <BlogItem node={node} key={node.id} />
            })}
          </Item.Group> */}
          <h4>09/26/18</h4>
          <p>
            Sorry, blog is down. Breaking changes to a Gatsby/Wordpress plugin
            broke it :(
          </p>
          <p>Check back soon!</p>
        </div>
      </OverflowWrapper>
    </div>
  )
}

export default Blog

const styles = {
  wrapper: css`
    padding: 2rem 0;
    height: 98vh;
  `,
}
