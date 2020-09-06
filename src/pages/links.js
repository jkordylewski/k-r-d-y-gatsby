import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="links">
    <SEO title="Useful Links" />

    <div id="copy">
      <Header />
      <h2>Links</h2>

      <h3>Forensics Links:</h3>
      <div class="linksCopy">
        <a target="_blank" rel="noreferrer" href="http://www.smsi.org/">
          State Microscopical Society of Illinois
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.aafs.org/">
          The American Academy of Forensic Sciences
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.mafs.net/">
          Midwestern Association of Forensic Scientists
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.forensicdna.com/">
          Forensic DNA
        </a>
        <br />
      </div>
      <p>more to come</p>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
