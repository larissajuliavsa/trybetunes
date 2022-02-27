import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <SearchBar />
      </div>
    );
  }
}
