import React from 'react';
import { Wrapper } from '../../layout';
import Link from 'next/link';

import styles from './Footer.module.scss';

type FooterLinkItemProps = {
  href: string;
  name: string;
  cssClass?: string;
};

const FooterLinkItem = ({ href, name, cssClass }: FooterLinkItemProps) => {
  return (
    <li className={cssClass}>
      <a href={href} target="blank">
        {name}
      </a>
    </li>
  );
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_border}>
        <div className={styles.footer_border_display}></div>
      </div>
      <Wrapper cssClass={styles.footer_wrapper}>
        <p className={styles.footer_logo}>Mattis.</p>
        <nav>
          <ul>
            <FooterLinkItem
              href="https://github.com/merkensten"
              name="Min Github"
              cssClass={styles.footer_link_item}
            />
            <FooterLinkItem
              href="https://se.linkedin.com/in/mattis-erkensten"
              name="Min LinkedIn"
              cssClass={styles.footer_link_item}
            />
          </ul>
        </nav>
        <Link href="#kontakt">
          <button>Kontakt</button>
        </Link>
      </Wrapper>
    </footer>
  );
}

export default Footer;
