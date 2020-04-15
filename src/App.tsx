import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import ContactMe from './components/ContactMe/ContactMe';
import { Provider, Services } from './context';
import { SkillKontentService } from './services/Kontent/SkillKontentService';
import { ProjectKontentService } from './services/Kontent/ProjectKontentService';

const context: Services = {
  skillKontentService: new SkillKontentService(),
  projectKontentService: new ProjectKontentService()
};

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
