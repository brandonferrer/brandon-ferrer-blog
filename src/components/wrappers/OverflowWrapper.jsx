import React from 'react'
import { css } from 'react-emotion'

const OverflowWrapper = ({ children, blog }) => {
  const overflowWrapperStyles = blog
    ? styles.overflowWrapperBlog
    : styles.overflowWrapper
  return <div className={overflowWrapperStyles}>{children}</div>
}

export default OverflowWrapper

const styles = {
  overflowWrapper: css`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    height: 80%;
    width: 100%;
  `,
  overflowWrapperBlog: css`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    height: 70%;
    width: 100%;
  `,
}
