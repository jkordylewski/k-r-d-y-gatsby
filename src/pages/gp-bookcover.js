import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import bookcover from '../images/publications/book_cover.jpg';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <SEO title="Chicago and Its Botanic Garden Cover" />

    <div id="copy" style={{ paddingTop: 10 + 'px' }}>
      <Link className="button" to="/publications">
        &laquo; Back
      </Link>
      <img
        src={bookcover}
        style={{ margin: 0 }}
        alt="Chicago and Its Botanic Garden Cover"
      />
    </div>
  </Layout>
);

export default IndexPage;
