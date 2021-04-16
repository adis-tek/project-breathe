import './App.css';
import React, { useState, useEffect } from 'react';
//COMPONENTS AND PAGES
import Home from './pages/Home';
import TopBar from './components/TopBar';
import { set } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import Announcement from './components/Announcement';

function App() {
  return (
  <>
      <TopBar />
      <Announcement />
      <Home />
  </>
  );
}

export default App;
