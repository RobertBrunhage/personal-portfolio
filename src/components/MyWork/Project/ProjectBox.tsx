import React from 'react';
import styles from './ProjectBox.module.scss';
import { Clickable } from '../../shared/interfaces/Clickable';

interface ProjectDetails {
  title: string,
  image: string,
  imageAlt: string,
}

export const initialProjectState: ProjectDetails = {
  title: "",
  image: "",
  imageAlt: "initial",
}

const ProjectBox: React.FC<ProjectDetails & Clickable> = (props) => (
  <div className={styles.Project} data-testid="Project">
    <img src={props.image} alt={props.imageAlt} />
    <div className={styles.Overlay}>
      <h2>{props.title}</h2>
      <div className={styles.Button} onClick={props.onClick}>
        <p>Learn more</p>
      </div>
    </div>
  </div>
);

export default ProjectBox;
