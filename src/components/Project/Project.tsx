import React from 'react';
import styles from './Project.module.scss';
import { ProjectDetails } from '../../interfaces/ProjectDetails';

const Project: React.FC<ProjectDetails> = ({ title, background }) => (
  <div className={styles.Project} data-testid="Project">
    <img src={background} />
    <div className={styles.Overlay}>
      <h2>{title}</h2>
      <div className={styles.Button}>
        <a>Learn more</a>
      </div>
    </div>
  </div>
);

export default Project;
