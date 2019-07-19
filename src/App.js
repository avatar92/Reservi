import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './component/router.js'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
