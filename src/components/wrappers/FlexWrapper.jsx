import React from 'react'
import { css } from 'react-emotion'

const FlexWrapper = ({ children }) => {
  const flexWrapperStyles = styles.flexWrapperStyles
  return <div className={flexWrapperStyles}>{children}</div>
}

export default FlexWrapper

const styles = {
  flexWrapperStyles: css`
    height: 98vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-flow: column;
  `,
}
