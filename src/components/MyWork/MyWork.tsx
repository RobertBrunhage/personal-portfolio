import React, { useState } from 'react';
import styles from './MyWork.module.scss';

import styleHelper from '../../Helper.module.scss';
import Header from '../shared/Header/Header';
import Project, { initialProjectState } from '../Project/Project';

import tempImage from '../../assets/youtube-icon.png'
import { ProjectDetails } from '../../models/ProjectDetails';
import FullscreenModal from '../FullscreenModal/FullscreenModal';
import styleModal from '../FullscreenModal/FullscreenModal.module.scss';
import { GoMarkGithub } from "react-icons/go";

// Todo: replace with "Kontent"
const projects: ProjectDetails[] = [
  {
    title: "YouTube Channel",
    image: tempImage,
    date: "2018-08 - now",
    description: "nice description",
    webLink: "http://www.youtube.com/c/robertbrunhage",
    webLinkName: "YouTube Channel",
    webLink2: "",
    webLink2Name: "",
    githubLink: ""
  }
]

const MyWork: React.FC = () => {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState(initialProjectState);

  const openModal = (selectedProject: ProjectDetails) => {
    setModalState(true);
    setSelectedProject(selectedProject);
  }

  return (<section id="my-work" className={styles.MyWork} data-testid="MyWork">
    <div className={`${styleHelper.SectionContainer} ${styles.Container}`}>
      <div className={styles.Header}>
        <Header title="MY WORK" />
      </div>
      <div className={styles.Projects}>
        {projects.map((project, index) => {
          return (
            <Project
              title={project.title}
              date={project.date}
              description={project.description}
              webLink={project.webLink}
              webLinkName={project.webLinkName}
              webLink2={project.webLink2}
              webLink2Name={project.webLink2Name}
              githubLink={project.githubLink}
              image={project.image}
              key={index}
              onClick={() => openModal(project)} />
          )
        })}
      </div>
    </div>

    <FullscreenModal isOpen={modalState} setModalState={setModalState} title={selectedProject.title}>
      <div className={styles.ModalContainer}>
        <p className={styles.ModalDate}>{selectedProject.date}</p>
        <img className={styles.ModalImage} src={selectedProject.image} alt="project image" />
        <p className={styles.ModalDescription}>{selectedProject.description}</p>
        <div className={styles.ModalLinkContainer}>
          {selectedProject.githubLink === "" ? null : <a href={selectedProject.githubLink} target="_blank"><GoMarkGithub fontSize="20px" /></a>}
          {selectedProject.webLink === "" ? null : <a href={selectedProject.webLink} target="_blank">{selectedProject.webLinkName}</a>}
          {selectedProject.webLink2 === "" ? null : <a href={selectedProject.webLink2} target="_blank">{selectedProject.webLink2Name}</a>}
        </div>
        <div className={`${styles.ModalButton} ${styleModal.Button}`} onClick={() => setModalState(false)}><span>Close</span></div>
      </div>
    </FullscreenModal>
  </section>)
};

export default MyWork;
