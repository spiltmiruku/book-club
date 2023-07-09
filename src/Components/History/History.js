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
import darkconstellations from "../../resources/previousbooks/dark-constellations-nov-2020.jpg";
import larkinpoems from "../../resources/previousbooks/larkin-collected-poems-december-2020.jpg";
import kondotidyingup from "../../resources/previousbooks/life-changing-magic-of-tidying-up-jan-2021.jpg";
import gilead from "../../resources/previousbooks/gilead-feb-2021.jpg";
import cinema from "../../resources/previousbooks/women's-cinema-world-cinema-mar-2021.jpg";
import werenone from "../../resources/previousbooks/and-then-there-were-none-apr-2021.jpg";
import ethicalslut from "../../resources/previousbooks/the-ethical-slut-may-2021.jpg";
import railroad from "../../resources/previousbooks/the-underground-railroad-june-2021.jpg";
import timetravel from "../../resources/previousbooks/time-traveler-guide-july-2021.jpg";
import refugees from "../../resources/previousbooks/refugees-aug-2021.jpg";
import alchemist from "../../resources/previousbooks/alchemist-sept-2021.jpg";
import war from "../../resources/previousbooks/war-oct-2021.jpg";
import dopamine from "../../resources/previousbooks/dopamine-nov-2021.jpg";
import refuge from "../../resources/previousbooks/refuge-nov-2021.jpg";
import wine from "../../resources/previousbooks/the-last-of-the-wine-jan-2022.jpg";
import hogfather from "../../resources/previousbooks/hogfather-feb-2022.jpg";
import luckybreaks from "../../resources/previousbooks/lucky-breaks-march-2022.jpg";
import discontent from "../../resources/previousbooks/discontent-april-2022.jpg";
import pastoralia from "../../resources/previousbooks/pastoralia-may-2022.jpg";
import strongtowns from "../../resources/previousbooks/strong-towns-june-2022.jpg";
import goonsquad from "../../resources/previousbooks/goon-squad-july-2022.jpg";
import filmchangedlife from "../../resources/previousbooks/film-changed-life-aug-2022.jpg";
import scarleta from "../../resources/previousbooks/scarlet-a-sept-2022.jpg";
import heartofadog from "../../resources/previousbooks/heart-of-a-dog-oct-2022.jpg";
import healthcommunism from "../../resources/previousbooks/health-communism-nov-2022.jpg";
import swerve from "../../resources/previousbooks/swerve-dec-2022.jpg";
import holdme from "../../resources/previousbooks/hold-me-jan-2023.jpg";
import walden from "../../resources/previousbooks/walden-feb-2023.jpg";
import dancingstreets from "../../resources/previousbooks/dancing-in-the-streets-march-2023.jpg";
import jeeves from "../../resources/previousbooks/inimitable-jeeves-april-2023.jpg";
import monkrobot from "../../resources/previousbooks/monk-robot-2-book-may-2023.jpg";
import mudlark from "../../resources/previousbooks/mudlark-june-2023.jpg";
import shiver from "../../resources/previousbooks/shiver-july-2023.jpg";

const History = () => {
  return (
    <main className="history-main">
      {/* TEMPLATE */}
      {/* 
    <section className="prev-book-display">
        <img id="prev-book-cover" src={} alt=""></img>
        <div className="prev-book-info">
          <p className="book-month"></p>
          <p className="book-selector"></p>
        </div>
      </section>
      */}

<section className="prev-book-display">
        <img id="prev-book-cover" src={shiver} alt="Shiver: Junji Ito Selected Stories - Junji Ito"></img>
        <div className="prev-book-info">
          <p className="book-month">July 2023</p>
          <p className="book-selector">Robert</p>
        </div>
      </section>

    <section className="prev-book-display">
        <img id="prev-book-cover" src={mudlark} alt="Mudlark: In Search of London's Past Along the River Thames - Lara Maiklem"></img>
        <div className="prev-book-info">
          <p className="book-month">June 2023</p>
          <p className="book-selector">Dale</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={monkrobot}
          alt="
A Psalm for the Wild-Built (Monk & Robot Book 1) - Becky Chambers (Author) and A Prayer for the Crown-Shy: A Monk and Robot Book (Monk & Robot 2) - Becky Chambers (Author)"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">May 2023</p>
          <p className="book-selector">Jonah</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={jeeves}
          alt="The Inimitable Jeeves - P.G. Wodehouse"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">April 2023</p>
          <p className="book-selector">Landon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={dancingstreets}
          alt="Dancing in the Streets - Barbara Ehrenreich"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">March 2023</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={walden}
          alt="Walden - Henry David Thoreau"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">February 2023</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={holdme}
          alt="Hold Me Tight - Dr. Sue Johnson"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">January 2023</p>
          <p className="book-selector">Robert</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={swerve}
          alt="The Swerve: How the World Became Modern - Stephen Greenblatt"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">December 2022</p>
          <p className="book-selector">Dale</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={healthcommunism}
          alt="Health Communism: A Surplus Manifesto - Beatrice Adler-Bolton, Artie Vierkant"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">November 2022</p>
          <p className="book-selector">Jonah</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={heartofadog}
          alt="The Heart of A Dog - Mikhail Bulgakov"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">October 2022</p>
          <p className="book-selector">Landon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={scarleta}
          alt="Scarlet A: The Ethics, Law, and Politics of Ordinary Abortion - Katie Watson "
        ></img>
        <div className="prev-book-info">
          <p className="book-month">September 2022</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={filmchangedlife}
          alt="The Film That Changed My Life: 30 Directors on Their Epiphanies in the Dark - Robert K. Elder"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">August 2022</p>
          <p className="book-selector">Angie</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={goonsquad}
          alt="A Visit from the Goon Squad - Jennifer Egan"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">July 2022</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={strongtowns}
          alt="Strong Towns - Charles L. Marohn, Jr. "
        ></img>
        <div className="prev-book-info">
          <p className="book-month">June 2022</p>
          <p className="book-selector">Robert</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={pastoralia}
          alt="Pastoralia - George Saunders"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">May 2022</p>
          <p className="book-selector">Dale</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={discontent}
          alt="Discontent and Its Civilizations - Mohsin Hamid"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">April 2022</p>
          <p className="book-selector">Jonah</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={luckybreaks}
          alt="Lucky Breaks - Yevgenia Belorusets"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">March 2022</p>
          <p className="book-selector">Landon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={hogfather}
          alt="Hogfather - Terry Pratchett"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">February 2022</p>
          <p className="book-selector">Danielle</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={wine}
          alt="The Last of The Wine - Mary Reault"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">January 2022</p>
          <p className="book-selector">Brandon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={refuge}
          alt="Refuge: An Unnatural History of Family and Place - Terry Tempest Williams"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">December 2021</p>
          <p className="book-selector">Angie</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={dopamine}
          alt="Dopamine Nation: Finding Balance in the Age of Indulgence - Dr. Anna Lembke"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">November 2021</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={war}
          alt="War: How Conflict Shaped Us - Margaret MacMillan"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">October 2021</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={alchemist}
          alt="The Alchemist - Paulo Coelho"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">September 2021</p>
          <p className="book-selector">Dale</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={refugees}
          alt="The Refugees - Viet Thanh Nguyen"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">August 2021</p>
          <p className="book-selector">Jonah</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={timetravel}
          alt="The Time Traveler's Guide to Medieval England - Ian Mortimer"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">July 2021</p>
          <p className="book-selector">Tink</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={railroad}
          alt="The Underground Railroad - Colson Whitehead"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">June 2021</p>
          <p className="book-selector">Landon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={ethicalslut}
          alt="The Ethical Slut - Janet W. Hardy & Dossie Easton"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">May 2021</p>
          <p className="book-selector">Brandon</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={werenone}
          alt="And Then There Were None - Agatha Christie"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">April 2021</p>
          <p className="book-selector">Angie</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={cinema}
          alt="Women's Cinema, World Cinema - Patricia White"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">March 2021</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={gilead}
          alt="Gilead - Marilynne Robinson"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">February 2021</p>
          <p className="book-selector">Trenton</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={kondotidyingup}
          alt="The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing - Marie Kondo"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">January 2021</p>
          <p className="book-selector">Kate</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={larkinpoems}
          alt="Collected Poems - Philip Larkin"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">December 2020</p>
          <p className="book-selector">Dale</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={darkconstellations}
          alt="Dark Constellations - Pola Oloixarac"
        ></img>
        <div className="prev-book-info">
          <p className="book-month">November 2020</p>
          <p className="book-selector">Jonah</p>
        </div>
      </section>

      <section className="prev-book-display">
        <img
          id="prev-book-cover"
          src={stardust}
          alt="Stardust - Neil Gaiman"
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
          alt="The Trial - Franz Kafka"
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
          alt="No Exit - Jean Paul Sartre"
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
          alt="The Argonauts - Maggie Nelson"
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
          alt="Physics and Philosophy - James Jeans"
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
          alt="Freedom From the Known - J. Krishnamurti"
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
          alt="What Money Can't Buy - Michael J. Sandel"
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
          alt="Teach Us To Outgrow Our Madness - Kenzaburo Oe"
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
          alt="The Loved One - Evelyn Waugh"
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
          alt="The Master & Margarita - Mikhail Bulgakov"
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
          alt="Go Tell It On The Mountain - James Baldwin"
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
          alt="The Man Who Was Thursday - G. K. Chesterton"
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
          alt="The Bell Jar - Sylvia Plath"
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
          alt="Lysistrata - Aristophanes"
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
          alt="Our Kids: The American Dream in Crisis - Robert D. Putnam"
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
          alt="The Brief Wondrous Life of Oscar Wao - Junot Diaz"
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
          alt="Fun Home - Alison Bechdel"
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
