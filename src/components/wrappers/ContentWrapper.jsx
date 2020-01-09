import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ContentWrapper = ({
  children,
  blog,
  projects,
  index,
  lifestyle,
  blogPage,
}) => {
  let contentWrapperStyles
  if (index) {
    contentWrapperStyles = styles.contentWrapperIndex
  } else if (blogPage) {
    contentWrapperStyles = styles.contentWrapperBlogPage
  } else {
    contentWrapperStyles =
      blog || projects || lifestyle
        ? styles.contentWrapperBlog
        : styles.contentWrapper
  }
  return <div css={contentWrapperStyles}>{children}</div>
}

export default ContentWrapper

const styles = {
  contentWrapper: css`
    width: 100%;
    height: 60%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 0;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperIndex: css`
    width: 100%;
    height: 75%;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 1rem;
  `,
  contentWrapperBlog: css`
    background-color: #fff !important;
    width: 100%;
    height: 60%;
    overflow-y: auto;
    border-radius: 8px;
    padding: 1.5rem;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperBlogPage: css`
    background-color: #fff !important;
    width: 100%;
    height: 55%;
    overflow-y: auto;
    border-radius: 8px;
    padding: 1rem;
    -webkit-overflow-scrolling: touch;
  `,
}
