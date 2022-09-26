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

const projektData = {
  title: 'Projekt',
  text: 'Jag har valt att endast lyfta fram ett projekt på min portfolio. Anledningen till det är att detta projekt är ett skarpt projekt, en affiliate webbplats som jag aktivt arbetar med.Webbplatsen är voii.se och det är en webbplats som underlättar när man behöver hitta ett nytt mobilabonnemang.Webbplatsen är skriven med Next.js (React), TypeScript och Tailwind CSS. Webbplatsen nyttjar ett headless CMS (Contentful) och data kring abonnemangen hämtas in från en server jag skapat.För att hantera datan kring mobilabonnemang och mobiltelefoner har jag skapat en node / express server. Även för servern använder jag mig av TypeScript då det är grymt.',
  image1Url: '/bilder/projekt/voii-projekt-desktop.svg',
  image1Alt: 'voii.se desktop',
  image2Url: '/bilder/projekt/voii-projekt-mobil.svg',
  image2Alt: 'voii.se mobile',
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
      '2017 - 2019 E-handelslogistiker / E-commerce manager (Nässjö Akademin)',
  },
  {
    title: '2020 - Frontend Developer (Changemakers education)',
  },
  {
    title: '2021 - Fullstack JavaScript (Mölndals yh)',
  },
  {
    title:
      '2021 - 2023 Frontend Developer (EC Educations), fokus på Mern Stacken',
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
          subTitle="Jag är en JavaScript / TypeScript utvecklare med primärt fokus på Frontend som söker jobb som utvecklare."
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
        <Projekt
          title={projektData.title}
          text={projektData.text}
          image1Url={projektData.image1Url}
          image1Alt={projektData.image1Alt}
          image2Url={projektData.image2Url}
          image2Alt={projektData.image2Alt}
        />
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
