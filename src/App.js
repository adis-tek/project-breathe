import './App.css';
import React, { useState, useEffect } from 'react';
//COMPONENTS AND PAGES
import Home from './pages/Home';
import TopBar from './components/TopBar';
import { set } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
  <>
      <TopBar />
      <Home />
  </>
  );
}

export default App;
