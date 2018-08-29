import React from 'react'
import { css } from 'react-emotion'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      backgroundColor: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link to="/" className={styles.link}>
        <h1 className={styles.logo}>
          BRANDON FERRER
          <sup className={styles.sup}>
            <span className={styles.tm}>TM</span>
          </sup>
        </h1>
      </Link>
    </div>
  </div>
)

const styles = {
  logo: css`
    font-family: Nunito Sans !important;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: white;
    margin: 0;
  `,
  link: css`
    text-decoration: none;
  `,
  tm: css`
    font-size: 0.5rem;
    font-weight: bold;
  `,
  sup: css`
    top: -0.5rem;
    left: 0.25rem;
  `,
}

export default Header
