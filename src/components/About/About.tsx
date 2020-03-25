import React from 'react';
import styles from './About.module.scss';
import helperStyles from '../../Helper.module.scss';
import Header from '../shared/Header/Header';
import Avatar from '../Avatar/Avatar';

import avatarImage from '../../assets/avatar.webp'

const About: React.FC = () => (
  <section className={styles.AboutSection} data-testid="About">
    <div className={`${styles.Container} ${helperStyles.MaxWidthContainer}`} >
      <div className={styles.Header}>
        <Header title="ABOUT" />
      </div>
      <div className={styles.About}>
        <Avatar background={avatarImage} />
        <h2>Who this?</h2>
        <p>I'm a software engineer in currently based in Mölndal, Sweden. I have serious passion for developing solutions that fits you.</p>
      </div>
      <div className={styles.Skills}>

      </div>
    </div>

  </section>
);

export default About;
