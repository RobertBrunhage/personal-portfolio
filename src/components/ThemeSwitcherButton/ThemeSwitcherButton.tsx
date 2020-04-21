import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcherButton.module.scss';


const ThemeSwitcherButton: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (checkIsLightMode()) {
      setIsLightMode(true);
    }
  }, [])

  function checkIsLightMode(): Boolean {
    return document.body.classList.contains("light");
  }

  function toggleColorTheme(): void {
    if (checkIsLightMode()) {
      document.body.classList.replace("light", "dark");
      setIsLightMode(false);
    } else {
      document.body.classList.replace("dark", "light");
      setIsLightMode(true);
    }
  }

  return (<div onClick={toggleColorTheme} className={styles.ThemeSwitcherButton} data-testid="ThemeSwitcherButton">
    {isLightMode ? "Dark" : "Light"}
  </div>)
};

export default ThemeSwitcherButton;
