import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getPlaylistTracksFailed,
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  logout
} from "../actions"

import { Tracks } from "../containers";

import { endpoints } from "../modules/endpoints";
import { getContentNameById } from "../modules/helpers";
import { request, sanitizeUrl } from "../modules/request";

const { getPlaylistTracks } = endpoints;

const TracksRoute = ({ path }) => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();
  const { categoryId, playlistId } = useParams();

  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getPlaylistTracksRequest());

    request(sanitizeUrl(sanitizeUrl(getPlaylistTracks.url, { categoryId }), { playlistId }), requestOptions)
      .then(data => dispatch(getPlaylistTracksSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());

          return;
        }

        dispatch(getPlaylistTracksFailed(error));
      })
  }, [auth, categoryId, dispatch, playlistId])

  return (
    <Tracks
      categoryName={getContentNameById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.status === 'running' && content.tracks.length === 0}
      path={path}
    />
  )
}

export default TracksRoute;