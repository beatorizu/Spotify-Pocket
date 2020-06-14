import { config } from '../config';

const { spotify } = config;

const defaultOptions ={
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'method': 'GET'
}

export const endpoints = {
  getAthorizarion: {
    url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : ''}&redirect_uri=${spotify.redirectUrl}&response_type=token&show_dialog=true`
  },
  getUserProfile: {
    url: `${spotify.webAPI}/me`,
    options: defaultOptions
  },
  getCategories: {
    url: `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,
    options: defaultOptions
  },
  getCategoryPlaylists: {
    url: `${spotify.webAPI}/browse/categories/{categoryId}/playlists`,
    options: defaultOptions
  }
}
