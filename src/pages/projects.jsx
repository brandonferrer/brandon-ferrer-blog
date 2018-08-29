import React from 'react'
import { css } from 'react-emotion'

const Projects = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>Dev Projects.</h1>
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

export default Projects