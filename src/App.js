import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Contents from './components/Contents';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Contents />
      </BrowserRouter>
    );
  }
}

export default App;
