import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../assets/css/Login.css';

import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

// Fiz o requisito 2 com o auxílio da mentoria de revisão de conteúdo, do Rod, e também com correção de erros do código com a Elania Sousa

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      isLoading: false,
      saved: false,
      disable: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  // Para evitar que ocorra um aviso no console referente ao componentWillUnmount()
  componentWillUnmount() {
    this.setState = () => {};
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState(
      {
        [name]: value,
      },
      () => this.validation(),
    );
  }

  async onSaveButtonClick() {
    const { name } = this.state;

    this.setState({ isLoading: true });

    await createUser({ name });

    this.setState({
      isLoading: false,
      saved: true,
    });
  }

  validation() {
    const { name, password } = this.state;
    const SIX = 6;
    const FOUR = 4;
    const validName = name.length < FOUR;
    const validPassword = password.length < SIX;

    this.setState({
      disable: validName || validPassword,
    });
  }

  render() {
    const { name, password, isLoading, saved, disable } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <main className="page-login" data-testid="page-login">
            <h1 className="login-logo">Trybetunes</h1>
            <form className="container-login">
              <label className="login-label-name" htmlFor="name">
                <p>User</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={ name }
                  onChange={ this.onInputChange }
                  data-testid="login-name-input"
                  className="login-name"
                />
              </label>
              <label className="login-label-password" htmlFor="password">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={ password }
                  onChange={ this.onInputChange }
                  data-testid="login-password-input"
                  className="login-password"
                />
              </label>
            </form>
            <button
              type="submit"
              disabled={ disable }
              onClick={ this.onSaveButtonClick }
              data-testid="login-submit-button"
              className="login-btn"
            >
              Enter
            </button>
            {saved && <Redirect to="/home" />}
          </main>
        )}
      </div>
    );
  }
}
