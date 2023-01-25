import React from 'react';
import { SEO } from '../components/seo';
import { Hero } from '../components/main';

import styles from '../styles/pages/Utbildningar.module.scss';

function Utbildningar() {
  return (
    <>
      <SEO
        title="Utbildningar"
        description="Mattis Erkensten Utbildningar"
        image="/favicon.svg"
        pageUrl="https://mattiserkensten.se/utbildningar"
      />
      <Hero
        title="Mina utbildningar"
        subTitle="Jag har gått flera utbildningar relaterat till webbutveckling och har även jobbat med webbutveckling i flera år. Jag har också gått en tvåårig utbildning inom e-handel."
        imgUrl="/bilder/utbildningar/utbildningar-hero.svg"
        imgAlt="Mattis Portfolio Utbildningar Hero bild illustration"
      />
      <div className={styles.utbildningar_wrapper}>
        <h2>Utbildningar:</h2>
        <div className={styles.utbildning}>
          <h3>Frontend Developer - EC Educations (2021 - 2023)</h3>
          <p>
            På våren 2021 började jag den tvååriga utbildningen Frontend
            Developer på EC Educations. Detta var helt rätt steg med tanke på
            mina tidigare utbildningar. Under denna utbildning har jag gått från
            att vara relativt ny till programmering till att vara bekväm med
            utveckling av fullstack applikationer. Något som denna utbildningen
            har fokuserat mycket på är det Agila arbetet i grupp och givetvis så
            har vi också foksuerat mycket på versionshantering med git och
            github när vi har jobbat i grupp.
          </p>
          <h4>Kurser som jag läst i denna utbildning:</h4>
          <ul>
            <li>HTML5 och CSS3 med SEO</li>
            <li>JavaScript</li>
            <li>UX-design och grafisk bildredigering</li>
            <li>Kommunikation och agila projektmetoder</li>
            <li>Avancerad JavaSript med Angular</li>
            <li>Avancerad JavaSript med React</li>
            <li>LIA 1, Webbutveckling</li>
            <li>Projekt - agil webbutveckling i JavaScript</li>
            <li>API:er mot backend</li>
            <li>Examensarbete</li>
            <li>LIA 2</li>
          </ul>
        </div>
        <div className={styles.utbildning}>
          <h3>Fullstack JavaScript - Campus Mölndal - Kort Yh (2021)</h3>
          <p>
            Denna utbildningen handlade om fullstack javascript med primärt
            fokus på mernstacken. Utbildningen handlade då primärt om React,
            Node, Express samt MongoDB, det är dessa delar som utgör mern
            stacken. Under utbildningen så skapade vi en spa app med react och
            en server med express, det hela mynnade ut i en simpel crud
            applikation. Det var denna utbildning som fick mig att vilja lära
            mig mer om webbutveckling och att jag ville bli frontend utvecklare.
          </p>
        </div>
        <div className={styles.utbildning}>
          <h3>Frontend Developer - Changemakers education - Kort Yh (2020)</h3>
          <p>
            Detta är den utbildning som gjorde att jag började fokusera fullt ut
            på webbutveckling. Jag sökte denna utbildning då jag på hösten 2020
            inte hade något att göra då jag blev av med det jobb jag hade
            pågrund av covid. Det var väldigt tur att jag sökte denna
            utbildningen då jag verkligen har hittat rätt och tycker att det är
            superkul med webbutveckling. Denna utbildningen var ganska basic och
            fokuserade mest på html och css men även lite vanilla javascript.
          </p>
        </div>
        <div className={styles.utbildning}>
          <h3>
            E-handelslogistiker / E-commerce manager - Nässjö Akademin (2017 -
            2019)
          </h3>
          <p>
            Utbildningen handlade primärt om E-commerce manager delar, med
            mycket fokus på SEO, webbanalyser med Google Analytics,
            konverteringsoptimering, kravställning av ett webbprojekt etc. Det
            var under denna utbildningen som mitt intresse för att skapa
            webbplatser växte. Jag kom igång och började skapa webbplatser med
            wordpress och sidbyggaren elementor och lärde mig grunderna till hur
            man skapar en webbplats med wordpress. Det gick ganska snabbt tills
            att jag insåg att jag ville kunna skapa mer avancerade lösningar och
            det är därför som jag gick vidare i min utbildning och började
            fokusera på frontend och fullstack utveckling inom JavaScript
            stacken.
          </p>
        </div>
      </div>
    </>
  );
}

export default Utbildningar;
