import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Logo } from '../../components'

import './Topbar.scss';

const Topbar = () => {
  const user = useSelector(state => state.user)

  return (
    <header className="topbar">
      <div className="container">
        <Link to='/dashboard'>
          <Logo className="spotify-brand" />
        </Link>

        <div className="user">
          <span className="user__name">{user.name}</span>
          <figure>
            <img className="user__thumb" src={user.thumb} alt={`Foto de perfil de ${user.name}`} />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
