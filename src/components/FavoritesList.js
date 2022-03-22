import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from './MusicCard';

import '../assets/css/FavoritesList.css';

export default class FavoritesList extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
    };

    this.listFavorites = this.listFavorites.bind(this);
  }

  componentDidMount() {
    this.listFavorites();
  }

  async listFavorites() {
    const list = await getFavoriteSongs();
    this.setState({ favorites: [...list] });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div className="container-favorites-list">
        <p className="favorites-text">Here is your favorites</p>
        {favorites.map((list) => (
          <MusicCard
            key={ list.previewUrl }
            music={ list }
            listFave={ this.listFavorites }
            favorites={ favorites }
            trackName={ list.trackName }
            previewUrl={ list.previewUrl }
            trackId={ list.trackId }
          />
        ))}
      </div>
    );
  }
}
