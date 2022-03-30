import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';
import BioLinks from '../components/links/bio';
import GapLinks from '../components/links/gap';
import BookLinks from '../components/links/book';
import EsperantoLinks from '../components/links/esperanto';
import SputnikLinks from '../components/links/sputnik';
import ForensykaLinks from '../components/links/forensyka';
import KazimierzLinks from '../components/links/kordylewski';
import BanachiewiczLinks from '../components/links/banachiewicz';
import OtherLinks from '../components/links/other';

const IndexPage = ({ data }) => (
  <Layout name="links">
    <Seo title="Useful Links" />

    <div id="copy">
      <Header />
      <h2>Interesting Links</h2>

      <h3>Profile:</h3>
      <BioLinks />

      <h3>Gap Junction:</h3>
      <GapLinks />

      <h3>Forensics:</h3>
      <ForensykaLinks />

      <h3>Book:</h3>
      <BookLinks />

      <h3>Esperanto:</h3>
      <EsperantoLinks />

      <h3>Sputnik Anniversary:</h3>
      <SputnikLinks />

      <h3>Kazimierz Kordylewski:</h3>
      <KazimierzLinks />

      <h3>Banachiewicz:</h3>
      <BanachiewiczLinks />

      <h3>Other:</h3>
      <OtherLinks />

      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
