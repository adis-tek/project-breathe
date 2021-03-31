import './App.css';
import React, { useEffect } from 'react';
//COMPONENTS AND PAGES
import Home from './pages/Home';
import HomeGraphs from './pages/HomeGraphs';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Home />
      <HomeGraphs />
    </div>
  );
}

export default App;
