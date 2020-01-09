import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Marker, InfoWindow } from 'react-google-maps'

class CustomMarker extends Component {
  state = {
    showInfoWindow: false,
  }

  handleMouseOver = e => {
    this.setState({
      showInfoWindow: true,
    })
  }

  handleMouseExit = e => {
    this.setState({
      showInfoWindow: false,
    })
  }

  render() {
    const { showInfoWindow } = this.state
    const { info, lat, lng } = this.props

    return (
      <Marker
        position={{ lat, lng }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseExit}
      >
        {showInfoWindow && (
          <InfoWindow>
            <p css={styles.markerText}>{info}</p>
          </InfoWindow>
        )}
      </Marker>
    )
  }
}

const styles = {
  markerText: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.2px;
    font-size: 0.75rem;
  `,
}

export default CustomMarker
