import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <MyWork />
    </div>
  );
}

export default App;
