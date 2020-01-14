import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Layout } from '../components';
import { PageHeader } from '../shared/typography';
import { HeaderWrapper, ContentWrapper } from '../shared/wrappers';

const Contact = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Say Hey" />
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
          <h1>Hey you!</h1>
        </GridColumn>
      </Grid>
    </ContentWrapper>
  </Layout>
);

export default Contact;

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
};
