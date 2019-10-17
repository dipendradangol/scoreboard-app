import React, { Component } from "react";
import Team from "./components/Team";
import "./App.css";

const players = ["Frank", "Jon", "Dipendra", "Val"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Scoreboard</h1>
        {players.map(player => <Team name={player} /> )}
      </div>
    );
  }
}

export default App;
