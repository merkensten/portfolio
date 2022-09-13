import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SEO } from '../components/seo';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SEO
        title="Mattis Erkensten"
        description="Mattis Erkensten Frontend Utvecklare"
        image="/favicon.svg"
        pageUrl="https://mattiserkensten.se"
      />

      <main className={styles.main}>
        <h1>Mattis Portfolio</h1>
        <img src="/bilder/mattis/mattis-hero-bild.png" alt="Mattis bild" />
        <img
          src="/bilder/verktyg/verktyg-1.svg"
          alt="Mattis bild"
          className="verktyg-img"
        />
        <img
          src="/bilder/verktyg/verktyg-2.svg"
          alt="Mattis bild"
          className="verktyg-img"
        />
        <img
          src="/bilder/verktyg/verktyg-3.svg"
          alt="Mattis bild"
          className="verktyg-img"
        />
        <img
          src="/bilder/verktyg/verktyg-4.svg"
          alt="Mattis bild"
          className="verktyg-img"
        />
        <img
          src="/bilder/projekt/voii-projekt-mobil.svg"
          alt="Mattis bild"
          className="verktyg-img"
        />
        <img
          src="/bilder/projekt/voii-projekt-desktop.svg"
          alt="Mattis bild"
          className="verktyg-img"
        />
      </main>
    </div>
  );
};

export default Home;
