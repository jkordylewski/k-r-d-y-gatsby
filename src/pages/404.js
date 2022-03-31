import React from 'react';

import Layout from '../components/layout';
import Kordynet from '../components/kordynet';
import Seo from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div id="copy">
      <h1>404 NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... try the{' '}
        <Link to="/">homepage</Link>.
      </p>
      <Kordynet />
    </div>
  </Layout>
);

export default NotFoundPage;
