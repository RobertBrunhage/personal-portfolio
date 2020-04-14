import React from 'react';
import styles from './About.module.scss';
import helperStyles from '../../Helper.module.scss';
import Header from '../shared/Header/Header';
import Avatar from './Avatar/Avatar';

import avatarImage from '../../assets/avatar.webp'
import SkillBar from './SkillBar/SkillBar';
import { Skill } from '../../models/Skill';

const skillBars: Skill[] = [
  new Skill(
    "Flutter",
    90
  ),
  new Skill(
    "React",
    70
  ),
  new Skill(
    "Angular",
    40
  ),
  new Skill(
    "Dart",
    90
  ),
  new Skill(
    "C#",
    80
  ),
  new Skill(
    "Kotlin",
    60
  ),
  new Skill(
    "TypeScript",
    60
  ),
  new Skill(
    "JavaScript",
    60
  ),
  new Skill(
    "HTML",
    70
  ),
  new Skill(
    "CSS",
    70
  ),
  new Skill(
    "Android",
    50
  ),
  new Skill(
    "Rx",
    60
  ),
]

const About: React.FC = () => (
  <section id="about" className={styles.AboutSection} data-testid="About">
    <div className={`${styles.Container} ${helperStyles.SectionContainer}`} >
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
