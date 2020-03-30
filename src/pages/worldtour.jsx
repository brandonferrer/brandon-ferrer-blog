import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Layout, TravelMap } from '../components';
import { ContentWrapper, HeaderWrapper } from '../shared/wrappers';
import { PageHeader } from '../shared/typography';

const googleMapApiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

const WorldTour = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="World Tour" />
    </HeaderWrapper>
    <ContentWrapper>
      <div css={styles.travelMapWrapper}>
        <TravelMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapApiKey}&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </ContentWrapper>
  </Layout>
);

export default WorldTour;

const styles = {
  travelMapWrapper: css`
    height: 100%;
    width: 100%;
    position: relative;
  `,
};
