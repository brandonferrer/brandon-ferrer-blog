import React from 'react'
import { css } from 'react-emotion'

const ContentWrapper = ({ children, blog, projects, index, lifestyle }) => {
  let contentWrapperStyles
  if (index) {
    contentWrapperStyles = styles.contentWrapperIndex
  } else {
    contentWrapperStyles =
      blog || projects || lifestyle
        ? styles.contentWrapperBlog
        : styles.contentWrapper
  }
  return <div className={contentWrapperStyles}>{children}</div>
}

export default ContentWrapper

const styles = {
  contentWrapper: css`
    width: 100%;
    height: 60%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 1rem;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperIndex: css`
    width: 100%;
    height: 75%;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    padding: 1rem;
  `,
  contentWrapperBlog: css`
    width: 100%;
    height: 60%;
    overflow-y: auto;
    padding: 1rem;
    -webkit-overflow-scrolling: touch;
  `,
}
