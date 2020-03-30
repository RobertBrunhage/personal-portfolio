import React from 'react';
import styles from './MyWork.module.scss';

import styleHelper from '../../Helper.module.scss';
import Header from '../shared/Header/Header';
import Project from '../Project/Project';

import background from '../../assets/hero-background.webp'
import { ProjectDetails } from '../../interfaces/ProjectDetails';

const projects: ProjectDetails[] = [
  {
    title: "Testing Project",
    background: background
  },
  {
    title: "Testing Project",
    background: background
  },
  {
    title: "Testing Project",
    background: background
  },
]

const MyWork: React.FC = () => (
  <section className={styles.MyWork} data-testid="MyWork">
    <div className={`${styleHelper.MaxWidthContainer} ${styles.Container}`}>
      <div className={styles.Header}>
        <Header title="MY WORK" />
      </div>
      <div className={styles.Projects}>
        {projects.map((project, index) => {
          return <Project title={project.title} background={project.background} key={index} />
        })}
      </div>
    </div>

  </section>
);

export default MyWork;
