import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import main from '../images/Gap Junction Overview wm.png';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <Seo title="Gap Junction Illustration Large" />

    <div id="copy" style={{ paddingTop: 10 + 'px' }}>
      <Link className="button" to="/gap-junction">
        &laquo; Back
      </Link>
      <img
        src={main}
        style={{ margin: 0 }}
        alt="Gap Junction Illustration Large"
      />
    </div>
  </Layout>
);

export default IndexPage;
