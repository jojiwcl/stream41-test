import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { array: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getHellos();
  }

  getHellos = () => {
    // Get the passwords and store them in state
    fetch('/api/hello')
      .then(res => res.json())
      .then(array => this.setState({ array: array }));
  }

  render() {
    const { array } = this.state.array;

    return (<h1> REACT SERVER IS UP<h1>);
  }
}

export default App;
