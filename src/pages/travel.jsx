import React from 'react'
import { css } from 'react-emotion'
import { TravelMap, PageHeader, SubHeader } from '../components'

const googleMapApiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY

const Travel = () => (
  <div className={styles.wrapper}>
    <PageHeader text="Travel" />
    <SubHeader text="Map" />
    <TravelMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapApiKey}&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '60%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
)

export default Travel

const styles = {
  wrapper: css`
    padding: 2rem 0;
    height: 98vh;
  `,
}
