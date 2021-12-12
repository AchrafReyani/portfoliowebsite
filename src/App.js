import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <>
    <Home/>
    <Projects/>
    <Resume/>
    <Contact/>
    </>
  );
}

export default App;
