import React, { Component } from 'react';
// import Spinner from 'react-bootstrap/Spinner';
import '../assets/css/Loading.css';
import { ClipLoader } from 'react-spinners';

export default class Loading extends Component {
  render() {
    return (
      <div className="container-loading">
        <ClipLoader className="loading-snipper" size={ 14 } color="white" loading />
      </div>
      // // <ReactBootStrap.Spinner animation="border" variant="light" role="status">
      // //   <span className="visually-hidden">Loading...</span>
      // // </ReactBootStrap.Spinner>
      // <Spinner animation="border" variant="light" />
      // // <p>Carregando...</p>

    );
  }
}
