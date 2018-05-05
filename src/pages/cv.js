import React from "react";
import Link from "gatsby-link";

const Cv = () => (
  <div className="container">
    <section className="section">
      <div className="content is-medium">
        <h1>CV</h1>
        <div className="cv-section">
          <div className="cv-section__title">Group Exhibitions</div>
          <div className="columns is-gapless">
            <div className="column is-1 cv-section__year">2018</div>
            <div className="column cv-section__list">
              <li>
                Havre de Grace Maritime Museum & Philadelphia Sculptors, Havre
                de Grace, MD. Oars for Art
              </li>
              <li>
                CICA Museum, Gimpo, Gyeonggi Province, South Korea. Color 2018
              </li>
              <li>
                Plexus Projects, Brooklyn, NY. Future Artifact: Creative Tech
                Week Exhibition
              </li>
              <li>
                The Projects, FATVillage, Fort Lauderdale, FL. Hot & Sticky: The
                Sultry State
              </li>
              <li>
                Whitespace, The Mordes Collection, West Palm Beach, FL. Outside
                the Box 4
              </li>
              <li>
                Lowe Art Museum, Coral Gables, FL. Antillean Visions: Maps and
                the Making of the Caribbean
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Cv;
