import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(',');

const params = {
  scope: scopes, // use scope not scopes
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const SpotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,        // FIXED typo
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET, // FIXED typo
});

export default SpotifyApi;
export { LOGIN_URL };

