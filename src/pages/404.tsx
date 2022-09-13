// imports
import Link from 'next/link';

// components
import { Wrapper } from '../components/layout';

// helpers

// styles
import styles from '../styles/pages/NotFound.module.scss';

export default function NotFound() {
  return (
    <>
      <Wrapper>
        <div className={styles.notfound_wrapper}>
          <div className={styles.notfound_img_wrapper}></div>
          <div className={styles.notfound_text_wrapper}>
            <h1>We rolled a one on perception to find this page.</h1>
            <p> Critical fail - 404 - page not found </p>
            <Link href="/">
              <a className={styles.notfound_button}>Go back to the homepage</a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
