import './App.css';

import React, { Component } from 'react';

import Router from './routing/Router';

class App extends Component {
  render() {
    return (
      <div>
          <h1>The App</h1>
          <Router></Router>
      </div>
    );
  }
}

export default App;
