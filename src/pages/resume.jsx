import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Document, pdfjs } from 'react-pdf';
import { Layout, LinkedInWidget } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader } from '../shared/typography';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
          <Document file="https://brandonferrer.blog/assets/profile.pdf" />
        </GridColumn>
      </Grid>
    </ContentWrapper>
  </Layout>
);

export default Resume;
