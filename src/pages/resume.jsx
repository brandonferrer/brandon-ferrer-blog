import React from 'react'
import { css } from 'react-emotion'
import { PageHeader } from '../components'

const Resume = () => (
  <div className={styles.wrapper}>
    <PageHeader text="Resume" />
  </div>
)

export default Resume

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
}
