import React from 'React'
import { css, cx } from 'react-emotion'

export const PageHeader = ({ text, inQuotes }) => {
  const headline = inQuotes ? `"${text}"` : `${text}.`
  const inQuoteStyles = inQuotes ? styles.inQuotes : undefined
  return <h1 className={cx(styles.header, inQuoteStyles)}>{headline}</h1>
}

export const SubHeader = ({ text }) => (
  <h1 className={cx(styles.subHeader, styles.inQuotes)}>"{text}"</h1>
)

const styles = {
  inQuotes: css`
    text-transform: uppercase;
  `,
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: black;
    padding-top: 2rem;
    text-align: center;
  `,
  subHeader: css`
    color: black;
    letter-spacing: 1.2px;
    @media (max-width: 500px) {
      display: none;
    }
  `,
}
