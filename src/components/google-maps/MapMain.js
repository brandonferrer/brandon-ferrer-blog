import React from 'react'
import { compose } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import mapStyleDark from './map_style_dark.json'
import CustomMarker from './CustomMarker'

const MapArray = [
  { lat: 41.903, lng: 12.496, info: 'Rome' },
  { lat: 40.712, lng: -74.005, info: 'New York' },
  { lat: 43.769, lng: 11.255, info: 'Florence' },
  { lat: 45.444, lng: 12.328, info: 'Venice' },
  { lat: 22.89, lng: -109.916, info: 'Cabo San Lucas' },
  { lat: 20.617, lng: -105.23, info: 'Puerto Vallarta' },
  { lat: 27.484, lng: -114.594, info: 'Puerto Nuevo' },
  { lat: 37.773, lng: -122.431, info: 'San Francisco' },
  { lat: 21.109, lng: -86.76, info: 'Cancun' },
  { lat: 20.211, lng: -87.463, info: 'Tulum' },
  { lat: 20.789, lng: -156.331, info: 'Maui' },
  { lat: 47.608, lng: -122.335, info: 'Seattle' },
  { lat: 10.762, lng: 106.66, info: 'Ho Chi Minh' },
  { lat: 18.796, lng: 98.979, info: 'Chiang Mai' },
  { lat: 13.736, lng: 100.523, info: 'Bangkok' },
  { lat: 21.315, lng: -157.858, info: 'Oahu' },
  { lat: 40.758, lng: -111.876, info: 'Salt Lake City' },
  { lat: 28.538, lng: -81.379, info: 'Orlando' },
  { lat: 14.599, lng: 120.984, info: 'Manila' },
  { lat: 11.209, lng: 119.462, info: 'El Nido' },
  { lat: 31.23, lng: 121.473, info: 'Shanghai' },
  { lat: 35.689, lng: 139.691, info: 'Tokyo' },
  { lat: 34.693, lng: 135.502, info: 'Osaka' },
  { lat: 35.011, lng: 135.768, info: 'Kyoto' },
  { lat: 49.282, lng: -123.12, info: 'Vancouver' },
]

const MapMain = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={2}
    options={{
      gestureHandling: 'cooperative',
      mapTypeId: 'roadmap',
      styles: mapStyleDark,
      streetViewControl: false,
    }}
    defaultCenter={{ lat: 41.85, lng: -87.65 }}
  >
    {MapArray.map(props => (
      <CustomMarker key={props.lat} {...props} />
    ))}
  </GoogleMap>
))

export default MapMain
