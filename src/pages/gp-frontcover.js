import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import frontcover from '../images/JofMicr-frontcover.jpg';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <SEO title="Journal of Microscopy" />

    <div id="copy" style={{ paddingTop: 10 + 'px' }}>
      <Link className="button" to="/publications">
        &laquo; Back
      </Link>
      <img src={frontcover} style={{ margin: 0 }} alt="Journal of Microscopy" />
    </div>
  </Layout>
);

export default IndexPage;
