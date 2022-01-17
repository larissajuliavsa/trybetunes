import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';

import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      keepName: '',
      isLoading: false,
      searchList: [], // a função searchAlbumsAPI() retorna um array de objetos
    };

    this.inputChange = this.inputChange.bind(this);
    this.searchBand = this.searchBand.bind(this);
  }

  componentDidMount() {
    this.searchBand();
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

  async searchBand() {
    const { name } = this.state;

    this.setState({ isLoading: true });

    const getAPI = await searchAlbumsAPI(name);

    this.setState({
      name: '',
      keepName: name,
      isLoading: false,
      searchList: getAPI,
    });
  }

  render() {
    const { name, keepName, isLoading, searchList } = this.state;
    const MIN_LENGTH = 2;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div data-testid="page-search">
            <Header />
            <input
              type="text"
              name="name"
              placeholder="eg Rolling Stones or Jack White"
              onChange={ this.inputChange }
              data-testid="search-artist-input"
            />
            <button
              type="submit"
              disabled={ name.length < MIN_LENGTH }
              onClick={ this.searchBand }
              data-testid="search-artist-button"
            >
              pesquisar
            </button>
            {searchList.length === 0 ? (
              <span>Nenhum álbum foi encontrado</span>
            ) : (
              <section>
                <div>{`Resultado de álbuns de: ${keepName}`}</div>
                <div>
                  {searchList.map((search) => (
                    <div key={ search.collectionId }>
                      <Link
                        data-testid={ `link-to-album-${search.collectionId}` }
                        to={ `/album/${search.collectionId}` }
                      >
                        <span>{search.collectionName}</span>
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
