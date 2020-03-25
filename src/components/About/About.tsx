import React from 'react';
import styles from './About.module.scss';
import Header from '../shared/Header/Header';
import Avatar from '../Avatar/Avatar';

import background from '../../assets/hero-background.webp'

const About: React.FC = () => (
  <section className={styles.AboutSection} data-testid="About">
    <div className={styles.Header}>
      <Header title="ABOUT" />
    </div>
    <div className={styles.About}>
      <Avatar background={background} />
      <p>Detta handlar om mig bla bla bla blasdlfkhas dlfasd lfkajs dölfkjasdölkfj asöldkfj aölskd fjaölskdf öalsdkf ölasdkj föalskdj fölaskd jfölaskjd fölaskdj fölskdjaf ösdlkfj aödslkf jöalsdk jföalskd jfölaskd faölsdkjf öaslkdjf öalsdfk öalsdkj fölsk jflskdj flskdfj slkdf slkd fsldkf jsldkfj sldkf lskdf sldkfj </p>
    </div>
    <div className={styles.Skills}>

    </div>
  </section>
);

export default About;
