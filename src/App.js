import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <h3>Add this title and rebuild</h3>
          <p>All of the rebuild stuff should happen with Jenkins....</p>
          <p>Just adding another line of text.</p>
        </main>
      </div>
    );
  }
}

export default App;
