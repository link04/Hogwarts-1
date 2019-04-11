import React, { Component } from 'react';
import CharactersContainer from './components/CharactersContainer';

import './App.css';
import './style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CharactersContainer />
        </header>
      </div>
    );
  }
}

export default App;
