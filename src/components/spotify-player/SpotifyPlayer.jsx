import React, { useState } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-js';

const SpotifyPlayer = accessToken => {
  const [userData, setUserData] = useState({});

  const spotifyApi = new SpotifyWebApi();

  if (accessToken) {
    axios
      .get('https://api.spotify.com/v1/me', {
        headers: { Authorization: 'Bearer ' + accessToken },
      })
      .then(res => console.log('res', res));

    // fetch('https://api.spotify.com/v1/me', {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // }).then(response => console.log('response', response));
    spotifyApi.setAccessToken(accessToken);
    // spotifyApi
    //   .getMe()
    //   .then(data => setUserData(data))
    //   .catch(error => console.error(error));
  }
  console.log(userData);
  return <h1>Spotify Player</h1>;
};

export default SpotifyPlayer;
