import React from 'react';
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return (
      <div className="app">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
  
}

export default App;
