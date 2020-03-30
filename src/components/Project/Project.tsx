import React from 'react';
import styles from './Project.module.scss';
import { ProjectDetails } from '../../models/ProjectDetails';
import { Clickable } from '../../models/Clickable';

export const initialProjectState: ProjectDetails = {
  title: "",
  image: "",
  date: "",
  description: "",
  webLink: "",
  webLinkName: "",
  webLink2: "",
  webLink2Name: "",
  githubLink: ""
}

const Project: React.FC<ProjectDetails & Clickable> = (props) => (
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

export default Project;
