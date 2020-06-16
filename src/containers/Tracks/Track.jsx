import React from 'react';

import { BsFillPlayFill } from "react-icons/bs";

import './Track.scss';

const Track = ({ track }) => {
  const { artists, name } = track;
  return (
    <div className="track">
      <div className="track__play">
        <div className="track__play__wrapper">
          <BsFillPlayFill className="track__play__icon" />
        </div>
      </div>
      <div className="track__info">
        <div>
          <span className="track__name">{name}</span>
          <span className="track__artists">{artists.map(artist => artist.name).join(", ")}</span>
        </div>
      </div>
    </div>
  )
};

export default Track;

