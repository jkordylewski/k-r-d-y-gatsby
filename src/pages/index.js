import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout name="home">
    <SEO title="Home" />

    <div id="copy">
      <div id="card">
        <h1>Les KORDYLEWSKI Ph.D.</h1>
        <h2>Forensic Scientist</h2>
      </div>

      <section>
        <h3>Book:</h3>
        <h4>Problemy Bioetyki (1st edition)</h4>
        Author: Leszek Kordylewski <br />
        Language: Polish
        <br />
        Format: Book (Illustrated), 199 pages
        <br />
        Publication Date: January 1996
        <br />
        Publisher: Uniwersytet Jagiellonski
        <br />
        ISBN-10: 8323309582
        <br />
        ISBN-13: 9788323309581
        <br />
        <Link to="/book">more about the book</Link> |{' '}
        <Link to="/book">wiecej</Link>
        <br />
      </section>

      <section>
        <h3>In the News:</h3>
        <a href="docs/krakow_10_2015.pdf" target="_blank">
          Krakow &#8470;10, "Książka, o moim Ojcu" (in Polish)
        </a>
      </section>

      <section>
        <h3>New Photos:</h3>
        <a href="http://www.panoramio.com/user/845783" target="_blank">
          See my photographic contributions to Panoramio (Google Earth)
        </a>
      </section>

      <section>
        <h3>Sputnik Anniversary:</h3>
        <a href="sputnik.html">
          Read more about me and the Sputnik Anniversary
        </a>
      </section>

      <section>
        <h3>Bio:</h3>
        <Link to="/bio">Read my Bio</Link>
      </section>

      <div className="hp-image">
        <Img
          className="headshot"
          fixed={data.file.childImageSharp.fixed}
          alt="Les Kordylewski"
        />
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "main.png" }) {
      childImageSharp {
        fixed(width: 368, height: 459) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
