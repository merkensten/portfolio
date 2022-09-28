import React from 'react';
import Link from 'next/link';
import { Wrapper } from '../../layout';

import styles from './Projekt.module.scss';

type Props = {
  title: string;
  text: string;
};

function Projekt({ title, text }: Props) {
  return (
    <Wrapper cssClass={styles.projekt_wrapper}>
      <h2 id="projekt" className={styles.projekt_title}>
        {title}
      </h2>
      <p className={styles.projekt_text}>{text}</p>
      <Link href="/projekt">
        <button className='btn'>Till mina projekt</button>
      </Link>
    </Wrapper>
  );
  3;
}

export default Projekt;
