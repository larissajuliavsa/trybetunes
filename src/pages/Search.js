import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../assets/css/Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="container-search-page" data-testid="page-profile-edit">
        <Header />
        <section className="container-text-bar">
          <p className="search-page-text">Looking for something ?</p>
          <SearchBar />
        </section>
      </div>
    );
  }
}
