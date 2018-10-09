import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'
import OverflowWrapper from '../wrappers/OverflowWrapper'

const BlogPage = ({ pageContext }) => {
  const { id, date, slug, title, excerpt, content, categories } = pageContext
  return (
    <Layout>
      <Link to="/blog">Back</Link>
      <h1>{title}</h1>
      <p>{date}</p>
      <OverflowWrapper>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </OverflowWrapper>
    </Layout>
  )
}

export default BlogPage
