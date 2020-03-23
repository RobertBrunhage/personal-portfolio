import React from 'react';
import styles from './Hero.module.scss';
import Cta from '../shared/Cta/Cta';

const Hero: React.FC = () => (
  <div className={[styles.Hero, styles.navbarPaddingTop].join(" ")} data-testid="Hero">
    <h1 className={styles.header}>Hi, I'm Robert. <br /> A software Engineer.</h1>
    <div className={styles.cta}><Cta /></div>
  </div>
);

export default Hero;
