import React, { Component } from 'react';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {score: 0}
    }
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h1>{this.state.score}</h1>
                <button>+2</button>
            </div>
        );
        }
}

export default Team;