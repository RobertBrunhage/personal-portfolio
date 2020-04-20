import React, { useState, useEffect } from 'react';
import styles from './About.module.scss';
import helperStyles from '../../Helper.module.scss';
import Header from '../shared/Header/Header';
import Avatar from './Avatar/Avatar';

import avatarImage from '../../assets/avatar.webp'
import SkillBar from './SkillBar/SkillBar';
import { AppContext } from '../../context';
import { useContext } from "react";
import { Skill } from '../../models/Skill';
import { map } from 'rxjs/operators';

const About: React.FC = () => {
  const appContext = useContext(AppContext);
  const [skills, setSkills] = useState<Skill[]>();

  useEffect(() => {
    const subscription = appContext.skillKontentService?.listenAll.pipe(
      map((skills) => skills.sort((a, b) => (a.percent > b.percent) ? -1 : 1))
    ).subscribe(setSkills);
    return () => {
      subscription?.unsubscribe();
    }
  }, [appContext.skillKontentService]);

  return (<section id="about" className={styles.AboutSection} data-testid="About">
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
          skills?.map((skill, index) => <SkillBar name={skill.name} percent={skill.percent} key={index} />)
        }
      </div>
    </div>

  </section>
  )
};

export default About;
