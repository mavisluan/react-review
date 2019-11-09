import React from 'react';
import './App.css';
import ControlledInput from './components/inputs/ControlledInput';
import {
  RefInput,
  RefInputStateless,
} from './components/inputs/UncontrolledInput';

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
