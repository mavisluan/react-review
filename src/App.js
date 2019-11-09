import React from 'react';
import './App.css';
import ControlledInput from './components/ControlledInput';
import { RefInput, RefInputStateless } from './components/UncontrolledInput';

function App() {
  return (
    <div className="App">
      <ControlledInput />
      <RefInput />
      <RefInputStateless />
    </div>
  );
}

export default App;
