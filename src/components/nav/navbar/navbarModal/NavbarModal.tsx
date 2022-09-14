import React from 'react';
import { useRouter } from 'next/router';
import { NavbarModalItem } from './navbarModalItem/NavbarModalItem';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

import styles from './NavbarModal.module.scss';

type NavbarItem = {
  name: string;
  link: string;
};

type Props = {
  onCloseModal: () => void;
  navbarItems: NavbarItem[];
};

function NavbarModal({ onCloseModal, navbarItems }: Props) {
  const router = useRouter();
  return (
    <div
      className={`${styles.navbar_modal_container}`}
      style={{ overflow: 'hidden' }}
    >
      <div className={`${styles.navbar_modal_wrapper}`}>
        <div className={`${styles.navbar_modal_top_section}`}>
          <Link href="/">
            <a className={styles.logo} onClick={onCloseModal}>
              Mattis.
            </a>
          </Link>
          <AiOutlineCloseCircle
            onClick={onCloseModal}
            className={styles.closeIcon}
          />
        </div>
        <nav>
          <ul className={styles.list_container}>
            {navbarItems.map((item) => {
              return (
                <NavbarModalItem
                  key={item.link}
                  navItem={item}
                  onCloseModal={onCloseModal}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarModal;
