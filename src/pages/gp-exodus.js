import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import exodus from '../images/publications/mexican_exodus.jpg';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <SEO title="Mexican Exodus Cover by Julia G. Young" />

    <div id="copy" style={{ paddingTop: 10 + 'px' }}>
      <Link className="button" to="/publications">
        &laquo; Back
      </Link>
      <img
        src={exodus}
        style={{ margin: 0 }}
        alt="Mexican Exodus Cover by Julia G. Young"
      />
    </div>
  </Layout>
);

export default IndexPage;
