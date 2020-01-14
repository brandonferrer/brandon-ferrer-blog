/* global window */

import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Typist from 'react-typist';
import { isMobile } from 'react-device-detect';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import { PageHeader, SubHeader } from '../shared/typography';
import { HeaderWrapper, ContentWrapper } from '../shared/wrappers';
import { Layout, SpotifyPlayer } from '../components';

const Dj = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [spotifyToken, setSpotifyToken] = useState('');

  if (window) {
    window.onSpotifyWebPlaybackSDKReady = () => (window.Spotify = Spotify);
  }

  const spotifyRedirect = url => (window.location.href = url);

  if (window.location.hash && !spotifyToken && !isAuthenticated) {
    const hashes = window.location.hash.substring(1);
    const params = {};

    hashes.split('&').map(hash => {
      const [key, val] = hash.split('=');
      params[key] = val;
    });

    if (params.access_token) {
      window.localStorage.setItem('access_token', params.accessToken);
      setSpotifyToken(params.access_token);
      setIsAuthenticated(true);
    }

    // Remove hashes from URL after setting access token
    history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    );
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
  const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}&token`;

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "turntables.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log('spotifyToken', spotifyToken);

  return (
    <Layout>
      <HeaderWrapper>
        <PageHeader text="Spotify Slapzz" />
        <SubHeader text="Remote DJ" />
      </HeaderWrapper>
      <ContentWrapper dj={!spotifyToken} resume={spotifyToken}>
        <Grid
          container
          stackable
          verticalAlign="middle"
          columns={!spotifyToken ? 2 : 1}
          centered
          style={{ marginTop: '2rem' }}
        >
          {!spotifyToken ? (
            <>
              <GridColumn
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                {isMobile ? (
                  <>
                    <Typist cursor={{ show: false }} startDelay={600}>
                      <p css={styles.textMobile}>
                        Aww you're on a mobile device. Hop on your computer,
                        come back here, and let's dance!
                      </p>
                    </Typist>
                  </>
                ) : (
                  <>
                    <Typist cursor={{ show: false }} startDelay={600}>
                      <p css={styles.text}>
                        Do you have Spotify? I bet I can make you dance through
                        the computer!{' '}
                        <span role="img" aria-label="emoji">
                          🙃
                        </span>
                      </p>
                    </Typist>
                    <Button
                      secondary
                      onClick={() => spotifyRedirect(spotifyAuthorizeUrl)}
                      style={{ marginTop: '3rem' }}
                    >
                      Login with Spotify
                    </Button>
                  </>
                )}
              </GridColumn>

              <GridColumn
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                {!isMobile && (
                  <Img
                    css={styles.image}
                    fixed={data.image.childImageSharp.fixed}
                  />
                )}
              </GridColumn>
            </>
          ) : (
            <GridColumn
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <SpotifyPlayer
                accessToken={spotifyToken}
                isAuthenticated={isAuthenticated}
              />
            </GridColumn>
          )}
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
  image: css`
    max-width: 400px;
    margin: 0;
    border-radius: 2px;
    border: 18px solid #fff;
    // box-shadow: 10px 10px 5px #1b1c1c;
    @media (max-width: 992px) {
      width: 100%;
    }
  `,
  text: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.5px;
    font-size: 2rem;
    color: #fff;
    text-align: center;
  `,
  textMobile: css`
    font-family: Nunito Sans !important;
    font-weight: 800;
    letter-spacing: 1.5px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
  `,
};
