import { config } from '../config';

const { spotify } = config;

const defaultOptions ={
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'method': 'GET'
}

export const endpoints = {
  getAthorizarion: {
    url: `${spotify.authorizationURL}?response_type=code&client_id=${spotify.clientId}${spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes): ''}&redirect_uri=${spotify.redirectUrl}`
  }
}
