import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import '../assets/css/SearchBar.css';
import Loading from './Loading';

import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      keepName: '',
      isLoading: false,
      searchList: [], // a função searchAlbumsAPI() retorna um array de objetos
      notFound: false, // para retornar a frase "nenhum album encontrado"
    };

    this.inputChange = this.inputChange.bind(this);
    this.searchBand = this.searchBand.bind(this);
  }

  inputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  /*
    A função searchBand tem como objeto de capturar o valor da chave name e enviar para a API, para que retorne um objeto referente a este valor. Após esta requisição, limpei o nome desta chave name e guardei seu valor em outra chave, na keepName para que eu utilizasse no resultado da busca.
  */

  async searchBand(e) {
    e.preventDefault();

    const { name } = this.state;

    this.setState({ isLoading: true }, async () => {
      const getAPI = await searchAlbumsAPI(name);
      const notFound = getAPI.length === 0;

      this.setState({
        isLoading: false,
        searchList: getAPI,
        name: '',
        keepName: name,
        notFound,
      });
    });
  }

  render() {
    const { name, keepName, isLoading, searchList, notFound } = this.state;
    const MIN_LENGTH = 2;
    return (
      <div data-testid="page-search">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="container-search">
              <input
                type="text"
                className="search-input"
                name="name"
                placeholder="eg Rolling Stones or Jack White"
                onChange={ this.inputChange }
                data-testid="search-artist-input"
              />
              <button
                className="search-btn"
                type="submit"
                disabled={ name.length < MIN_LENGTH }
                onClick={ this.searchBand }
                data-testid="search-artist-button"
              >
                <BiSearch />
              </button>
            </div>
            {notFound && (
              <p className="container-notFound">
                Sorry, I didnt find what you are looking for :/
              </p>
            )}
            {searchList.length > 0 && (
              <section>
                <p className="container-results-text">{`Some results of ${keepName}`}</p>
                <div className="container-results-albums">
                  {searchList.map((search) => (
                    <div key={ search.collectionId }>
                      <Link
                        data-testid={ `link-to-album-${search.collectionId}` }
                        to={ `/album/${search.collectionId}` }
                      >
                        <div className="container-results">
                          <img
                            className="results-img"
                            src={ search.artworkUrl100 }
                            alt={ search.collectionName }
                          />
                          <p className="results-album-name">
                            {search.collectionName}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    );
  }
}
