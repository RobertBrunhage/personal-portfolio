import React, { Dispatch, SetStateAction } from 'react';
import styles from './FullscreenModal.module.scss';
import styleHelper from '../../Helper.module.scss';

interface Modal {
  isOpen: boolean,
  setModalState: Dispatch<SetStateAction<boolean>>,
  title: string
}

const FullscreenModal: React.FC<Modal> = (props) => {
  if (!props.isOpen) {
    document.body.classList.remove("modal-open");
    return null;
  }
  document.body.classList.add("modal-open");

  return (
    <div className={styles.FullscreenModal} data-testid="FullscreenModal">
      <div className={`${styleHelper.MaxWidthContainer} ${styles.Center}`}>
        <a onClick={() => props.setModalState(false)} className={styles.CloseModalBtn}>&times;</a>

        <div className={styles.ModalContent}>
          <h1 className={styles.ModalHeader}>{props.title}</h1>
          {props.children}
        </div>
      </div>

    </div>
  )
};

export default FullscreenModal;
