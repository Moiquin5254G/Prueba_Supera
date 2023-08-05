import './App.css';
import React from 'react';
import Home from './home';
import { NavBar } from './components/NavBar/index';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;