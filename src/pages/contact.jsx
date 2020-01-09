import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { PageHeader } from '../components'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div css={styles.wrapper}>
      <PageHeader text="Say Hey" />
    </div>
  </Layout>
)

export default Contact

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
}
