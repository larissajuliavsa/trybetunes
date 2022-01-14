import React, { Component } from 'react';

import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      login: {}, // o retorno da função getUser é um objeto
    };
    this.loginName = this.loginName.bind(this);
  }

  /*
    para que o código não seja renderizado antes de receber o nome do usuário, utilizei o método componentDidMount recebendo a função loginName.
    tive como exemplo o exercício de fixação no course: API de Rick and Morty.
  */

  componentDidMount() {
    this.loginName();
  }

  async loginName() {
    this.setState({ isLoading: true });

    const userName = await getUser(); // por ser uma Promise, utilizei async/await

    this.setState({
      isLoading: false,
      login: userName,
    });
  }

  render() {
    const { isLoading, login } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <header data-testid="header-component">
            <p data-testid="header-user-name">
              Welcome
              {` ${login.name}`}
            </p>
          </header>
        )}
      </div>
    );
  }
}
