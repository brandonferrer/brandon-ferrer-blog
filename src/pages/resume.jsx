import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { ContentWrapper, HeaderWrapper, PageHeader } from '../components';

const Resume = () => (
  <Layout>
    <Helmet>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      />
    </Helmet>
    <HeaderWrapper>
      <PageHeader text="Resume" />
    </HeaderWrapper>
    <ContentWrapper resume>
      <h4>
        I&apos;m too lazy to update my resume right now{' '}
        <span role="img">😪</span>
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
          <div
            class="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="horizontal"
            data-theme="light"
            data-vanity="brandonferrer"
          >
            <a
              class="LI-simple-link"
              href="https://www.linkedin.com/in/brandonferrer?trk=profile-badge"
              target="_blank"
            >
              Brandon Ferrer
            </a>
          </div>
        </GridColumn>
      </Grid>
    </ContentWrapper>
  </Layout>
);

export default Resume;
