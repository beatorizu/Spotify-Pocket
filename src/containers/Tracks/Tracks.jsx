import React  from 'react';

import './Tracks.scss';
import { Loading } from '../../components';

const Tracks = ({ categoryName, data, isLoading, path }) => (
  <div className="tracks" data-testid="tracks">
    <div className="container">
      {isLoading
        ? <Loading text="Carregando..." />
        : <div className="tracks__content">

        </div>
      }
    </div>
  </div>
);

Tracks.defaulProps = {
  isLoading: false
}

export default Tracks;
