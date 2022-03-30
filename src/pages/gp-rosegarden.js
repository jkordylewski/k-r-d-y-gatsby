import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import rosegarden from '../images/publications/13165035.jpg';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <Seo title="Grant Park Rose Garden" />

    <div id="copy" style={{ paddingTop: 10 + 'px' }}>
      <Link className="button" to="/publications">
        &laquo; Back
      </Link>
      <img
        src={rosegarden}
        style={{ margin: 0 }}
        alt="Grant Park Rose Garden"
      />
      <br />
      <small>Original photograph by Les Kordylewski &copy;</small>
    </div>
  </Layout>
);

export default IndexPage;
