import React from 'react'
import { css } from 'react-emotion'

const Dj = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>Dj Life.</h1>
  </div>
)

const styles = {
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: black;
    padding-top: 2rem;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
}

export default Dj
