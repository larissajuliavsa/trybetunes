import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Album extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
      favorites: [],
    };

    this.listMusic = this.listMusic.bind(this);
    this.listFavorites = this.listFavorites.bind(this);
  }

  componentDidMount() {
    this.listMusic();
  }

  /*
    Para que eu utilizasse o id da rota album, fiz esta desestruturação como ensinado na mentoria de revisão:
    const { match: { params: { id } } } = this.props;
    Enviei este id como parâmetro na função getMusics() que me retorna a lista de músicas referente ao parâmetro enviado.
  */

  async listMusic() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const musicList = await getMusics(id);

    const request = await getFavoriteSongs();

    this.setState({
      musics: musicList,
      favorites: [...request],
    });
  }

  async listFavorites() {
    const request = await getFavoriteSongs();

    this.setState({
      favorites: [...request],
    });
  }

  render() {
    /*
      Para entender o que esta chave "musics" retornava, fiz um console.log(musics).
      Percebi que retornou um array vazio e logo depois, um array com 15 objetos. Para garantir que eu utilizasse esse array de objetos, fiz condicionais com esta props como está abaixo.
    */

    const { musics, favorites } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <div>
          {musics.length > 0 && (
            <>
              <img src={ musics[0].artworkUrl100 } alt={ musics[0].collectionName } />
              <p data-testid="artist-name">{musics[0].artistName}</p>
              <p data-testid="album-name">{musics[0].collectionName}</p>
            </>
          )}
          {musics.map(
            (music, index) => index > 0 && (
              <div key={ music.previewUrl }>
                <MusicCard
                  music={ music }
                  favorites={ favorites }
                  listFave={ this.listFavorites }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                />
              </div>
            ),
          )}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
