import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import Layout from '../components/layout';
import {
  ContentWrapper,
  HeaderWrapper,
  PageHeader,
  LinkedInWidget,
} from '../components';

const Resume = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Resume" />
    </HeaderWrapper>
    <ContentWrapper resume>
      <h4 style={{ textAlign: 'center', padding: '1rem' }}>
        Nevermind, I&apos;m too lazy to update my resume right now &nbsp;
        <span role="img" aria-label="Tired Emoji">
          😪
        </span>
      </h4>
      <Grid
        container
        stackable
        verticalAlign="middle"
        columns={1}
        centered
        style={{ marginTop: 0 }}
      >
        <GridColumn
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '350px',
          }}
        >
          <LinkedInWidget />
        </GridColumn>
      </Grid>
    </ContentWrapper>
  </Layout>
);

export default Resume;
