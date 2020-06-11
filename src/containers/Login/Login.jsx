import React from 'react';

import { endpoints } from '../../modules/endpoints'

import { Logo } from '../../components'

import './Login.scss';

const Login = () => (
  <main className="login" data-testid="login">
    <div className="container">
      <Logo />
      <h2 className="login__microcopy">
        Não toca a música inteira, <strong>mas toca o seu <span role="img" className="login__microcopy__heart" aria-label="Coração">❤️</span></strong>
      </h2>
      <a href={endpoints.getAthorizarion.url} className="login__auth-button">Entrar com Spotify</a>
    </div>
  </main>
);

export default Login;
