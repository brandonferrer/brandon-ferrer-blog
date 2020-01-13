/* global window */
import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import {
  PageHeader,
  HeaderWrapper,
  ContentWrapper,
  SpotifyPlayer,
} from '../components';
import Layout from '../components/layout';

const Dj = () => {
  const [spotifyToken, setSpotifyToken] = useState('');

  const spotifyRedirect = url => (window.location.href = url);

  if (window.location.hash && !spotifyToken) {
    const hashes = window.location.hash.substring(1);
    const params = {};

    hashes.split('&').map(hash => {
      const [key, val] = hash.split('=');
      params[key] = val;
    });

    if (params.access_token) setSpotifyToken(params.access_token);

    // Remove hashes from URL after setting access token
    // history.pushState(
    //   '',
    //   document.title,
    //   window.location.pathname + window.location.search
    // );
  }

  // Spotify implicit grant flow params
  const clientId = process.env.GATSBY_SPOTIFY_CLIENT_ID;
  const redirectUri = 'http://localhost:8000/dj';
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-private',
    'user-read-email',
    'user-read-playback-state',
    'user-modify-playback-state',
    'streaming',
  ];
  const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true&token`;

  return (
    <Layout>
      <HeaderWrapper>
        <PageHeader text="DJ Life" />
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
            {!spotifyToken ? (
              <Button onClick={() => spotifyRedirect(spotifyAuthorizeUrl)}>
                Login with Spotify
              </Button>
            ) : (
              <SpotifyPlayer accessToken={spotifyToken} />
            )}
          </GridColumn>
        </Grid>
      </ContentWrapper>
    </Layout>
  );
};

export default Dj;

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    height: 98vh;
  `,
};
