import ContentConstants from "../constants/content";

export const getCategoriesFailed = () => ({ type: '' });

export const getCategoriesRequest = () => ({
  type: ContentConstants.GET_CATEGORIES_REQUEST
});

export const getCategoriesSuccess = ({ categories }) => ({
  type: ContentConstants.GET_CATEGORIES_SUCCESS,
  payload: categories.items
});

export const getCategoryPlaylistFailed = () => ({})

export const getCategoryPlaylistRequest = () => ({
  type: ContentConstants.GET_CATEGORY_PLAYLIST_REQUEST
})

export const getCategoryPlaylistSuccess = () => ({})
