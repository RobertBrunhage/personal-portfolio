import React, { useState } from 'react';
import styles from './MyWork.module.scss';

import styleHelper from '../../Helper.module.scss';
import Header from '../shared/Header/Header';

import tempImage from '../../assets/youtube-icon.png'
import FullscreenModal from '../FullscreenModal/FullscreenModal';
import styleModal from '../FullscreenModal/FullscreenModal.module.scss';
import { GoMarkGithub } from "react-icons/go";
import { Project } from '../../models/Project';
import ProjectBox from './Project/ProjectBox';

// Todo: replace with "Kontent"
const projects: Project[] = [
  new Project(
    "YouTube Channel",
    tempImage,
    "2018-08 - now",
    "nice description",
    "http://www.youtube.com/c/robertbrunhage",
    "",
    "",
    "",
    ""
  )
]

const initialProjectState = new Project(
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
)

const MyWork: React.FC = () => {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState(initialProjectState);

  const openModal = (selectedProject: Project) => {
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
            <ProjectBox
              title={project.title}
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
