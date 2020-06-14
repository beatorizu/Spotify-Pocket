import React from 'react';

import backgroundImage from '../../assets/images/app-intro-1.jpg';

import { Loading } from "../../components";

import './Authorize.scss';

const Authorize = () => {
  return (
    <div className="callback" style={{backgroundImage: `url(${backgroundImage})`}} data-testid="callback">
      <div className="container">
        <Loading text='Autenticando...' />
      </div>
    </div>
  );
}

export default Authorize;

