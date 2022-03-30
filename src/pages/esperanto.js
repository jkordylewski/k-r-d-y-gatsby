import React from 'react';
import Layout from '../components/layout';
import flag from '../images/espeFlag.gif';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="esperanto">
    <Seo title="Esperanto" />

    <div id="copy">
      <Header />
      <h2>Esperanto</h2>

      <p>
        <b>Esperanto</b> is a widely used constructed artificial language,
        invented to help facilitate communication among people who speak their
        own different native languages. Les is an exerpt speaker of the language
        and his mastery of it has allowed him to travel the world and meet
        esperanto speakers across the globe.
      </p>

      <h3>Links:</h3>
      <div className="linksCopy">
        <a target="_blank" rel="noreferrer" href="http://www.esperanto.net/">
          Esperanto.net
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.meetup.com/esperanto-chicago"
        >
          Chicago Meetup
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.esperanto-chicago.org/"
        >
          Esperanto Chicago
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://tejo.org/agado/pasporta-servo/"
        >
          Pasporta Servo
        </a>

        <a target="_blank" rel="noreferrer" href="http://www.esperanto.ca">
          The Canadian Esperanto Association - La Kanada Esperanto-Asocio
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="http://www2.polskieradio.pl/eo/dokument.aspx?iid=35638"
        >
          Radio Interview
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://deon24.com/jerzy-dobrzynski-i-lech-kordylewski-chicagowscy-uczeni-zapraszaja-do-propagowania-jezyka-esperanto/"
        >
          Radio Interview 2
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://pola-retradio.org/2014/04/e_elsendo-el-la-18-04-2014/"
        >
          Radio Interview in Esperanto
        </a>

        {/* <a href="http://www.esperanto-montreal.org/en/node/365">esperanto-montreal.org</a>*/}
        {/* <a href="http://ao.com.au/esperanto/correlatives.htm">correlatives</a> */}
        {/* <a href="http://www.autodydaktyka.republika.pl/jezykiwschodu/mlaski1.htm">Wywiad / Interview</a> */}

        <br />
        <b>"Plane Speaking" - Reader Article</b>
        <br />
        <div className="or">
          <a href="/pdfs/PlaneSpeaking.pdf" target="_blank" rel="noreferrer">
            PDF
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            href="http://www.chicagoreader.com/chicago/plane-speaking/Content?oid=913091"
            target="_blank"
            rel="noreferrer"
          >
            on the web
          </a>
        </div>

        {/* https://securesite.chireader.com/cgi-bin/Archive/abridged2.bat?path=2003/030905/JONES */}
        <br />
      </div>

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
      <div style={{ float: 'right' }}>
        <img src={flag} alt="Esperanto Flag" />
      </div>
      <div style={{ clear: 'both' }}></div>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
