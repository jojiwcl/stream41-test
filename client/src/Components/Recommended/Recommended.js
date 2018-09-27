import React, { Component } from 'react';
import Video from '../Video.js';
import './Recommended.css';

class App extends Component {

  render() {
    return (
      <div className="recommended">
        <h2 className="title">Recommended</h2>
        <div className="main">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    );
  }
}

export default App;
