import * as React from 'react';

// styles
import styles from './Wrapper.module.scss';

type Props = {
  children: React.ReactNode;
  cssClass?: string;
};

export const Wrapper = ({ children, cssClass }: Props) => {
  return <div className={`${styles.wrapper} ${cssClass}`}>{children}</div>;
};

// export const ContentWrapper = ({ children }: Props) => {
//   return <div className={styles.contentWrapper}>{children}</div>;
// };
