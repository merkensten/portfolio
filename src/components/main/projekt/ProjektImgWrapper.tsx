import React from 'react';
import ProjektImg from './ProjektImg';

import styles from './Projekt.module.scss';

type Props = {
  imageDesktopUrl: string;
  imageDesktopAlt: string;
  imageMobileUrl: string;
  imageMobileAlt: string;
};

function ProjektImgWrapper({
  imageDesktopUrl,
  imageDesktopAlt,
  imageMobileUrl,
  imageMobileAlt,
}: Props) {
  return (
    <div className={styles.projekt_img_wrapper}>
      <img
        className={styles.projekt_img_1}
        src={imageDesktopUrl}
        alt={imageDesktopAlt}
      />
      <img
        className={styles.projekt_img_2}
        src={imageMobileUrl}
        alt={imageMobileAlt}
      />
    </div>
  );
}

export default ProjektImgWrapper;
