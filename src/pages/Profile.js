import React, { Component } from 'react';
import Header from '../components/Header';
import ImgDefault from '../assets/css/img/imgDefault.png';
import '../assets/css/Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div className="container-profile-page" data-testid="page-profile">
        <Header />
        <main className="container-profile">
          <img className="profile-img" src={ ImgDefault } alt="default img" />
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
            leo non nisl semper lobortis a vitae turpis. Fusce eget ante leo. In
            volutpat elit vel libero aliquam, sit amet elementum leo commodo.
            Cras dapibus finibus lectus vel luctus. Sed malesuada leo id dui
            facilisis gravida.
          </p>
        </main>
      </div>
    );
  }
}
