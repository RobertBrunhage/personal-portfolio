import React from 'react';
import styles from './About.module.scss';
import helperStyles from '../../Helper.module.scss';
import Header from '../shared/Header/Header';
import Avatar from '../Avatar/Avatar';

import avatarImage from '../../assets/avatar.webp'
import SkillBar from '../SkillBar/SkillBar';
import { SkillBarDetails } from '../../models/SkillBarDetails';

const skillBars: SkillBarDetails[] = [
  {
    name: "Flutter",
    percent: 90
  },
  {
    name: "React",
    percent: 70
  },
  {
    name: "Angular",
    percent: 40
  },
  {
    name: "Dart",
    percent: 90
  },
  {
    name: "C#",
    percent: 80
  },
  {
    name: "Kotlin",
    percent: 60
  },
  {
    name: "TypeScript",
    percent: 60
  },
  {
    name: "JavaScript",
    percent: 60
  },
  {
    name: "HTML",
    percent: 70
  },
  {
    name: "CSS",
    percent: 70
  },
  {
    name: "Android",
    percent: 50
  },
  {
    name: "Rx",
    percent: 60
  },
]

const About: React.FC = () => (
  <section className={styles.AboutSection} data-testid="About">
    <div className={`${styles.Container} ${helperStyles.MaxWidthContainer}`} >
      <div className={styles.Header}>
        <Header title="ABOUT" />
      </div>
      <div className={styles.About}>
        <Avatar background={avatarImage} />
        <h2>Who this?</h2>
        <p>I'm a software engineer that is currently based in Mölndal, Sweden. I have a serious passion for developing solutions that suits you.</p>
      </div>
      <div className={styles.Skills}>
        {
          // Evaluate if sorting is the corret answer later when using Kontent for CMS.
          skillBars.sort((a, b) => (a.percent > b.percent) ? -1 : 1).map((skill, index) => <SkillBar name={skill.name} percent={skill.percent} key={index} />)
        }
      </div>
    </div>

  </section>
);

export default About;
