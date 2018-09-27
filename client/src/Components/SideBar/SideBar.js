import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './sideBar.css';
import logo from '../Images/logo.png';

class SideBar extends Component {

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }


  handleClick = e => {
    if(this.props.isVisible && !ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.toggleSideBar();
    }
  }

  render() {
    return (
      <div className="sideBar" style={{width: this.props.isVisible ? "23%" : "0"}}>
        <img className="logo" style={{marginLeft:"15%", marginBottom: "5%", marginTop: "0"}} src={logo}></img>
        <a>Trending</a>
        <a>History</a>
        <a>Browse Categories</a>
        <a>Browse Channels</a>
      </div>
    );
  }
}

export default SideBar;
