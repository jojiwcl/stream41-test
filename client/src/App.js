import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import SideBar from './Components/SideBar/SideBar.js';
import './App.css';
import Highlight from './Components/Highlight/Highlight.js';
import Recommended from './Components/Recommended/Recommended.js';

class App extends Component {
  state = {
    sideBarVisible: false,
  }

  toggleSideBar = () => {
    this.setState({
      sideBarVisible: !this.state.sideBarVisible,
    });
  }



  render() {
    return (
      <div ref={node => { this.node = node; }}>
        <Header toggleSideBar={this.toggleSideBar}/>
        <div className="main">
        <SideBar isVisible={this.state.sideBarVisible} toggleSideBar={this.toggleSideBar}/>
        <div>
          <Highlight />
          <Recommended />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
