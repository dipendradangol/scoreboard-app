import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  increaseScore = () => {
    this.setState({
      score: this.state.score + 2
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h1>{this.state.score}</h1>

        <button onClick={this.increaseScore}>+2</button><br/>
        <input placeholder="add points and Enter"></input>
      </div>
    );
  }
}

export default Team;