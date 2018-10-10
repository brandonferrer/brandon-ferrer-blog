import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Icon, Label } from 'semantic-ui-react'
import Layout from '../Layout'
import OverflowWrapper from '../wrappers/OverflowWrapper'
import { BlogPageHeader } from '../typography'

const BlogPage = ({ pageContext }) => {
  const { id, date, slug, title, excerpt, content, categories } = pageContext
  return (
    <Layout>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={excerpt} />
        <meta name="author" content="Brandon Ferrer" />
        <meta
          name="keywords"
          content={`${title}, brandon, brandon ferrer, san diego, california, blog, vlog, travel, food, technology, fashion`}
        />
        <title>{title} | brandonferrer.com | "BLOG"</title>
      </Helmet>
      <Link to="/blog">
        <Icon name="chevron circle left" />
        Back
      </Link>
      <BlogPageHeader text={title} />

      <p style={{ textAlign: 'center' }}>{date}</p>

      <Label size="tiny" style={{ marginBottom: '0.5rem' }}>
        {categories[0].name}
      </Label>

      <OverflowWrapper>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ marginTop: '1rem', padding: '1.5rem' }}
        />
      </OverflowWrapper>
    </Layout>
  )
}

export default BlogPage
