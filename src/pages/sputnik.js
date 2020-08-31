import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import author from '../images/main2.jpg';
import bookcover from '../images/bookcover_200.jpg';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="sputnik">
    <SEO title="sputnik" />

    <div id="copy">
      <Header />
      <h2>Coming Soon</h2>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
