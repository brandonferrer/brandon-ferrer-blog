import React from 'react';
import { Layout } from '../components';
import { PageHeader } from '../shared/typography';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';

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
