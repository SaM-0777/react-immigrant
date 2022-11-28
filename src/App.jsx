import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './navigation';

import './App.css';


function App({  }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  )
};


export default App;

