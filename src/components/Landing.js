import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import '../assets/css/Landing.css';

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

export default class Landing extends Component {
  render() {
    const albums = [
      {
        id: '1463027710',
        artistName: 'Megan THee Stallion',
        // artWork:
        //   'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/e2/13/6c/e2136c85-a9d3-b91d-ce54-e51dc4f9e926/source/100x100bb.jpg',
        artWork: MeganTheeStallionFever,
        collectionName: 'Fever',
      },
      {
        id: '1239976329',
        artistName: 'SZA',
        artWork: SZACtrl,
        // artWork:
        //   'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/28/7c/52/287c520a-d9d5-33a5-7f2c-6f6ec965471a/source/100x100bb.jpg',
        collectionName: 'Ctrl',
      },
      {
        id: '1569917231',
        artistName: 'Snoh Aalegra',
        artWork: SnohAalegra,
        // artWork:
        //   'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8a/36/b4/8a36b42e-c1fd-cd8d-4e80-a17df149b2d2/source/100x100bb.jpg',
        collectionName: 'TEMPORARY HIGHS IN THE VIOLET SKIES',
      },
      {
        id: '1462482035',
        artistName: 'Ari Lennox',
        // artWork:
        //   'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/06/c7/4c/06c74c15-f342-651f-75a1-47003f1980ab/source/100x100bb.jpg',
        artWork: AriLennoxSheaButterBaby,
        collectionName: 'Shea Butter Baby',
      },
      {
        id: '1547280994',
        artistName: 'Jazmine Sullivan',
        // artWork:
        //   'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/75/50/0d/75500d12-170a-5fdc-9587-d2f11a4b68a1/source/100x100bb.jpg',
        artWork: JazmineSullivanHeauxTales,
        collectionName: 'Heaux Tales',
      },
      {
        id: '1512283811',
        artistName: 'Chloe x Halle',
        // artWork:
        //   'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/72/ee/3c/72ee3c43-729c-3d10-89c9-c778940ce615/source/100x100bb.jpg',
        artWork: ChloeHalleUngodlyHour,
        collectionName: 'Ungodly Hour',
      },
    ];
    return (
      <>
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
      </>
    );
  }
}

/*

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

<Swiper className="mySwiper">
  {albums.map((list, index) => (
    <SwiperSlide className="home-albums" key={ index }>
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
    </SwiperSlide>
  ))}
</Swiper>

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
*/
