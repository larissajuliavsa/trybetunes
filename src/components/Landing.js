import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';

export default class Landing extends Component {
  render() {
    const albums = [
      {
        id: '1463027710',
        artistName: 'Megan THee Stallion',
        artWork:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/e2/13/6c/e2136c85-a9d3-b91d-ce54-e51dc4f9e926/source/100x100bb.jpg',
        collectionName: 'Fever',
      },
      {
        id: '1239976329',
        artistName: 'SZA',
        artWork:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/28/7c/52/287c520a-d9d5-33a5-7f2c-6f6ec965471a/source/100x100bb.jpg',
        collectionName: 'Ctrl',
      },
      {
        id: '1538003494',
        artistName: 'Dua Lipa',
        artWork:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/51/27/9c/51279c15-552e-3885-a234-fedefd3a0082/source/100x100bb.jpg',
        collectionName: 'Future Nostalgia',
      },
      {
        id: '1569917231',
        artistName: 'Snoh Aalegra',
        artWork:
          'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8a/36/b4/8a36b42e-c1fd-cd8d-4e80-a17df149b2d2/source/100x100bb.jpg',
        collectionName: 'TEMPORARY HIGHS IN THE VIOLET SKIES',
      },
      {
        id: '201274359',
        artistName: 'Beyoncé',
        artWork:
          'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg',
        collectionName: 'Dangerously in Love',
      },
      {
        id: '1462482035',
        artistName: 'Ari Lennox',
        artWork:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/06/c7/4c/06c74c15-f342-651f-75a1-47003f1980ab/source/100x100bb.jpg',
        collectionName: 'Shea Butter Baby',
      },
      {
        id: '1547280994',
        artistName: 'Jazmine Sullivan',
        artWork:
          'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/75/50/0d/75500d12-170a-5fdc-9587-d2f11a4b68a1/source/100x100bb.jpg',
        collectionName: 'Heaux Tales',
      },
      {
        id: '1542954264',
        artistName: 'Saweetie',
        artWork:
          'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/fc/8c/8f/fc8c8fb1-281e-1c10-2032-7c707956b359/source/100x100bb.jpg',
        collectionName: 'Best Friend (feat. Doja Cat)',
      },
      {
        id: '1512283811',
        artistName: 'Chloe x Halle',
        artWork:
          'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/72/ee/3c/72ee3c43-729c-3d10-89c9-c778940ce615/source/100x100bb.jpg',
        collectionName: 'Ungodly Hour',
      },
      {
        id: '1440933869',
        artistName: 'Rihanna',
        artWork:
          'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/8d/62/cf/8d62cfde-6ff3-c46c-55be-61c67e9e3879/source/100x100bb.jpg',
        collectionName: 'ANTI (Deluxe)',
      },
    ];
    return (
      <>
        <header>
          <Header />
          <SearchBar />
        </header>
        <main>
          {albums.map((list, index) => (
            <div key={ index }>
              <Link to={ `/album/${list.id}` }>
                <img src={ list.artWork } alt={ list.collectionName } />
                <p>{list.collectionName}</p>
                <p>{list.artistName}</p>
              </Link>
            </div>
          ))}
        </main>
      </>
    );
  }
}
