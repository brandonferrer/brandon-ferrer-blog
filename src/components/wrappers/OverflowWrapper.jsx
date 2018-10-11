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
    max-height: 500px;
    width: 100%;
  `,
  overflowWrapperBlog: css`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 500px;
    width: 100%;
    @media (max-width: 500px) {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      max-height: 480px;
      width: 100%;
    }
  `,
}

// import React from 'react'
// import { css } from 'react-emotion'

// const OverflowWrapper = ({ children, blog }) => {
//   const overflowWrapperStyles = blog
//     ? styles.overflowWrapperBlog
//     : styles.overflowWrapper
//   return <div className={overflowWrapperStyles}>{children}</div>
// }

// export default OverflowWrapper

// const styles = {
//   overflowWrapper: css`
//     overflow: auto;
//     -webkit-overflow-scrolling: touch;
//     height: 70%;
//     width: 100%;
//   `,
//   overflowWrapperBlog: css`
//     overflow: auto;
//     -webkit-overflow-scrolling: touch;
//     height: 70%;
//     width: 100%;
//   `,
// }
