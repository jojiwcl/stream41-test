import React, { Component } from 'react';
import search from '../Images/search.png'
import './header.css';

class SearchBar extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search"></input>
          <button className="search-button"><img className="search" src={search}></img></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
