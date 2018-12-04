import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';
import Video from './components/Video/Video';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar/>
        <HeroText />
        <Video />
      </div>
    );
  }
}

export default App;
