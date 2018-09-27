import React, { Component } from 'react';
import play from './Images/play.png';
import './Video.css';

class Video extends Component {
  render() {
    return (
      <div className="video">
        <img className="videoImage" src={play}></img>
        <div className="videoDetails">
          <label>Video Name</label>
          <label>Streamer Name</label>
          <label>Number of Views</label>
        </div>
      </div>
    )
  }
}

export default Video;
