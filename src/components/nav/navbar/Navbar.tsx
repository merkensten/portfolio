import React from 'react';
import { Wrapper } from '../../layout';
import styles from './Navbar.module.scss';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarItems } from './navbarItems';
import NavItem from './NavItem';
import Link from 'next/link';
import NavbarModal from './navbarModal/NavbarModal';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(NavbarItems);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <header>
      <Wrapper cssClass={styles.navbar}>
        {!isOpen && (
          <>
            <Link href="/">
              <a className={styles.logo}>Mattis.</a>
            </Link>
            <div className={styles.mobileMenu}>
              <HiMenuAlt4
                onClick={() => setIsOpen(!isOpen)}
                className={styles.menuIcon}
              />
            </div>
            <nav className={styles.desktopMenu}>
              <ul className={styles.menuList}>
                {NavbarItems.map((item) => {
                  return (
                    <NavItem
                      key={item.link}
                      navItem={item}
                      cssClass={styles.menuItem}
                    />
                  );
                })}
              </ul>
              <Link href="/#kontakt">
                <button>Kontakt</button>
              </Link>
            </nav>
          </>
        )}
        {isOpen && (
          <NavbarModal
            onCloseModal={() => setIsOpen(false)}
            navbarItems={NavbarItems}
          />
        )}
      </Wrapper>
    </header>
  );
}

export default Navbar;
