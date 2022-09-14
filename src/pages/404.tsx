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
          <h1>404 - sidan hittades inte...</h1>
          <Link href="/">
            <button>Gå tillbaka till startsidan</button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
