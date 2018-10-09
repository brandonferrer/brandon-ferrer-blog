import React from 'react'
import { Link } from 'gatsby'
import { Icon, Label } from 'semantic-ui-react'
import Layout from '../layout'
import OverflowWrapper from '../wrappers/OverflowWrapper'
import { PageHeader } from '../typography'

const BlogPage = ({ pageContext }) => {
  const { id, date, slug, title, excerpt, content, categories } = pageContext
  return (
    <Layout>
      <Link to="/blog">
        <Icon name="chevron circle left" />
        Back
      </Link>
      <PageHeader text={title} />

      <p style={{ textAlign: 'center' }}>{date}</p>

      <Label size="tiny">{categories[0].name}</Label>

      <OverflowWrapper>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ marginTop: '2rem' }}
        />
      </OverflowWrapper>
    </Layout>
  )
}

export default BlogPage
