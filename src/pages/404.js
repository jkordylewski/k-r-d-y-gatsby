import React from 'react';

import Layout from '../components/layout';
import Kordynet from '../components/kordynet';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="copy">
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Kordynet />
    </div>
  </Layout>
);

export default NotFoundPage;
