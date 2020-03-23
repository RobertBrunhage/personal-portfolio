import React from 'react';
import styles from './Hero.module.scss';
import Cta from '../shared/Cta/Cta';
import NavigationBar from '../NavigationBar/NavigationBar';

const Hero: React.FC = () => (
  <div className={styles.Hero} data-testid="Hero">
    <NavigationBar />
    <h1 className={styles.navbarPaddingTop}>Hi, I'm Robert. <br /> A software Engineer.</h1>
    <Cta />
  </div>
);

export default Hero;
