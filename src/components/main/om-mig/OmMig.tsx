import React from 'react';
import { Wrapper } from '../../layout';
import styles from './OmMig.module.scss';

type Props = {
  title: string;
  text1: string;
  text2: string;
  imgUrl: string;
  imgAlt: string;
};

function OmMig({ title, text1, text2, imgUrl, imgAlt }: Props) {
  return (
    <Wrapper cssClass={styles.om_mig_wrapper}>
      <h2 id="om-mig" className={styles.om_mig_title}>
        {title}
      </h2>

      <div className={styles.om_mig_content_wrapper}>
        <img className={styles.om_mig_img} src={imgUrl} alt={imgAlt} />
        <div className={styles.om_mig_content_wrapper_text}>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default OmMig;
