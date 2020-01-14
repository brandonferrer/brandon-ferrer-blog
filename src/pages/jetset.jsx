import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Layout, TravelMap } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader, SubHeader } from '../shared/typography';

const googleMapApiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

const JetSet = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Jet Set" />
      <SubHeader text="Trips" />
    </HeaderWrapper>
    <ContentWrapper travel>
      <div css={styles.travelMapWrapper}>
        <TravelMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapApiKey}&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '80%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </ContentWrapper>
  </Layout>
);

export default JetSet;

const styles = {
  travelMapWrapper: css`
    height: 100%;
    width: 100%;
    position: relative;
  `,
};
