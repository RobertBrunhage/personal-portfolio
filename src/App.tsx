import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import ContactMe from './components/ContactMe/ContactMe';
import { Provider } from './context';
import { SkillKontentService } from './services/Kontent/SkillKontentService';

const context = { skillKontentService: new SkillKontentService() };

function App() {
  return (
    <Provider value={context}>
      <div className="App">
        <NavigationBar />
        <Hero />
        <About />
        <MyWork />
        <ContactMe />
      </div>
    </Provider>
  );
}

export default App;
