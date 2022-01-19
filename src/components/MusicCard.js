import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isChecked: false,
    };

    this.favoriteMusic = this.favoriteMusic.bind(this);
  }

  /*
    Na função favoriteMusic(), eu desestruturei o evento { target } para verificar se o tipo 'checkbox' está clicado ou não e depois enviei este name e value para o setState. Enviei esta chave capturada pelo target para a função addSong() por parâmetro
  */

  async favoriteMusic({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
      isLoading: true,
    });

    await addSong(name);

    this.setState({
      isLoading: false,
      isChecked: value,
    });
  }

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { isChecked, isLoading } = this.state;

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
                onChange={ this.favoriteMusic }
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
