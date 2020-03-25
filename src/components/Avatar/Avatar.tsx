import React from 'react';
import styles from './Avatar.module.scss';

interface Avatar {
  background: string;
}

const Avatar: React.FC<Avatar> = props => (
  <img className={styles.Avatar} data-testid="Avatar" src={props.background} />
);

export default Avatar;
