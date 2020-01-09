import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const FlexWrapper = ({ children }) => (
  <div css={styles.flexWrapperStyles}>{children}</div>
)

export default FlexWrapper

const styles = {
  flexWrapperStyles: css`
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-flow: column;
  `,
}
