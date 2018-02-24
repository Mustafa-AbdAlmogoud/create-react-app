import React, { Component } from 'react';
import logo from './logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
            First Automated Platform.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
