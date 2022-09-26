import React from 'react';
import { Hero } from '../components/main';

import styles from '../styles/pages/Projekt.module.scss';

function projekt() {
  return (
    <>
      <Hero
        title="Mina projekt"
        subTitle="Jag har skapat flera projekt under åren, både skarpa projekt i företag och som del av min utbildning. Vissa projekt är aktiva och andra är inte det längre. Här kan du läsa mer om dem."
        imgUrl="/bilder/projekt-hero.svg"
        imgAlt="Mattis Portfolio Projekt Hero bild illustration"
      />
      <div className={styles.projekt_wrapper}>
        <h2>Projekten</h2>
        <div>
          <h3>Voii</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            obcaecati sapiente natus eligendi dolorem explicabo ducimus ex
            molestias illo eius rerum, velit nesciunt libero amet cumque.
            Nesciunt et deserunt quo architecto, cupiditate, dolores quasi neque
            illum consequatur quisquam repudiandae ipsa?
          </p>
        </div>
        <div>
          <h3>Todo app Next.js Nest JS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            obcaecati sapiente natus eligendi dolorem explicabo ducimus ex
            molestias illo eius rerum, velit nesciunt libero amet cumque.
            Nesciunt et deserunt quo architecto, cupiditate, dolores quasi neque
            illum consequatur quisquam repudiandae ipsa?
          </p>
        </div>
        <div>
          <h3>E-dice</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            obcaecati sapiente natus eligendi dolorem explicabo ducimus ex
            molestias illo eius rerum, velit nesciunt libero amet cumque.
            Nesciunt et deserunt quo architecto, cupiditate, dolores quasi neque
            illum consequatur quisquam repudiandae ipsa?
          </p>
        </div>
        <h2>Övriga projekt:</h2>
        <div>
          <h3>Stensholms Trädgård</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            obcaecati sapiente natus eligendi dolorem explicabo ducimus ex
            molestias illo eius rerum, velit nesciunt libero amet cumque.
            Nesciunt et deserunt quo architecto, cupiditate, dolores quasi neque
            illum consequatur quisquam repudiandae ipsa?
          </p>
        </div>
        <div>
          <h3>Caferangen</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            obcaecati sapiente natus eligendi dolorem explicabo ducimus ex
            molestias illo eius rerum, velit nesciunt libero amet cumque.
            Nesciunt et deserunt quo architecto, cupiditate, dolores quasi neque
            illum consequatur quisquam repudiandae ipsa?
          </p>
        </div>
      </div>
    </>
  );
}

export default projekt;
