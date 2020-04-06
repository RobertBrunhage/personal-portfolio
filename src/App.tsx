import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
