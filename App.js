import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Movie Search</h1>
        </header>
        <Movielist/>
      </div>
    );
  }
}




export default App;