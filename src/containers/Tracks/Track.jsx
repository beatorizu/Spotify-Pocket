import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { BsPlayFill, BsVolumeUpFill } from "react-icons/bs";
import Ink from "react-ink";

import { addTrackToPlayer, removeTrackFromPlayer } from "../../actions";

import './Track.scss';

const Track = ({ track }) => {
  const playingNowId = useSelector(state => state.content.playingNowId);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { artists, id, name } = track;

  const handleClick = () => {
    if (isPlaying && playingNowId === id) {
      setIsPlaying(false);
      dispatch(removeTrackFromPlayer());

      return;
    }

    dispatch(addTrackToPlayer(track));
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (playingNowId === id) {
      return;
    }
    setIsPlaying(false);
  }, [playingNowId, id])

  return (
    <div className={`track ${isPlaying && 'is-playing'}`} onClick={handleClick} data-testid="track">
      <div className="track__play">
        <div className="track__play__wrapper">
          <BsPlayFill className="track__play__icon" />
          <BsVolumeUpFill className="track__play__icon" />
        </div>
      </div>
      <div className="track__info">
        <div>
          <span className="track__name">{name}</span>
          <span className="track__artists">{artists.map(artist => artist.name).join(", ")}</span>
        </div>
      </div>
      <Ink />
    </div>
  )
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
}

export default Track;

