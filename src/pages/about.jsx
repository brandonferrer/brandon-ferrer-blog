import React from 'react';
import { Layout } from '../components';
import { PageHeader } from '../shared/typography';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';

const About = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="About B" />
    </HeaderWrapper>
    <ContentWrapper resume>
      <p style={{ textAlign: 'center', padding: '5rem', fontSize: '24px' }}>
        Hey, I'm Brandon. I'm an ex-DJ, part-time software engineer, and
        full-time cyclist and golfer. I'm into tech, travel, and streetwear.
      </p>
    </ContentWrapper>
  </Layout>
);

export default About;
