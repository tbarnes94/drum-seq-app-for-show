import React from 'react';
import './App.css';
import Sequencer from './Sequencer'

function App() {
  return (
    <div className="App">
      <h1>Drum Sequencer</h1>
      <div className="App-body">
        <Sequencer></Sequencer>
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
  );
}

export default App;
