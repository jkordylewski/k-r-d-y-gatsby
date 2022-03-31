import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import author from '../images/main.png';
import gap from '../images/Gap Junction Overview wm.png';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="home">
    <Seo title="Homepage" />

    <div id="copy">
      <div id="card">
        <h1>Les KORDYLEWSKI Ph.D.</h1>
        <h2>Cell Biologist - Forensic Scientist - Microscopist</h2>
      </div>

      <section>
        <Link to="/gap-junction">
          <img className="" src={gap} alt="Gap Junction" />
        </Link>
        <h3>Gap Junction Controversy:</h3>
        <Link to="/gap-junction">
          {' '}
          More on the Gap Junction Ultrastructure Controversy
        </Link>
      </section>

      <section>
        <h3>Forensyka Article:</h3>
        <Link to="/forensics">
          {' '}
          More on forensyka (Forensics), nauki forensyczne (Forensic Science),
          etc.
        </Link>
      </section>

      <section>
        <h3>Book:</h3>
        <Link to="/book">More about the Problemy Bioetyki book</Link> |{' '}
        <Link to="/book">wiecej</Link>
        <br />
      </section>

      {/* <section>
        <h3>In the News:</h3>
        <a href="/pdfs/krakow_10_2015.pdf" target="_blank" rel="noreferrer">
          Krakow &#8470;10, "Książka, o moim Ojcu" (in Polish)
        </a>
      </section> */}

      {/* <section>
        <h3>New Photos:</h3>
        <a
          href="http://www.panoramio.com/user/845783"
          target="_blank"
          rel="noreferrer"
        >
          See my photographic contributions to Panoramio (Google Earth)
        </a>
      </section> */}

      <section>
        <h3>Sputnik Anniversary:</h3>
        <Link to="/sputnik">
          Read more about me and the Sputnik Anniversary
        </Link>
      </section>

      <section>
        <h3>Bio:</h3>
        <Link to="/bio">Read my Bio</Link>
      </section>

      <div className="hp-image">
        <img className="headshot" src={author} alt="Les Kordylewski" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
