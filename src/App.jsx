import React from 'react';
import './App.css';
import Sequencer from './components/Sequencer/Sequencer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <img alt="drum_logo" src="https://d33wubrfki0l68.cloudfront.net/786a29fb22027b2827fd0679b33417fd3f593518/c2656/images/drum_logo_white_background.png" />
          {' '}
          SEQUENCER
        </h1>
        <h3>by Tommy Barnes</h3>
      </div>
      <div className="App-body">
        <Sequencer />
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
  );
}

export default App;
