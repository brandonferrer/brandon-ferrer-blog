import React from 'react'
import { css } from 'react-emotion'

const OverflowWrapper = ({ children }) => (
  <div className={styles.overflowWrapper}>{children}</div>
)

export default OverflowWrapper

const styles = {
  overflowWrapper: css`
    overflow: auto;
    max-height: 70%;
    width: 100%;
  `,
}
