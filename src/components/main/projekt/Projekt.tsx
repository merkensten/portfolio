import React from 'react';
import { Wrapper } from '../../layout';

import styles from './Projekt.module.scss';

type Props = {
  title: string;
  text: string;
  image1Url: string;
  image1Alt: string;
  image2Url: string;
  image2Alt: string;
};

function Projekt({
  title,
  text,
  image1Url,
  image1Alt,
  image2Url,
  image2Alt,
}: Props) {
  return (
    <Wrapper cssClass={styles.projekt_wrapper}>
      <h2 className={styles.projekt_title}>{title}</h2>
      <p className={styles.projekt_text}>{text}</p>
      <div className={styles.projekt_img_wrapper}>
        <img className={styles.projekt_img_1} src={image1Url} alt={image1Alt} />
        <img className={styles.projekt_img_2} src={image2Url} alt={image2Alt} />
      </div>
    </Wrapper>
  );
  3;
}

export default Projekt;
