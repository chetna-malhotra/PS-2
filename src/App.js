import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './assets/logo1.png';
import './App.css';
import './index.css';
import Main from './components/MainComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
