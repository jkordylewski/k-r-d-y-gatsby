import React from 'react';
import Layout from '../components/layout';
import main from '../images/espeFlag.gif';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';
import EsperantoLinks from '../components/links/esperanto';

const IndexPage = ({ data }) => (
  <Layout name="esperanto">
    <Seo title="Esperanto" />

    <div id="copy">
      <Header />
      <h2>Esperanto</h2>
      <img src={main} alt="Esperanto Flag" width="206" />

      <p>
        <b>Esperanto</b> is a widely used constructed artificial language,
        invented to help facilitate communication among people who speak their
        own different native languages. Les is an exerpt speaker of the language
        and his mastery of it has allowed him to travel the world and meet
        esperanto speakers across the globe.
      </p>

      <h3>Links:</h3>
      <EsperantoLinks />

      <h3>Saluton!</h3>
      <h4>Bulteno de la Esperanto-Societo de Chicago</h4>
      <div className="linksCopy">
        <a href="/pdfs/esperanto/02_11.pdf" target="_blank" rel="noreferrer">
          Bulteno 02 2011 (PDF)
        </a>
        <a href="/pdfs/esperanto/01_11.pdf" target="_blank" rel="noreferrer">
          Bulteno 01 2011 (PDF)
        </a>
        <a href="/pdfs/esperanto/07_10.pdf" target="_blank" rel="noreferrer">
          Bulteno 07 2010 (PDF)
        </a>
        <a href="/pdfs/esperanto/01_10.pdf" target="_blank" rel="noreferrer">
          Bulteno 01 2010 (PDF)
        </a>
        <a href="/pdfs/esperanto/09_09.pdf" target="_blank" rel="noreferrer">
          Bulteno 09 2009 (PDF)
        </a>
        <a href="/pdfs/esperanto/04_08.pdf" target="_blank" rel="noreferrer">
          Bulteno 04 2008 (PDF)
        </a>
        <a href="/pdfs/esperanto/11_07.pdf" target="_blank" rel="noreferrer">
          Bulteno 11 2007 (PDF)
        </a>
        <a href="/pdfs/esperanto/10_07.pdf" target="_blank" rel="noreferrer">
          Bulteno 10 2007 (PDF)
        </a>
        <a href="/pdfs/esperanto/09_07.pdf" target="_blank" rel="noreferrer">
          Bulteno 09 2007 (PDF)
        </a>
        <a href="/pdfs/esperanto/07_07.pdf" target="_blank" rel="noreferrer">
          Bulteno 07 2007 (PDF)
        </a>
        <a href="/pdfs/esperanto/03_07.pdf" target="_blank" rel="noreferrer">
          Bulteno 03 2007 (PDF)
        </a>
        <br />
      </div>

      <div style={{ clear: 'both' }}></div>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
