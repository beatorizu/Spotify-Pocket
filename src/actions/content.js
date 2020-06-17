import ContentConstants from "../constants/content";

export const getCategoriesFailed = () => ({ type: '' });

export const getCategoriesRequest = () => ({
  type: ContentConstants.GET_CATEGORIES_REQUEST
});

export const getCategoriesSuccess = ({ categories }) => ({
  type: ContentConstants.GET_CATEGORIES_SUCCESS,
  payload: categories.items
});

export const getCategoryPlaylistFailed = () => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_FAILED
})

export const getCategoryPlaylistRequest = () => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_REQUEST
})

export const getCategoryPlaylistSuccess = ({ playlists }) => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items
})

export const getPlaylistTracksFailed = ({ message }) => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_FAILED,
  payload: { message }
})

export const getPlaylistTracksRequest = () => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_REQUEST
})

export const getPlaylistTracksSuccess = ({ items }) => ({
  type: ContentConstants.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items
})

export const removeTrackFromPlayer = () => ({
  type: ContentConstants.REMOVE_PLAYER_TRACK
})

export const addTrackToPlayer = (track) => ({
  type: ContentConstants.ADD_PLAYER_TRACK,
  payload: track
})
