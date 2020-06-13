import React from 'react';
import { Link } from "react-router-dom";

import { Logo } from '../../components'

import './Topbar.scss';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="container">
        <Link to='/dashboard'>
          <Logo className="spotify-brand" />
        </Link>

        <div className="user">
          <span className="user__name">Ochako Uraraka</span>
          <figure>
            <img className="user__thumb" src="https://beatorizu.github.io/BHA-Instagram/img/profiles/ochako-uraraka/ochako-uraraka-profile.jpg" alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
