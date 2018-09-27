import React, { Component } from 'react';
import './highlight.css';


class Highlight extends Component {

  render() {
    return (
      <div className="highlight">
        <h2>Highlighted</h2>
        <div className="cascade">
          <button className="arrow-button">&#60;</button>
          <img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/2O0VXeG/close-up-of-handsome-man-putting-on-blue-headphones-and-listening-to-music-graded_ev-ew_yue__F0010.png"></img>
          <button className="arrow-button">&#62;</button>
        </div>
      </div>

    );
  }
}

export default Highlight;
