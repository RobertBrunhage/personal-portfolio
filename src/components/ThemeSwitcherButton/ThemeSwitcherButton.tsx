import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcherButton.module.scss';


const ThemeSwitcherButton: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const LIGHT_MODE = "light";
  const DARK_MODE = "dark";
  const THEME = "theme";

  useEffect(function setThemeFromLocalStorage() {
    let localStorageTheme = localStorage.getItem(THEME);

    if (localStorageTheme != null) {
      if (checkIsLightMode()) {
        document.body.classList.replace(LIGHT_MODE, localStorageTheme);
      } else {
        document.body.classList.replace(DARK_MODE, localStorageTheme);
      }
    }
  }, [])

  useEffect(() => {
    if (checkIsLightMode()) {
      setIsLightMode(true);
    }
  }, [])


  function checkIsLightMode(): Boolean {
    return document.body.classList.contains(LIGHT_MODE);
  }

  function toggleColorTheme(): void {
    if (checkIsLightMode()) {
      document.body.classList.replace(LIGHT_MODE, DARK_MODE);
      localStorage.setItem(THEME, DARK_MODE);
      setIsLightMode(false);
    } else {
      document.body.classList.replace(DARK_MODE, LIGHT_MODE);
      localStorage.setItem(THEME, LIGHT_MODE);
      setIsLightMode(true);
    }
  }

  return (<div onClick={toggleColorTheme} className={styles.ThemeSwitcherButton} data-testid="ThemeSwitcherButton">
    {isLightMode ? "Dark" : "Light"}
  </div>)
};

export default ThemeSwitcherButton;
