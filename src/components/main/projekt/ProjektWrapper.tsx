import React from 'react';
import ProjektImgWrapper from './ProjektImgWrapper';

import styles from '../../../styles/pages/Projekt.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
  imageDesktopUrl: string;
  imageDesktopAlt: string;
  imageMobileUrl: string;
  imageMobileAlt: string;
};

function ProjektWrapper({
  title,
  children,
  imageDesktopUrl,
  imageDesktopAlt,
  imageMobileUrl,
  imageMobileAlt,
}: Props) {
  return (
    <div className={styles.projekt}>
      <h3>{title}</h3>
      {children}
      <ProjektImgWrapper
        imageDesktopUrl={imageDesktopUrl}
        imageDesktopAlt={imageDesktopAlt}
        imageMobileUrl={imageMobileUrl}
        imageMobileAlt={imageMobileAlt}
      />
    </div>
  );
}

export default ProjektWrapper;
