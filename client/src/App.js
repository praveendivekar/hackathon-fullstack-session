import React, { Component } from 'react';
import './App.css';

import Lists from './components/lists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fullstack Application</h1>

          <p>The Authentication and Authorization using JWT</p>
        </header>

        <Lists />
      </div>
    );
  }
}

export default App;
