import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Crimes from './components/Crimes';
import Purpose from './components/Purpose';
import Warnings from './components/Warnings';
import Community from './components/Community';
import Reality from './components/Reality';
import Social from './components/Social';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Crimes />
      <Purpose />
      <Warnings />
      <Community />
      <Reality />
      <Social />
    </div>
  );
}

export default App;