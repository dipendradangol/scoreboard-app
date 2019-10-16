import React, { Component } from 'react';
import Team from './components/Team';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Scoreboard</h1>
        <Team name="Jon" />
        <Team name="Frank" />
      </div>
    );
  }
}

export default App;
