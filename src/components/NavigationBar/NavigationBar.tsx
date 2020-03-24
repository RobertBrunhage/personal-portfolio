import React, { createRef } from 'react';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC = () => {
  const mainNavRef = createRef<HTMLUListElement>();
  const burgerButtonRef = createRef<HTMLDivElement>();

  return (<nav data-testid="NavigationBar">

    <div data-testid="BurgerButton" className={styles.burgerButton} ref={burgerButtonRef} onClick={() => toggleMobileNavbar(mainNavRef.current, burgerButtonRef.current)}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>

    <ul ref={mainNavRef}>
      <li>
        <a href="/">ABOUT ME</a>
      </li>
      <li>
        <a href="/">MY WORK</a>
      </li>
      <li>
        <a href="/">CONTACT</a>
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
