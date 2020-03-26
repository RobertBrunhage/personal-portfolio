import React from 'react';
import styles from './SkillBar.module.scss';
import CSS from 'csstype';
import { SkillBarDetails } from '../../interfaces/SkillBarDetails';

const SkillBar: React.FC<SkillBarDetails> = ({ name, percent }) => {

  const SkillBarPercentStyle: CSS.Properties = {
    backgroundColor: "#2facbd",
    height: "100%",
    width: `${percent}%`,
  }
  if (percent > 100) {
    return (<p>percent can not be higher than 100, you have {percent} for {name}</p>)
  }
  return (
    <div className={styles.SkillBarBackground} data-testid="SkillBar">
      <div className={styles.SkillBarLabel} >
        <p>{name}</p>
      </div>
      <div className={styles.SkillBarPercentContainer} >
        <div style={SkillBarPercentStyle} className={styles.SkillBarPercent}>

        </div>
      </div>
    </div>
  )
};

export default SkillBar;
