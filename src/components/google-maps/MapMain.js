import React from 'react'
import { compose } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import mapStyleDark from './map_style_dark.json'
import CustomMarker from './CustomMarker'

const MapArray = [
  { lat: 41.903, lng: 12.496, info: 'Rome 08.17' },
  { lat: 40.712, lng: -74.005, info: 'New York 12.16' },
  { lat: 43.769, lng: 11.255, info: 'Florence 09.17' },
  { lat: 45.444, lng: 12.328, info: 'Venice 09.17' },
  { lat: 22.89, lng: -109.916, info: 'Cabo San Lucas 02.17' },
  { lat: 20.617, lng: -105.23, info: 'Puerto Vallarta 02.17' },
  { lat: 27.484, lng: -114.594, info: 'Puerto Nuevo 07.17' },
  { lat: 37.773, lng: -122.431, info: 'San Francisco' },
  { lat: 21.109, lng: -86.76, info: 'Cancun 08.16' },
  { lat: 20.211, lng: -87.463, info: 'Tulum 08.16' },
  { lat: 20.789, lng: -156.331, info: 'Maui 08.15' },
  { lat: 47.608, lng: -122.335, info: 'Seattle 09.15' },
  { lat: 10.762, lng: 106.66, info: 'Ho Chi Minh 11.17' },
  { lat: 18.796, lng: 98.979, info: 'Chiang Mai 11.17' },
  { lat: 13.736, lng: 100.523, info: 'Bangkok 11.17' },
  { lat: 21.315, lng: -157.858, info: 'Oahu' },
  { lat: 40.758, lng: -111.876, info: 'Salt Lake City' },
  { lat: 28.538, lng: -81.379, info: 'Orlando' },
  { lat: 14.599, lng: 120.984, info: 'Manila 03.18' },
  { lat: 11.209, lng: 119.462, info: 'El Nido 04.18' },
  { lat: 31.23, lng: 121.473, info: 'Shanghai 04.18' },
  { lat: 35.689, lng: 139.691, info: 'Tokyo 11.18' },
  { lat: 34.693, lng: 135.502, info: 'Osaka 11.18' },
  { lat: 35.011, lng: 135.768, info: 'Kyoto 11.18' },
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
