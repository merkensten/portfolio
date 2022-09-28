import React from 'react';
import { Wrapper } from '../../layout';

import styles from './Kontakt.module.scss';

function Kontakt() {
  return (
    <Wrapper cssClass={styles.kontakt_wrapper}>
      <h2 id="kontakt">Kontakta Mig</h2>
      <p>
        Hör gärna av dig om du letar efter en frontend / javascript utvecklare.
      </p>
      <p className={styles.kontakt_mail_link}>
        / <a href="mailto:m.erkensten@icloud.com">m.erkensten@icloud.com</a>
      </p>
    </Wrapper>
  );
}

export default Kontakt;
