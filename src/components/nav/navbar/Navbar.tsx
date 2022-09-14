import React from 'react';
import { Wrapper } from '../../layout';
import styles from './Navbar.module.scss';
import { HiMenuAlt4 } from 'react-icons/hi';

function Navbar() {
  return (
    <header>
      <Wrapper cssClass={styles.navbar}>
        <p className={styles.logo}>Mattis.</p>
        <div className={styles.mobileMenu}>
          <HiMenuAlt4 className={styles.menuIcon} />
        </div>
        <div className={styles.desktopMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Hem</li>
            <li className={styles.menuItem}>Om</li>
            <li className={styles.menuItem}>Projekt</li>
            <li className={styles.menuItem}>Kontakt</li>
          </ul>
          <button>Kontakt</button>
        </div>
      </Wrapper>
    </header>
  );
}

export default Navbar;
