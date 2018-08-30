import React from 'react'
import { css } from 'react-emotion'

const Blog = ({data}) => {
  console.log('data from blog query', data)
  return (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>"BLOG"</h1>
  </div>
)}

const styles = {
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: black;
    padding-top: 2rem;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
}

export const getAllPost = graphql`
query getAllPost {
  allWordpressPost {
    edges {
      node {
        id
        slug
        title
        date
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

export default Blog
