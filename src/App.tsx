import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
