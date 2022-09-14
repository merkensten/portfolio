import React from 'react';
import { Wrapper } from '../../layout';

import styles from './Verktyg.module.scss';

type Image = {
  url: string;
  alt: string;
};

type Props = {
  title: string;
  images: Image[];
};

function Verktyg({ title, images }: Props) {
  return (
    <Wrapper cssClass={styles.verktyg_wrapper}>
      <h2 className={styles.verktyg_title}>{title}</h2>
      <div className={styles.verktyg_img_wrapper}>
        {images &&
          images.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              className={styles.verktyg_img}
              key={image.url}
            />
          ))}
      </div>
    </Wrapper>
  );
}

export default Verktyg;
