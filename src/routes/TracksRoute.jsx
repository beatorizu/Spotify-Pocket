import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getPlaylistTracksRequest,
} from "../actions"

import { Tracks } from "../containers";

import { endpoints } from "../modules/endpoints";
import { getContentNameById } from "../modules/helpers";

const { getPlaylistTracks } = endpoints;

const TracksRoute = ({ path }) => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getPlaylistTracksRequest());
  }, [auth, dispatch])

  return (
    <Tracks
      categoryName={getContentNameById(playlistId, content.playlists)}
      isLoading={content.status === 'running' && content.tracks.length === 0}
      path={path}
    />
  )
}

export default TracksRoute;
