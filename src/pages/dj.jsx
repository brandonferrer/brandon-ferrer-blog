import React from 'react'
import { css } from 'react-emotion'
import { PageHeader } from '../components'

const Dj = () => (
  <div className={styles.wrapper}>
    <PageHeader text="Dj Life" />
  </div>
)

export default Dj

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
}
