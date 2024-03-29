import type { NextPage } from 'next';
import { SEO } from '../components/seo';
import styles from '../styles/pages/Home.module.scss';
import {
  Hero,
  OmMig,
  Projekt,
  Verktyg,
  Utbildningar,
  Kontakt,
} from '../components/main';

const projektInfo = {
  title: 'Projekt',
  text: 'Jag har valt att lyfta utt ett fåtal projekt på min portfolio. Tre av projekten är utvecklade med kod och två av projekten är skapade med wordpress / squarespace, de är verkliga projekt som jag har skapat åt företag. Klicka på knappen nedan för att komma till projekt sidan där du kan läsa mer om alla projekt som jag har skapat samt navigera dig vidare till github repon för de projekt som är öppna.',
};

const verktygImages = [
  { url: '/bilder/verktyg/verktyg-1.svg', alt: 'Verktyg frontend' },
  { url: '/bilder/verktyg/verktyg-2.svg', alt: 'Verktyg backend' },
  { url: '/bilder/verktyg/verktyg-3.svg', alt: 'Verktyg css & blandat' },
  { url: '/bilder/verktyg/verktyg-4.svg', alt: 'Verktyg devops' },
];

const utbildningar = [
  {
    title:
      '2021 - 2023 Frontend Developer (EC Educations)',
  },
  {
    title: '2021 - Fullstack JavaScript (Mölndals yh)',
  },
  {
    title: '2020 - Frontend Developer (Changemakers education)',
  },
  {
    title:
      '2017 - 2019 E-handelslogistiker / E-commerce manager (Nässjö Akademin)',
  },
];

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
        <Hero
          title="Mattis Erkensten"
          subTitle="Jag är en JavaScript / TypeScript utvecklare med primärt fokus på Frontend som söker jobb."
          imgUrl="/bilder/mattis/mattis-hero-bild.png"
          imgAlt="Mattis Portfolio Hero bild"
        />
        <OmMig
          title="Om Mig"
          text1="Hej! Mitt namn är Mattis Erkensten och jag är en glad kille på 25 år som har snöat in mig rejält på fullstack utveckling inom JavaScript / TypeScript stacken med primärt fokus på Mern stacken. Jag tycker om att skapa nya saker och har alltid haft ett driv mot utveckling av mjukvara då man relativt snabbt kan skapa något från grunden och se sin idé växa fram"
          text2="På fritiden tycker jag om att hitta på saker, jag har spelat golf sedan jag var 11 år och det är något som jag tycker om att göra. Det kan bli ett och annat game på warzone när tiden finns. Jag tycker om att lära mig nya saker så på fritiden går jag en del onlinekurser och tittar på ganska mycket Youtube videor som är relaterat till frontend / backend utveckling."
          imgUrl="/bilder/mattis/mattis-bild.png"
          imgAlt="Mattis Portfolio Om Mig bild"
        />
        <Projekt title={projektInfo.title} text={projektInfo.text} />
        <Verktyg
          title="Verktyg som jag har arbetat med"
          images={verktygImages}
        />
        <Utbildningar title="Mina Utbildningar" utbildningar={utbildningar} />
        <Kontakt />
      </main>
    </div>
  );
};

export default Home;
