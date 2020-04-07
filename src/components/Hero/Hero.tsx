import React from 'react';
import styles from './Hero.module.scss';
import Cta from '../shared/Cta/Cta';

const Hero: React.FC = () => (
  <div id="hero" className={[styles.Hero, styles.navbarPaddingTop].join(" ")} data-testid="Hero">
    <h1 className={styles.header}>Hello, I'm Robert Brunhage. <br /> I'm a software engineer.</h1>
    <div className={styles.cta}><Cta /></div>
  </div>
);

export default Hero;
