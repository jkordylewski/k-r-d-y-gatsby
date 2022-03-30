import React from 'react';
import Layout from '../components/layout';
import main from '../images/banachiewicz.jpg';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="bana">
    <Seo title="Banachiewicz" />

    <div id="copy">
      <Header />
      <h2>Tadeusz Banachiewicz</h2>
      <img src={main} alt="Banachiewicz" width="206" height="250" border="0" />
      <p>
        Tadeusz Banachiewicz was a Polish astronomer, mathematician and
        geodesist. First President of the Polish Astronomical Society, and
        member of the Polish Academy of Sciences. He was also the founder of the
        journal Acta Astronomica.
      </p>
      <p>The lunar crater Banachiewicz is named after him.</p>

      <h3>General Links:</h3>
      <div className="linksCopy">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Tadeusz_Banachiewicz"
        >
          Banachiewicz Wikipedia EN
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://pl.wikipedia.org/wiki/Tadeusz_Banachiewicz"
        >
          Banachiewicz Wikipedia PL
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.pta.edu.pl/historia"
        >
          Polskie Towarzystwo Astronomiczne
        </a>
        {/*<a target="_blank" rel="noreferrer" href="http://www.pta.edu.pl/orion/art/Banachiewicz/Banachiewicz2.html">An article about the Famous Astronomer</a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.pta.edu.pl/english/history"
        >
          Polskie Towarzystow Astronomiczne Historia
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="http://leksykon.pta.edu.pl/index.php?id=t&kod=192"
        >
          Leksykon PTA
        </a>
      </div>

      <h3>My Links:</h3>
      <div className="linksCopy">
        <a
          target="_blank"
          rel="noreferrer"
          href="http://orion.pta.edu.pl/dlaczego-banachiewicz-na-skalce"
        >
          Dlaczego Banachiewicz na Skałce?
        </a>{' '}
        (article by Les Kordylewski)
      </div>

      <div className="clearBoth"></div>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
