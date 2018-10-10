import React from 'react'
import { Link } from 'gatsby'
import { css } from 'react-emotion'
import Helmet from 'react-helmet'
import { Icon, Label } from 'semantic-ui-react'
import Layout from '../layout'
import OverflowWrapper from '../wrappers/OverflowWrapper'
import { BlogPageHeader } from '../typography'

const BlogPage = ({ pageContext }) => {
  const { date, title, excerpt, content, categories } = pageContext // id, slug available
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

      <p className={styles.date}>{date}</p>

      <Label className={styles.categoryLabel} size="tiny">
        {categories[0].name}
      </Label>
      <OverflowWrapper>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.contentWrapper}
        />
      </OverflowWrapper>
    </Layout>
  )
}

export default BlogPage

const styles = {
  date: css`
    text-align: center;
    @media (max-width: 500px) {
      font-size: 0.75rem;
    }
  `,
  contentWrapper: css`
    margin-top: 1rem;
    padding: 1.5rem;
    @media (max-width: 500px) {
      margin-top: 0.5rem;
      padding: 0.75rem 0.75rem 1.5rem 0.75rem;
    }
  `,
  categoryLabel: css`
    margin-bottom: 0.5rem;
  `,
}
