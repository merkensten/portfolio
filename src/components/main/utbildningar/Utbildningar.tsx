import React from 'react';
import { Wrapper } from '../../layout';
import Link from 'next/link';

import styles from './Utbildningar.module.scss';

type Utbildning = {
  title: string;
};

type Props = {
  title: string;
  utbildningar: Utbildning[];
};

function Utbildningar({ title, utbildningar }: Props) {
  return (
    <Wrapper cssClass={styles.utbildningar_wrapper}>
      <h2 id="utbildningar">{title}</h2>
      <ul>
        {utbildningar.map((utbildning) => (
          <li key={utbildning.title}>{utbildning.title}</li>
        ))}
      </ul>
      <Link href="/utbildningar">
        <button className='btn'>Läs mer</button>
      </Link>
    </Wrapper>
  );
}

export default Utbildningar;
