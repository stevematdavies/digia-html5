import React, { Component } from 'react';
import Header from './components/header/Header';
import Router from './routing/Router';

class App extends Component {
  render() {
    return (
      <div className="app">
         <Header />
         <Router></Router>  
      </div>
    );
  }
}

export default App;
