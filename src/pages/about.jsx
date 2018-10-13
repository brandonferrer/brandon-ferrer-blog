import React from 'react'
import { css } from 'react-emotion'
import { PageHeader } from '../components'
import Layout from '../components/layout'
import { ContentWrapper, HeaderWrapper } from '../components'

const About = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="About B" />
    </HeaderWrapper>
    <ContentWrapper>
      <p>Hey, I'm Brandon from California.</p>
    </ContentWrapper>
  </Layout>
)

export default About
