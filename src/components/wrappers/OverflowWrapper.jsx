import React from 'react'
import { css } from 'react-emotion'

const OverflowWrapper = ({ children }) => (
  <div className={styles.overflowWrapper}>{children}</div>
)

export default OverflowWrapper

const styles = {
  overflowWrapper: css`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 510px;
    width: 100%;
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
