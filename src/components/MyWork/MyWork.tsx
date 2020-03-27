import React from 'react';
import styles from './MyWork.module.scss';

import styleHelper from '../../Helper.module.scss';
import Header from '../shared/Header/Header';

const MyWork: React.FC = () => (
  <section className={styles.MyWork} data-testid="MyWork">
    <div className={`${styleHelper.MaxWidthContainer} ${styles.Container}`}>
      <div className={styles.Header}>
        <Header title="MY WORK" />
      </div>
      <div className={styles.Projects}>
      // Map through project list
      </div>
    </div>

  </section>
);

export default MyWork;
