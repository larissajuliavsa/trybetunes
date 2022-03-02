import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

import '../assets/css/MusicCard.css';

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
    const { music, listFave, unListFave } = this.props;

    // para adicionar e remover a música dos favoritos
    this.setState({ isLoading: true }, async () => {
      if (target.checked) {
        addSong(music);
      } else {
        removeSong(music);
      }

      await listFave();
      await unListFave();

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
          <section className="container-track-list">
            <div className="container-track-favorite">
              <p className="track-name">{trackName}</p>
              <label className="container-label-favorite" htmlFor={ trackId }>
                <p className="label-favorite">Favorite</p>
                <input
                  className="label-checkbox"
                  id={ trackId }
                  data-testid={ `checkbox-music-${trackId}` }
                  type="checkbox"
                  name="checkbox"
                  onChange={ this.handleChangeClick }
                  checked={ isChecked }
                />
                {isChecked ? (
                  <HiHeart className="heartFull" />
                ) : (
                  <HiOutlineHeart className="heartEmpty" />
                )}
              </label>
            </div>
            <audio
              className="track-audio"
              data-testid="audio-component"
              src={ previewUrl }
              controls
            >
              <track
                className="track-track"
                kind="captions"
                label={ trackName }
              />
            </audio>
          </section>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
}.isRequired;
