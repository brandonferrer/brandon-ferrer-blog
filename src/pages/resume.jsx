import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Layout, LinkedInWidget } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader } from '../shared/typography';

const Resume = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Résumé" />
    </HeaderWrapper>
    <ContentWrapper resume>
      <p style={{ textAlign: 'center', padding: '1rem' }}>
        I'm too lazy to update my resume right now &nbsp;
        <span role="img" aria-label="Tired Emoji">
          😪
        </span>
      </p>
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
