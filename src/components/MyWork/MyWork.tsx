import React, { useState, useContext, useEffect } from 'react';
import styles from './MyWork.module.scss';

import styleHelper from '../../Helper.module.scss';
import Header from '../shared/Header/Header';

import FullscreenModal from '../FullscreenModal/FullscreenModal';
import styleModal from '../FullscreenModal/FullscreenModal.module.scss';
import { GoMarkGithub } from "react-icons/go";
import { Project } from '../../models/Project';
import ProjectBox from './Project/ProjectBox';
import { AppContext } from '../../context';

const initialProjectState = new Project(
  "",
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
  const appContext = useContext(AppContext);

  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState(initialProjectState);
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const subscription = appContext.projectKontentService?.listenAll.subscribe(setProjects);
    return () => {
      subscription?.unsubscribe();
    }
  }, [appContext.projectKontentService]);

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
        {projects?.map((project, index) => {
          return (
            <ProjectBox
              title={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              key={index}
              onClick={() => openModal(project)} />
          )
        })}
      </div>
    </div>

    <FullscreenModal isOpen={modalState} setModalState={setModalState} title={selectedProject.title}>
      <div className={styles.ModalContainer}>
        <p className={styles.ModalDate}>{selectedProject.date}</p>
        <img className={styles.ModalImage} src={selectedProject.image} alt={selectedProject.imageAlt} />
        <p className={styles.ModalDescription}>{selectedProject.description}</p>
        <div className={styles.ModalLinkContainer}>
          {selectedProject.githubLink === "" ? null : <a href={selectedProject.githubLink} rel="noopener noreferrer" target="_blank"><GoMarkGithub fontSize="20px" /></a>}
          {selectedProject.webLink === "" ? null : <a href={selectedProject.webLink} rel="noopener noreferrer" target="_blank">{selectedProject.webLinkName}</a>}
          {selectedProject.webLink2 === "" ? null : <a href={selectedProject.webLink2} rel="noopener noreferrer" target="_blank">{selectedProject.webLink2Name}</a>}
        </div>
        <div className={`${styles.ModalButton} ${styleModal.Button}`} onClick={() => setModalState(false)}><span>Close</span></div>
      </div>
    </FullscreenModal>
  </section>)
};

export default MyWork;
