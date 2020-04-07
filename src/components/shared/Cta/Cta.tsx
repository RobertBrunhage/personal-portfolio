import React from 'react';
import styles from './Cta.module.scss';

const Cta: React.FC = () => (
  <div className={styles.cta} data-testid="Cta">
    <a href="#my-work"><span>MY WORK</span></a>
  </div>
);

export default Cta;
