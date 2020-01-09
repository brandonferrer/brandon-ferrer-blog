import React from 'react'
import { Link } from 'gatsby'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Helmet from 'react-helmet'
import { Icon, Label } from 'semantic-ui-react'
import { BlogPageHeader } from '../typography'
import { ContentWrapper, HeaderWrapper, Layout } from '../../components'

const BlogPage = ({ pageContext }) => {
  const { date, title, excerpt, content, categories } = pageContext
  return (
    <Layout>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={excerpt} />
        <meta name="author" content="Brandon Ferrer" />
        <meta
          name="keywords"
          content={`${title}, brandon, brandon ferrer, san diego, california, blog, vlog, travel, food, technology, fashion, ${excerpt}`}
        />
        <title>{title} | brandonferrer.com | "BLOG"</title>
      </Helmet>
      <HeaderWrapper>
        <div css={styles.backButtonWrapper}>
          <Link to="/blog">
            <Icon name="chevron circle left" style={{ color: '#000' }} />
            <span style={{ color: 'black' }}>Back</span>
          </Link>
        </div>
        <BlogPageHeader text={title} />
        <p css={styles.date}>{date}</p>
        <Label size="tiny">{categories[0].name}</Label>
      </HeaderWrapper>
      <ContentWrapper blogPage>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ContentWrapper>
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
  backButtonWrapper: css`
    margin-bottom: 1rem;
  `,
}
