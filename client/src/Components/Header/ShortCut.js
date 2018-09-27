import React, { Component } from 'react';
import './header.css';
import user from '../Images/user.png';
import bell from '../Images/bell.png';
import camera from '../Images/camera.png';


class ShortCut extends Component {
  render() {
    return (
      <div className="shortCut">
        <img className="shortCutElement" src={camera}></img>
        <img className="shortCutElement" src={bell}></img>
        <img className="shortCutElement" src={user}></img>
      </div>
    );
  }
}

export default ShortCut;
