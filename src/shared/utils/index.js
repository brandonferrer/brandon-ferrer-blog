// export const connectWebPlayer = (
//   webPlayer,
//   setWebPlayerId,
//   setWebPlayerState
// ) => {
//   // Error handling
//   webPlayer.addListener('initialization_error', ({ message }) => {
//     console.error(message);
//   });
//   webPlayer.addListener('authentication_error', ({ message }) => {
//     console.error(message);
//   });
//   webPlayer.addListener('account_error', ({ message }) => {
//     console.error(message);
//   });
//   webPlayer.addListener('playback_error', ({ message }) => {
//     console.error(message);
//   });

//   // Playback status updates
//   webPlayer.addListener('player_state_changed', state => {
//     setWebPlayerState(getTrackInfo(state));
//   });

//   // Ready
//   webPlayer.addListener('ready', ({ device_id }) => {
//     setWebPlayerId(device_id);
//     console.log('Ready with Device ID', device_id);
//   });

//   // Not Ready
//   webPlayer.addListener('not_ready', ({ device_id }) => {
//     console.log('Device ID has gone offline', device_id);
//   });

//   // Connect to the player!
//   webPlayer.connect();
// };

// export const transferPlaybackHere = (deviceId, token) => {
//   fetch('https://api.spotify.com/v1/me/player', {
//     method: 'PUT',
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       device_ids: [deviceId],
//       play: false,
//     }),
//   }).then(data => console.log(data));
// };

// const getTrackInfo = state => {
//   const {
//     current_track: currentTrack,
//     position,
//     duration,
//   } = state.track_window;
//   const trackName = currentTrack.name;
//   const albumName = currentTrack.album.name;
//   const artistName = currentTrack.artists.map(artist => artist.name).join(', ');
//   const playing = !state.paused;

//   return { position, duration, trackName, albumName, artistName, playing };
// };
