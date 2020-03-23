import React from 'react';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC = () => (
  <div className={styles.NavigationBar} data-testid="NavigationBar">
    NavigationBar Component
  </div>
);

export default NavigationBar;
