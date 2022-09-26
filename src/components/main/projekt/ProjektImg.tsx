import React from 'react';

type Props = {
  imgUrl: string;
  imgAlt: string;
  cssClass: string;
};

function ProjektImg({ imgUrl, imgAlt, cssClass }: Props) {
  return <img className={cssClass} src={imgUrl} alt={imgAlt} />;
}

export default ProjektImg;
