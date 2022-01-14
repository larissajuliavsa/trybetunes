import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;
    const MIN_LENGTH = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          name="name"
          placeholder="eg Rolling Stones or Jack White"
          onChange={ this.inputChange }
          data-testid="search-artist-input"
        />
        <button
          type="submit"
          disabled={ name.length < MIN_LENGTH }
          data-testid="search-artist-button"
        >
          Lets Find It!
        </button>
      </div>
    );
  }
}
