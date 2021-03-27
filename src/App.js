import './App.css';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loadStateData } from './actions/stateAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStateData());
  })
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
