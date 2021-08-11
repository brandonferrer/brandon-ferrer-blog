import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Layout, LinkedInWidget } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader } from '../shared/typography';

const Resume = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Resume" />
    </HeaderWrapper>
    <ContentWrapper resume>
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
          {/* <Document file="https://brandonferrer.blog/assets/profile.pdf" /> */}
          <h1>Resume</h1>
        </GridColumn>
      </Grid>
    </ContentWrapper>
  </Layout>
);

export default Resume;
