import React from 'react';
import Layout from '../components/layout';
import sputnik from '../images/sputnik.jpg';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';
import SputnikLinks from '../components/links/sputnik';

const IndexPage = ({ data }) => (
  <Layout name="sputnik">
    <Seo title="Sputnik" />

    <div id="copy">
      <Header />
      <h2>Sputnik</h2>

      <div className="disclaimer">
        <img src={sputnik} alt="" width="400" height="327" border="0" />
        {/* image courtesy of urania{' '} */}
      </div>

      <h3>Sputnik 50th Anniversary Links:</h3>
      <SputnikLinks />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
