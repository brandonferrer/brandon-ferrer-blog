import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const YouTube = () => (
  <>
    <Helmet>
      <meta
        http-equiv="refresh"
        content="4;url=https://www.youtube.com/user/bbbee23/"
      />
    </Helmet>
    <Layout>
      <h1>You'll be redirected to my YouTube channel.</h1>
      <h3>
        Don't forget to subscribe <span>🙃</span>
      </h3>
    </Layout>
  </>
)

export default YouTube