import React from 'react'
import { css } from 'react-emotion'
import MapMain from '../components/google-maps/MapMain'

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Travel = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>Travel.</h1>
    <h1 className={styles.subHeader}>"MAP"</h1>
    <MapMain
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${googleMapApiKey}&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '60%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
)

const styles = {
  header: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: black;
    padding-top: 2rem;
    text-align: center;
  `,
  subHeader: css`
    color: black;
    letter-spacing: 1.2px;
  `,
  wrapper: css`
    padding: 2rem 0;
    height: 98vh;
  `,
}

export default Travel
