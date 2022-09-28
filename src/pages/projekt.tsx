import React from 'react';
import { Hero, ProjektImgWrapper, ProjektWrapper } from '../components/main';

import styles from '../styles/pages/Projekt.module.scss';

function projekt() {
  return (
    <>
      <Hero
        title="Mina projekt"
        subTitle="Jag har skapat flera projekt under åren, både skarpa projekt i företag och som del av min utbildning. Nedan kan du läsa mer om de projekt som jag valt att lyfta fram."
        imgUrl="/bilder/projekt-hero.svg"
        imgAlt="Mattis Portfolio Projekt Hero bild illustration"
      />
      <div className={styles.projekt_wrapper}>
        <h2>Projekten</h2>

        <ProjektWrapper
          title="Voii"
          imageDesktopUrl="/bilder/projekt/voii-projekt-desktop.svg"
          imageDesktopAlt="voii desktop version"
          imageMobileUrl="bilder/projekt/voii-projekt-mobil.svg"
          imageMobileAlt="voii mobil version"
        >
          <p>
            Voii är mitt primära utvecklingsprojekt vid sidan av utbildningen.
            Detta är ett aktivt projekt som jag jobbar med. Jag håller på att
            bygga om hela webbplatsen då den nuvarande webbplatsen var
            undermålig och att den inte har arbetats aktivt med. Den nya
            webbplatsen byggs upp med Next.js, Nest JS för att hantera data och
            Contentful CMS för att hantera innehållet.
          </p>
          <p>
            Detta projekt är inte deployat på den riktiga domänen än utan är
            fortfarande i utvecklingsläge i någon vecka till.
          </p>
          <p>
            Voii.se är en webbplats som skall underlätta när man letar efter ett
            nytt mobilabonnemang med eller utan telefon.
          </p>
        </ProjektWrapper>

        <ProjektWrapper
          title="Todo app Next.js Nest JS"
          imageDesktopUrl="/bilder/projekt/voii-projekt-desktop.svg"
          imageDesktopAlt="voii desktop version"
          imageMobileUrl="bilder/projekt/voii-projekt-mobil.svg"
          imageMobileAlt="voii mobil version"
        >
          <p>
            Detta är ett projekt som jag nyligen skapat för att lära mig mer om
            Nest JS men också för att ha ett projekt som jag kan visa upp koden
            för och där ni kan få en uppfattning om hur projekt som jag skapat
            ser ut. Detta projekt är en simpel todo applikation som är skapad
            med Next.js för frontend och Nest.js för backend. Jag använder mig
            av Mongo DB som databas, den körs genom tjänsten Mongo DB Atlas.
          </p>
          <a
            href="https://github.com/merkensten/todoapp-nextjs-nestjs"
            target="_blank"
            rel="noreferrer"
          >
            Github repot för detta projekt
          </a>
        </ProjektWrapper>
        <ProjektWrapper
          title="E-dice"
          imageDesktopUrl="/bilder/projekt/voii-projekt-desktop.svg"
          imageDesktopAlt="voii desktop version"
          imageMobileUrl="bilder/projekt/voii-projekt-mobil.svg"
          imageMobileAlt="voii mobil version"
        >
          <p>
            Ett av de större projekten under frontend utbildningen på
            ec-utbildning var att skapa en e-handel i grupp. Min grupp valde att
            skapa det fiktiv företaget E-dice där man kan köpa coola tärningar.
            Projektet byggdes upp i tre delar, clienten, server och en admin
            app.
          </p>
          <p>
            Clienten är frontenden för e-handeln där kunden kan se produkter,
            lägga beställningar samt se sina beställningar i inloggat läge.
            Clienten skapades med Next.js och sidorna byggs upp statiskt.
          </p>
          <p>
            Admin appen är där man primärt kan hantera produkterna och
            beställningarna för e-handeln. Admin appen skapades create-react-app
            och är en single page application.
          </p>
          <p>
            Servern sköter om all hantering av datan och jobbar mot en MongoDB
            databas. Servern är skapad med Express.
          </p>
          <h4>Länkar till github:</h4>
          <ul>
            <li>
              <a
                href="https://github.com/merkensten/admin-edice"
                target="_blank"
                rel="noreferrer"
              >
                Edice Admin app
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kajberg84/Edice-front"
                target="_blank"
                rel="noreferrer"
              >
                E-dice Frontend
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kajberg84/edice-back"
                target="_blank"
                rel="noreferrer"
              >
                E-dice Backend
              </a>
            </li>
          </ul>
        </ProjektWrapper>

        <h2>Övriga projekt:</h2>
        <ProjektWrapper
          title="Stensholms Trädgård"
          imageDesktopUrl="/bilder/projekt/voii-projekt-desktop.svg"
          imageDesktopAlt="voii desktop version"
          imageMobileUrl="bilder/projekt/voii-projekt-mobil.svg"
          imageMobileAlt="voii mobil version"
        >
          <p>
            Ett projekt som jag gjort i mitt företag där jag skapat en webbplats
            åt ett lokalt företag i min hemstad. Webbplatsen är skapad med
            Wordpress och Woocommerce och syftet med webbplatsen är att den ska
            fungera som en lokal e-handel för företaget.
          </p>
          <a
            href="https://stensholmstradgard.se/"
            target="_blank"
            rel="noreferrer"
          >
            Till Stensholms Trädgård
          </a>
        </ProjektWrapper>
        <ProjektWrapper
          title="Caferangen"
          imageDesktopUrl="/bilder/projekt/voii-projekt-desktop.svg"
          imageDesktopAlt="voii desktop version"
          imageMobileUrl="bilder/projekt/voii-projekt-mobil.svg"
          imageMobileAlt="voii mobil version"
        >
          <p>
            Denna webbplats är skapad med Squarespace, anledning till valet på
            Squarespace var att de anställda på restaurangen själva skall kunna
            uppdatera lite design och innehåll på webbplatsen. Mitt primära
            arbete för detta projekt var att ta fram en plan på vilka sidor som
            skulle finnas, flödet på webbplatsen och sedan få detta att mynna ut
            i en design som sedan skulle implementeras i Squarespace. Mycket av
            detta projekt var UX relaterat och jag jobbade mycket med Figma
            innan jag byggde webbplatsen i Squarespace.
          </p>
          <a href="https://www.caferangen.se/" target="_blank" rel="noreferrer">
            Till Caferangen
          </a>
        </ProjektWrapper>
      </div>
    </>
  );
}

export default projekt;
