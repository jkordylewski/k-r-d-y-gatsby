import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import main from '../images/kazimierz_kordylewski.jpg';

import Header from '../components/header';
import Kordynet from '../components/kordynet';
import KazimierzLinks from '../components/links/kordylewski';

const IndexPage = ({ data }) => (
  <Layout name="kazi">
    <Seo title="Kazimierz Kordylewski" />

    <div id="copy">
      <Header />
      <h2>Kazimierz Kordylewski</h2>
      <img src={main} alt="Kazimierz Kordylewski" width="206" />

      <p>
        Kazimierz Kordylewski, father of Les Kordylewski, was a Polish
        astronomer. He studied at University of Poznań and Jagiellonian
        University, and earned a PhD degree in 1932. He first identified the
        large concentrations of dust at the earth moon Lagrangian points that
        were later named the Kordylewski Clouds.
      </p>

      <a href="/pdfs/krakow_10_2015.pdf" target="_blank" rel="noreferrer">
        Krakow &#8470;10, "Książka, o moim Ojcu" (in Polish)
      </a>

      <h3>Links:</h3>
      <KazimierzLinks />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
