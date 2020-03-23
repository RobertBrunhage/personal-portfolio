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
      <nav data-testid="NavigationBar">

        <FontAwesomeIcon className={styles.burgerToggle} onClick={this.toggleMobileNavbar} icon={faBars} />

        <ul ref={this.mainNavRef}>
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
      </nav>
    )
  }
}

export default NavigationBar;
