import React from 'react';
import './App.css';
import UsersInfo from './components/hooks/contextAPI/UsersInfo';
import UsersStore from './components/hooks/contextAPI/UsersStore';

function App() {
  return (
    <UsersStore>
      <UsersInfo />
    </UsersStore>
  );
}

export default App;
