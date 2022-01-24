import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  addSong,
  removeSong,
} from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isChecked: false, // para verificar se o checkbox está checado
    };

    this.favoriteMusic = this.favoriteMusic.bind(this);
    this.handleChangeClick = this.handleChangeClick.bind(this);
    this.loadingPage = this.loadingPage.bind(this);
  }

  componentDidMount() {
    this.loadingPage();
  }

  /*
    Na função favoriteMusic(), eu desestruturei o evento { target } para verificar se o tipo 'checkbox' está clicado ou não e depois enviei este name e value para o setState. Enviei esta chave capturada pelo target para a função addSong() por parâmetro
  */

  handleChangeClick({ target }) {
    this.favoriteMusic(target);

    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  }

  async favoriteMusic(target) {
    const { music, listFave } = this.props;

    // para adicionar e remover a música dos favoritos
    this.setState({ isLoading: true }, async () => {
      if (target.checked) {
        addSong(music);
      } else {
        removeSong(music);
      }

      await listFave();

      this.setState({
        isLoading: false,
      });
    });
  }

  // para listar as músicas favoritadas no site ao carregar a página
  loadingPage() {
    const { favorites, trackId } = this.props;

    const results = favorites.some(
      (faveMusics) => faveMusics.trackId === trackId,
    );

    if (results) {
      this.setState({
        isChecked: true,
      });
    }
  }

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { isLoading, isChecked } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <p>{trackName}</p>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" label={ trackName } />
            </audio>
            <label htmlFor={ trackId }>
              Favorita
              <input
                id={ trackId }
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                name="checkbox"
                onChange={ this.handleChangeClick }
                checked={ isChecked }
              />
            </label>
          </>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
}.isRequired;
