import React from 'react';

import { Logo } from '../../components'

import './Login.scss';

const Login = () => (
  <main className="login" data-testid="login">
    <div className="container">
      <Logo />
      <h2 className="login__microcopy">
        Não toca a música inteira, <strong>mas toca o seu <span role="img" className="login__microcopy__heart" aria-label="Coração">❤️</span></strong>
      </h2>
      <button className="login__auth-button">Entrar com Spotify</button>
    </div>
  </main>
);

export default Login;
