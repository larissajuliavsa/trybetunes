import React, { Component } from 'react';
import Header from '../components/Header';
import '../assets/css/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container-not-found" data-testid="page-not-found">
        <Header />
        <h1 className="not-found">Page Not Found, sorry</h1>
      </div>
    );
  }
}
