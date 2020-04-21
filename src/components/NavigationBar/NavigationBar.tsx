import React, { createRef } from 'react';
import styles from './NavigationBar.module.scss';
import stylesHelper from '../../Helper.module.scss';
import ThemeSwitcherButton from '../ThemeSwitcherButton/ThemeSwitcherButton';

const NavigationBar: React.FC = () => {
  const mainNavRef = createRef<HTMLUListElement>();
  const burgerButtonRef = createRef<HTMLDivElement>();

  return (<nav data-testid="NavigationBar">

    <div data-testid="BurgerButton" className={styles.burgerButton} ref={burgerButtonRef} onClick={() => toggleMobileNavbar(mainNavRef.current, burgerButtonRef.current)}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>

    <ul ref={mainNavRef} className={stylesHelper.MaxWidthContainer}>
      <li>
        <ThemeSwitcherButton />
      </li>
      <li>
        <a href="#hero">HOME</a>
      </li>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#my-work">MY WORK</a>
      </li>
      <li>
        <a href="#contact-me">CONTACT</a>
      </li>
    </ul>
  </nav>)
}

function toggleMobileNavbar(navRefCurrent: HTMLUListElement | null, burgerButtonRefCurrent: HTMLDivElement | null) {

  if (navRefCurrent != null && burgerButtonRefCurrent != null) {
    burgerButtonRefCurrent.classList.toggle(styles.change);
    navRefCurrent.classList.toggle(styles.active);
  }
}
export default NavigationBar;
