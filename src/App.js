import './App.css';

import React, { Component } from 'react';

import Header from './components/header/Header';
import Router from './routing/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <div className="app-container">
            <Router></Router>
         </div>
      </div>
    );
  }
}

export default App;
