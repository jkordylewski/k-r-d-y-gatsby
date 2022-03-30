import React from 'react';
import Layout from '../components/layout';
import main from '../images/banachiewicz.jpg';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';
import BanachiewiczLinks from '../components/links/banachiewicz';

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

      <h3>Links:</h3>
      <BanachiewiczLinks />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
