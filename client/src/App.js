import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { array: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getHellos = () => {
    // Get the passwords and store them in state
    fetch('/api/hello')
      .then(res => res.json())
      .then(array => this.setState({ array }));
  }

  render() {
    const { array } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {array.length ? (
          <div>
            <h1>5 Hellos.</h1>
            <ul className="passwords">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {array.map((hello, index) =>
                <li key={index}>
                  {hello}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getHellos}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getHellos}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
