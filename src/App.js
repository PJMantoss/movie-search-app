import React from 'react';
import SearchMovie from './SearchMovie';
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
      </div>
    );
  }
  
}

export default App;
