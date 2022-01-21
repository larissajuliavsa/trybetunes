import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.favoriteMusic = this.favoriteMusic.bind(this);
  }

  /*
    Na função favoriteMusic(), eu desestruturei o evento { target } para verificar se o tipo 'checkbox' está clicado ou não e depois enviei este name e value para o setState. Enviei esta chave capturada pelo target para a função addSong() por parâmetro
  */

  async favoriteMusic({ target }) {
    const { musics } = this.props;

    this.setState({ isLoading: true });

    const musicList = musics.some((music) => music.trackId === target.checked);

    console.log(musicList);

    await addSong(musicList);

    this.setState({ isLoading: false });
  }

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { isLoading } = this.state;

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
                name={ trackId }
                onChange={ this.favoriteMusic }
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
