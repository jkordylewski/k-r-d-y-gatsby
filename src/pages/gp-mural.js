import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import mural from '../images/publications/63059049.jpg';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <Seo title="Mural of Santo Toribio Romo in Chicago's Pilsen neighborhood" />

    <div id="copy" style={{ paddingTop: 10 + 'px' }}>
      <Link className="button" to="/publications">
        &laquo; Back
      </Link>
      <img
        src={mural}
        style={{ margin: 0 }}
        alt="Mural of Santo Toribio Romo in Chicago's Pilsen neighborhood"
      />
      <br />
      <small>Original photograph by Les Kordylewski &copy;</small>
    </div>
  </Layout>
);

export default IndexPage;
