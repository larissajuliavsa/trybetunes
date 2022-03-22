import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import Header from './Header';
import SearchBar from './SearchBar';

/* IMGS */
import latestsHits from '../assets/css/img/latestsHits.png';
import MeganTheeStallionFever from '../assets/css/img/MeganTheeStallionFever.jpg';
import SZACtrl from '../assets/css/img/SZACtrl.jpg';
import SnohAalegra from '../assets/css/img/SnohAalegra.jpg';
import AriLennoxSheaButterBaby from '../assets/css/img/AriLennoxSheaButterBaby.jpg';
import JazmineSullivanHeauxTales from '../assets/css/img/JazmineSullivanHeauxTales.jpg';
import ChloeHalleUngodlyHour from '../assets/css/img/ChloeHalleUngodlyHour.jpg';

/* CSS */
import '../assets/css/Landing.css';

export default class Landing extends Component {
  render() {
    const albums = [
      {
        id: '1463027710',
        artistName: 'Megan THee Stallion',
        artWork: MeganTheeStallionFever,
        collectionName: 'Fever',
      },
      {
        id: '1239976329',
        artistName: 'SZA',
        artWork: SZACtrl,
        collectionName: 'Ctrl',
      },
      {
        id: '1569917231',
        artistName: 'Snoh Aalegra',
        artWork: SnohAalegra,
        collectionName: 'TEMPORARY HIGHS IN THE VIOLET SKIES',
      },
      {
        id: '1462482035',
        artistName: 'Ari Lennox',
        artWork: AriLennoxSheaButterBaby,
        collectionName: 'Shea Butter Baby',
      },
      {
        id: '1547280994',
        artistName: 'Jazmine Sullivan',
        artWork: JazmineSullivanHeauxTales,
        collectionName: 'Heaux Tales',
      },
      {
        id: '1512283811',
        artistName: 'Chloe x Halle',
        artWork: ChloeHalleUngodlyHour,
        collectionName: 'Ungodly Hour',
      },
    ];
    return (
      <div className="container-landing">
        <header>
          <Header />
        </header>
        <main className="container-home">
          <section className="container-home-search-img">
            <SearchBar className="home-search" />
            <img className="home-img" src={ latestsHits } alt="Latest's Hits" />
            <div className="home-discover-viewall">
              <p className="home-discover">Discover</p>
              <p className="home-viewall">view all</p>
            </div>
          </section>
          <section className="container-home-albums">
            {albums.map((list, index) => (
              <div className="home-albums" key={ index }>
                <Link to={ `/album/${list.id}` }>
                  <div className="container-albums">
                    <img
                      className="albums-img"
                      src={ list.artWork }
                      alt={ list.collectionName }
                    />
                    <div className="albums-name-artist">
                      <p className="albums-name">{list.collectionName}</p>
                      <p className="albums-artist">{list.artistName}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }
}
