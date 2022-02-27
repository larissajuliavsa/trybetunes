import React, { Component } from 'react';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from './MusicCard';

export default class FavoritesList extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      isLoading: false,
    };

    this.listFavorites = this.listFavorites.bind(this);
    this.deleteMusics = this.deleteMusics.bind(this);
  }

  componentDidMount() {
    this.listFavorites();
  }

  async listFavorites() {
    const list = await getFavoriteSongs();
    this.setState({ favorites: [...list] });
  }

  async deleteMusics({ target }) {
    const { favorites } = this.state;

    const unList = favorites.find((list) => list.trackId === target.id);

    await removeSong(unList);

    const reloadList = favorites.filter((list) => list.trackId !== target.id);
    this.setState({ favorites: reloadList });
  }

  render() {
    const { favorites, isLoading } = this.state;
    return (
      <>
        <p>Here is your favorites</p>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          favorites.map((list) => (
            <MusicCard
              key={ list.previewUrl }
              music={ list }
              favorites={ favorites }
              unListFave={ this.deleteMusics }
              trackName={ list.trackName }
              previewUrl={ list.previewUrl }
              trackId={ list.trackId }
            />
          ))
        )}
      </>
    );
  }
}
