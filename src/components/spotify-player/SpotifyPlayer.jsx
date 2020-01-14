import React, { useState, useEffect } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import SpotifyWebApi from 'spotify-web-api-js';
import { connectWebPlayer, transferPlaybackHere } from '../../shared/utils';

const spotifyApi = new SpotifyWebApi();

const SpotifyPlayer = ({ accessToken, isAuthenticated }) => {
  const [userData, setUserData] = useState({});
  const [webPlayer, setWebPlayer] = useState(null);
  const [webPlayerSet, setWebPlayerSet] = useState(false);
  const [webPlayerId, setWebPlayerId] = useState('');
  const [webPlayerState, setWebPlayerState] = useState({});

  if (typeof window !== 'undefined') {
    window.onSpotifyWebPlaybackSDKReady = () => (window.Spotify = Spotify);
  }

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      spotifyApi
        .getMe()
        .then(data => setUserData(data))
        .catch(error => console.error(error));
    }

    // if (!webPlayerSet && window.Spotify) {
    //   alert('in');
    //   setWebPlayer(
    //     new window.Spotify.Player({
    //       name: 'BrandonFerrer.com',
    //       getOAuthToken: cb => {
    //         cb(accessToken);
    //       },
    //     })
    //   );
    // }
  }, [isAuthenticated, accessToken, webPlayer, webPlayerId]);

  // useEffect(() => {
  //   if (webPlayerId && accessToken) {
  //     transferPlaybackHere(webPlayerId, accessToken);
  //   }
  // }, [webPlayerSet, webPlayerId]);

  if (typeof window !== 'undefined' && !webPlayerSet && window.Spotify) {
    setWebPlayer(
      new window.Spotify.Player({
        name: 'BrandonFerrer.com',
        getOAuthToken: cb => {
          cb(accessToken);
        },
      })
    );
    setWebPlayerSet(true);
  }

  // if (webPlayer && !webPlayerSet) {
  //   alert('in 2');

  //   setWebPlayerSet(true);
  // }

  console.log('web player', webPlayer);

  return (
    <>
      <br />

      <button
        onClick={() =>
          spotifyApi.play({
            device_ids: webPlayerId,
            uris: ['spotify:track:2rPE9A1vEgShuZxxzR2tZH'],
          })
        }
      >
        Play Thank U Next
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          connectWebPlayer(webPlayer, setWebPlayerId, setWebPlayerState)
        }
      >
        Connect web player
      </button>
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        visible
        width="very thin"
        direction="bottom"
        style={{ height: '100px' }}
      >
        <Menu.Item
          as="a"
          style={{ fontSize: '12px' }}
          onClick={() => transferPlaybackHere(webPlayerId, accessToken)}
        >
          <Icon name="sound" size="tiny" />
          Transfer Playback
        </Menu.Item>
        <Menu.Item as="a" style={{ fontSize: '12px' }}>
          <Icon name="play" size="tiny" />
          Play
        </Menu.Item>
        <Menu.Item as="a" style={{ fontSize: '12px' }}>
          <Icon name="stop" size="tiny" />
          Stop
        </Menu.Item>
        <Menu.Item as="a" style={{ fontSize: '12px' }}>
          <Icon name="step forward" size="tiny" />
          Next
        </Menu.Item>
      </Sidebar>

      {/* <Menu icon attached="bottom" inverted>
        <Menu.Item
          name="gamepad"
          // active={activeItem === 'gamepad'}
          // onClick={this.handleItemClick}
        >
          <Icon name="gamepad" />
        </Menu.Item>

        <Menu.Item
          name="video camera"
          // active={activeItem === 'video camera'}
          // onClick={this.handleItemClick}
        >
          <Icon name="video camera" />
        </Menu.Item>

        <Menu.Item
          name="video play"
          // active={activeItem === 'video play'}
          // onClick={this.handleItemClick}
        >
          <Icon name="video play" />
        </Menu.Item>
      </Menu> */}
    </>
  );
};

export default SpotifyPlayer;
