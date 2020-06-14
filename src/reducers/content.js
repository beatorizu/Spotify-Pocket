import ContentConstants from "../constants/content";

const contentInitialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: ''
}

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ContentConstants.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: [],
        status: 'running'
      };

    default:
      return state
  }
}

export default contentReducer
