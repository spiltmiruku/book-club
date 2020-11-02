import React from "react";
import "./history.css";

import funhome from "../../resources/previousbooks/fun-home-may-2019.jpg";
import oscarwao from "../../resources/previousbooks/the-brief-wondrous-live-of-oscar-wao-july-2019.png";
import ourkids from "../../resources/previousbooks/our-kids-the-american-dream-in-crisis-august-2019.jpg";
import lysistrata from "../../resources/previousbooks/lysistrata-september-2019.jpg";
import belljar from "../../resources/previousbooks/the-bell-jar-october-2019.jpg";
import manthursday from "../../resources/previousbooks/the-man-who-was-thursday-november-2019.jpg";
import tellonmountain from "../../resources/previousbooks/go-tell-it-on-the-mountain-december-2020.jpg";
import mastermargarita from "../../resources/previousbooks/the-master-and-margarita-january-2020.jpg";
import lovedone from "../../resources/previousbooks/the-loved-one-february-2020.jpg";
import outgrowmadness from "../../resources/previousbooks/teach-us-to-outgrow-our-madness-march-2020.jpg";
import moneycantbuy from "../../resources/previousbooks/what-money-cant-buy-april-2020.jpg";
import freedomfromknown from "../../resources/previousbooks/freedom-from-the-known-may-2020.jpg";
import physicsphilosophy from "../../resources/previousbooks/physics-and-philosophy-june-2020.jpg";
import argonauts from "../../resources/previousbooks/the-argonauts-july-2020.jpg";
import noexit from "../../resources/previousbooks/no-exit-aug-2020.jpg";
import trial from "../../resources/previousbooks/the-trial-sept-2020.jpg";
import stardust from "../../resources/previousbooks/stardust-oct-2020.jpg";
import darkconstellations from "../../resources/previousbooks/dark-constellations-nov-2020.jpg"

const History = () => {
  return (
    <main className="history-main">
      {/* TEMPLATE */}
      {/* 
    <section className="prev-book-display">
        <img id="prev-book-cover" src={}></img>
        <div className="prev-book-info">
          <p className="book-month"></p>
          <p className="book-selector"></p>
        </div>
      </section> 
      */}

      <section className="prev-book-display">
        <img id="prev-book-cover" src={darkconstellations}
        alt="Pola Oloixarac - Dark Constellations"></img>
        <div className="prev-book-info">
          <p className="book-month">November 2020</p>
          <p className="book-selector">Jonah</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={stardust}
          alt="Neil Gaiman - Stardust"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">October 2020</p>
          <p className="book-selector">Tink</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={trial}
          alt="Franz Kafka - The Trial"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">September 2020</p>
          <p className="book-selector">Landon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={noexit}
          alt="Jean Paul Sartre - No Exit"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">August 2020</p>
          <p className="book-selector">Brandon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={argonauts}
          alt="Maggie Nelson - The Argonauts"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">July 2020</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={physicsphilosophy}
          alt="James Jeans - Physics and Philosophy"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">June 2020</p>
          <p className="book-selector">Corey</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={freedomfromknown}
          alt="J. Krishnamurti - Freedom From the Known"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">May 2020</p>
          <p className="book-selector">Stephen</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={moneycantbuy}
          alt="Michael J. Sandel - What Money Can't Buy"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">April 2020</p>
          <p className="book-selector">Dale</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={outgrowmadness}
          alt="Kenzaburo Oe - Teach Us To Outgrow Our Madness"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">March 2020</p>
          <p className="book-selector">Kate</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={lovedone}
          alt="Evelyn Waugh - The Loved One"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">February 2020</p>
          <p className="book-selector">Tink</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={mastermargarita}
          alt="Mikhail Bulgakov - The Master & Margarita"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">January 2020</p>
          <p className="book-selector">Gabe</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={tellonmountain}
          alt="James Baldwin - Go Tell It On The Mountain"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">December 2020</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={manthursday}
          alt="G. K. Chesterton - The Man Who Was Thursday"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">November 2019</p>
          <p className="book-selector">Landon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={belljar}
          alt="Sylvia Plath - The Bell Jar"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">October 2019</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={lysistrata}
          alt="Aristophanes - Lysistrata"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">September 2019</p>
          <p className="book-selector">Brandon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={ourkids}
          alt="Robert D. Putnam - Our Kids: The American Dream in Crisis"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">August 2019</p>
          <p className="book-selector">Stephen</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={oscarwao}
          alt="Junot Diaz - The Brief Wondrous Life of Oscar Wao"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">June/July 2019</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={funhome}
          alt="Alison Bechdel - Fun Home"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">May 2019</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>
    </main>
  );
};

export default History;
