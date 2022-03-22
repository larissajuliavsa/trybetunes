import React, { Component } from 'react';
import FavoritesList from '../components/FavoritesList';
import Header from '../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div className="container-favorites-page" data-testid="page-favorites">
        <Header />
        <FavoritesList />
      </div>
    );
  }
}
