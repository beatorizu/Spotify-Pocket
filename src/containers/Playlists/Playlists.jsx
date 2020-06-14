import React  from 'react';
import PropTypes from "prop-types";

import { Loading } from "../../components";

import PlaylistItem from "./PlaylistItem";

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => (
  <div className="playlists">
    <div className="container">
      <h3 className="playlists__title">Categorias</h3>
      {isLoading
        ? <Loading text="Carregando..." />
        : <div className="playlists__content"></div>
      }
    </div>
  </div>
);

Playlists.defaulProps = {
  isLoading: false
}

export default Playlists;
