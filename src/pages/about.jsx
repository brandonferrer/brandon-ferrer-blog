import React from 'react';
import Layout from '../components/layout';
import { ContentWrapper, HeaderWrapper, PageHeader } from '../components';

const About = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="About B" />
    </HeaderWrapper>
    <ContentWrapper>
      <p>Hey, I&apos;m Brandon from California.</p>
    </ContentWrapper>
  </Layout>
);

export default About;
