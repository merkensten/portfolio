import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mattis Erkensten</title>
        <meta
          name="description"
          content="Mattis Erkensten Frontend Utvecklare"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Mattis Portfolio</h1>
      </main>
    </div>
  );
};

export default Home;
