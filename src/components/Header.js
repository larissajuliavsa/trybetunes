import React, { Component } from 'react';
import { BsMusicPlayer } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../assets/css/Header.css';

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
          <div className="container-header">
            <header
              className="container-header-logo-user"
              data-testid="header-component"
            >
              <Link to="/home">
                <h2 className="header-logo">Trybetunes</h2>
              </Link>
            </header>
            <nav className="container-nav">
              <Link
                className="container-nav-album"
                data-testid="link-to-search"
                to="/search"
              >
                <BsMusicPlayer />
              </Link>
              <Link
                className="container-nav-favorites"
                data-testid="link-to-favorites"
                to="/favorites"
              >
                <FaRegHeart />
              </Link>
              <div className="nav-user">
                <Link
                  className="container-nav-profile"
                  data-testid="link-to-profile"
                  to="/profile"
                >
                  <FiUser />
                </Link>
                <p className="nav-user-name" data-testid="header-user-name">
                  {login.name}
                </p>
              </div>
            </nav>
          </div>
        )}
      </div>
    );
  }
}
