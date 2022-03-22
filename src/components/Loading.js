import React, { Component } from 'react';
import '../assets/css/Loading.css';
import { ClipLoader } from 'react-spinners';

export default class Loading extends Component {
  render() {
    return (
      <div className="container-loading">
        <ClipLoader className="loading-snipper" size={ 14 } color="white" loading />
      </div>
    );
  }
}
