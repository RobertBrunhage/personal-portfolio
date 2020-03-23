import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default App;
