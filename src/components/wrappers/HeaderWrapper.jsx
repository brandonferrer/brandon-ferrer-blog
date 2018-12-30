import React from 'react'
import { css } from 'react-emotion'

const HeaderWrapper = ({ children }) => (
  <div className={styles.headerWrapper}>{children}</div>
)

export default HeaderWrapper

const styles = {
  headerWrapper: css`
    padding: 0 0 1rem 0;
    width: 100%;
    min-height: 100px;
    }
  `,
}
