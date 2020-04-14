import React from 'react';
import styles from './ProjectBox.module.scss';
import { Clickable } from '../../shared/interfaces/Clickable';

interface ProjectDetails {
  title: string,
  image: string,
}

export const initialProjectState: ProjectDetails = {
  title: "",
  image: "",
}

const ProjectBox: React.FC<ProjectDetails & Clickable> = (props) => (
  <div className={styles.Project} data-testid="Project">
    <img src={props.image} />
    <div className={styles.Overlay}>
      <h2>{props.title}</h2>
      <div className={styles.Button} onClick={props.onClick}>
        <a>Learn more</a>
      </div>
    </div>
  </div>
);

export default ProjectBox;
