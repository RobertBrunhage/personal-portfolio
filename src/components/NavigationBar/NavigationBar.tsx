import React, { createRef } from 'react';
import styles from './NavigationBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends React.Component {
  constructor(props: never) {
    super(props);
    this.toggleMobileNavbar = this.toggleMobileNavbar.bind(this);
  }

  private mainNavRef = createRef<HTMLUListElement>()

  toggleMobileNavbar() {
    const navNode = this.mainNavRef.current;

    if (navNode != null) {
      navNode.classList.toggle(styles.active);
    }
  }

  render() {
    return (
      <nav className={styles.navbar} data-testid="NavigationBar">
        <a href="#" className={styles.logo}>logo</a>
        <FontAwesomeIcon className={styles.navbarToggle} onClick={this.toggleMobileNavbar} icon={faBars} />
        <ul className={styles.mainNav} ref={this.mainNavRef}>
          <li>
            <a href="#" className={styles.navLinks}>Home</a>
          </li>
          <li>
            <a href="#" className={styles.navLinks}>Products</a>
          </li>
          <li>
            <a href="#" className={styles.navLinks}>About Us</a>
          </li>
          <li>
            <a href="#" className={styles.navLinks}>Contact Us</a>
          </li>
          <li>
            <a href="#" className={styles.navLinks}>Blog</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavigationBar;
