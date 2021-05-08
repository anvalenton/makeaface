
import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import './App.css';
import Canvas from './Canvas';

function App() {
  return (
    <div className="App">
    
      <Canvas />
      <div id='titlediv'>
        <h3>Make</h3>
        <h3>A</h3>
        <h3>Face</h3>
        
      </div>
    </div>
  );
}

export default App;
