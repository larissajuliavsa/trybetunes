import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
    };

    this.listMusic = this.listMusic.bind(this);
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

    this.setState({
      musics: musicList,
    });
  }

  render() {
    /*
      Para entender o que esta chave "musics" retornava, fiz um console.log(musics).
      Percebi que retornou um array vazio e logo depois, um array com 15 objetos. Para garantir que eu utilizasse esse array de objetos, fiz condicionais com esta props como está abaixo.
    */

    const { musics } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-album">
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
                  music={ musics.length > 0 }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                />
              </div>
            ),
          )}
        </div>
      </>
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
