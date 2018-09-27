import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ShortCut from './ShortCut.js';
import './header.css';
import logo from '../Images/logo.png'

class Header extends Component {

  expandMenu = () => {
    setTimeout(
      function() {
          this.props.toggleSideBar();
      }
      .bind(this),
      1
    );

  }

  render() {
    return (
      <div className="header">
        <h2 className="expand-button" onClick={this.expandMenu}>&#8801;</h2>
        <img className="logo" src={logo}></img>
        <SearchBar />
        <ShortCut />
      </div>
    );
  }
}

export default Header;
