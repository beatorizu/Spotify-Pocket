import React  from 'react';

import './Tracks.scss';
import { Loading, RouteHeader } from '../../components';
import Track from './Track';

const Tracks = ({ categoryName, data, isLoading, path }) => (
  <div className="tracks" data-testid="tracks">
    <div className="container">
      <RouteHeader categoryName={categoryName} path={path} />
      {isLoading
        ? <Loading text="Carregando..." />
        : <div className="tracks__content">
          {data?.map(track => <Track track={track.track} key={track.track.id} />)}
        </div>
      }
    </div>
  </div>
);

Tracks.defaulProps = {
  isLoading: false
}

export default Tracks;
