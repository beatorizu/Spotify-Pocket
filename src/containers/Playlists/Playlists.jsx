import React  from 'react';
import PropTypes from "prop-types";

import { Loading, RouteHeader } from "../../components";

import PlaylistItem from "./PlaylistItem";

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => (
  <div className="playlists" data-testid="playlists">
    <div className="container">
      <RouteHeader categoryName={categoryName} path={path} />
      {isLoading
        ? <Loading text="Carregando..." />
        : <div className="playlists__content">
          {data?.map(playlist => <PlaylistItem categoryId={categoryId} description={playlist.description} id={playlist.id} image={playlist.images[0]} name={playlist.name} path={path} key={playlist.id} />)}
        </div>
      }
    </div>
  </div>
);

Playlists.defaulProps = {
  isLoading: false
}

export default Playlists;
