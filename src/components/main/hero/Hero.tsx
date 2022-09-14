import React from 'react';
import { Wrapper } from '../../layout';

import styles from './Hero.module.scss';

type Props = {
  title: string;
  subTitle: string;
  imgUrl: string;
  imgAlt: string;
};

function Hero({ title, subTitle, imgUrl, imgAlt }: Props) {
  return (
    <Wrapper cssClass={styles.hero_wrapper}>
      <div className={styles.hero_content_wrapper}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <img className={styles.hero_img} src={imgUrl} alt={imgAlt} />
    </Wrapper>
  );
}

export default Hero;
