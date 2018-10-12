import React from 'react'
import { css } from 'react-emotion'

const HeaderWrapper = ({ children }) => (
  <div className={styles.headerWrapper}>{children}</div>
)

export default HeaderWrapper

const styles = {
  headerWrapper: css`
    padding: 3rem 1rem 1rem 1rem;
    width: 100%;
    min-height: 200px;
    @media (max-width: 500px) {
      padding: 2rem 1rem 1rem 1rem;
      width: 100%;
      min-height: 100px;
    }
  `,
}
