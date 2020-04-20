import React from 'react';
import styles from './SocialButtons.module.scss';
import { GoMarkGithub } from 'react-icons/go';
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const SocialButtons: React.FC = () => (
  <div className={styles.SocialButtons} data-testid="SocialButtons">
    <a href={"https://www.youtube.com/c/robertbrunhage"} rel="noopener noreferrer" target="_blank"><FaYoutube fontSize="20px" color={"red"} /></a>
    <a href={"https://github.com/RobertBrunhage"} rel="noopener noreferrer" target="_blank"><GoMarkGithub fontSize="20px" color={"black"} /></a>
    <a href={"https://twitter.com/RobertBrunhage"} rel="noopener noreferrer" target="_blank"><FaTwitter fontSize="20px" color={"#1DA1F2"} /></a>
    <a href={"https://www.facebook.com/Robert-Dev-282692108946887"} rel="noopener noreferrer" target="_blank"><FaLinkedin fontSize="20px" color={"#0077B5"} /></a>
  </div>
);

export default SocialButtons;
