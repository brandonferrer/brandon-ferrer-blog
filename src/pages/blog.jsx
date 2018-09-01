import React from 'react'
import { css } from 'react-emotion'
import { PageHeader, OverflowWrapper } from '../components'

const Blog = ({ data }) => {
  const postArray = data && data.allWordpressPost.edges
  return (
    <div className={styles.wrapper}>
      <PageHeader text="Blog" inQuotes />
      <OverflowWrapper>
        {postArray.map(({ node }) => {
          console.log('node', node)
          return (
            <div key={node.id} style={{ padding: '2rem 1rem' }}>
              <h3>{node.title}</h3>
              <p>{node.date}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <p style={{ paddingTop: '1rem' }}>
                Category: {node.categories[0].name}
              </p>
            </div>
          )
        })}
      </OverflowWrapper>
    </div>
  )
}

export default Blog

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
}
