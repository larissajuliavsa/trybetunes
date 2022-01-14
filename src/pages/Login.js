import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

// Fiz o requisito 2 com o auxílio da mentoria de revisão de conteúdo, do Rod, e também com correção de erros do código com a Elania Sousa

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoading: false,
      saved: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
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

  render() {
    const MIN_LENGTH = 3;
    const { name, isLoading, saved } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div data-testid="page-login">
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={ this.onInputChange }
                data-testid="login-name-input"
              />
              <button
                type="submit"
                disabled={ name.length < MIN_LENGTH }
                onClick={ this.onSaveButtonClick }
                data-testid="login-submit-button"
              >
                Entrar
              </button>
              {saved && <Redirect to="/search" />}
            </form>
          </div>
        )}
      </div>
    );
  }
}
