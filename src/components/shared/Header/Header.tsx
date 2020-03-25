import React from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = props => (
  <h1 className={styles.Header} data-testid="Header">
    {props.title}
  </h1>
);

export default Header;
