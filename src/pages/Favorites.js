import React, { Component } from 'react';
import FavoritesList from '../components/FavoritesList';
import Header from '../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <FavoritesList />
      </div>
    );
  }
}
