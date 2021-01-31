import React from 'react';
import './App.css';
import Song from './components/Song'
import Playlist from './components/Playlist'

function App() {
  return (
    <div className="App">
      <h1>- Song Example - </h1>
      <Song info={{ title: 'Never Gonna Give You Up', artist: 'Rick Astley' }} />
      <Playlist />
    </div>
  );
}

export default App;
