import React from 'react';
import { TravelMap, PageHeader, SubHeader } from '../components';
import Layout from '../components/layout';
import { ContentWrapper, HeaderWrapper } from '../components';

const googleMapApiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

const Travel = () => (
  <Layout>
    <HeaderWrapper>
      <PageHeader text="Travel" />
      <SubHeader text="Map" />
    </HeaderWrapper>
    <ContentWrapper travel>
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
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

export default Travel;
