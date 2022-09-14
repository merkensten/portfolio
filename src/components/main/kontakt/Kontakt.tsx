import React from 'react';
import { Wrapper } from '../../layout';

import styles from './Kontakt.module.scss';

function Kontakt() {
  return (
    <Wrapper cssClass={styles.kontakt_wrapper}>
      <h2>Kontkta Mig</h2>
      <p>
        Hör gärna av dig om du letar efter en frontend / javascript utvecklare.
      </p>
      <p className={styles.kontakt_mail_link}>
        / <a href="mailto:mattis@voii.se">mattis@voii.se</a>
      </p>
    </Wrapper>
  );
}

export default Kontakt;
