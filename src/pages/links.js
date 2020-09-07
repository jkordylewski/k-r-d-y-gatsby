import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="links">
    <SEO title="Useful Links" />

    <div id="copy">
      <Header />
      <h2>Links</h2>

      <h3>Problemy Bioetyki Links:</h3>
      <div className="linksCopy">
        <a
          target="_blank"
          rel="noreferrer"
          href="http://nakanapie.pl/book/211492/leszek-kordylewski-problemy-bioetyki.htm;jsessionid=F0DF75829CB01D0F449036DC4F76C8A4"
        >
          Problemy Bioetyki
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://dziennikzwiazkowy.com/kultura-i-rozrywka/problemy-bioetyki/"
        >
          Dziennik Zwiazkowy
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.bookfinder.com/search/?author=&title=&lang=en&new_used=*&destination=us&currency=USD&binding=*&isbn=8323309582&keywords=&minprice=&maxprice=&min_year=&max_year=&mode=advanced&st=sr&ac=qr"
        >
          BookFinder
        </a>
      </div>

      <h3>Sputnik Anniversary Links:</h3>
      <div className="linksCopy">
        <a
          target="_blank"
          rel="noreferrer"
          href="http://articles.chicagotribune.com/2007-10-05/news/0710040827_1_sputnik-space-exploration-soviet-premier-nikita-khrushchev"
        >
          Chicago Tribune Article
        </a>
        <a target="_blank" rel="noreferrer" href="docs/sputnik GK.pdf">
          Gazeta Krakowska (in polish) PDF
        </a>
        <a target="_blank" rel="noreferrer" href="docs/MAG_22_280907_B.pdf">
          Dziennik Polski (page 1 of 2)
        </a>
        <a target="_blank" rel="noreferrer" href="docs/MAG_23_280907_B.pdf">
          Dziennik Polski (page 2 of 2)
        </a>
        <a target="_blank" rel="noreferrer" href="docs/Krakow-Sputnik.pdf">
          Krakow-Sputnik.pdf
        </a>
      </div>

      <h3>Forensics Links:</h3>
      <div className="linksCopy">
        <a target="_blank" rel="noreferrer" href="http://www.smsi.org/">
          State Microscopical Society of Illinois
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.aafs.org/">
          The American Academy of Forensic Sciences
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.mafs.net/">
          Midwestern Association of Forensic Scientists
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.forensicdna.com/">
          Forensic DNA
        </a>
      </div>

      <h3>Banachiewicz Links:</h3>
      <div className="linksCopy">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Tadeusz_Banachiewicz"
        >
          Wikipedia EN
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://pl.wikipedia.org/wiki/Tadeusz_Banachiewicz"
        >
          Wikipedia PL
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.pta.edu.pl/historia"
        >
          Polskie Towarzystwo Astronomiczne
        </a>
        {/*<a target="_blank" rel="noreferrer" href="http://www.pta.edu.pl/orion/art/Banachiewicz/Banachiewicz2.html">An article about the Famous Astronomer</a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="http://orion.pta.edu.pl/dlaczego-banachiewicz-na-skalce"
        >
          Dlaczego Banachiewicz na Skałce?
        </a>
      </div>

      <h3>Esperanto Links:</h3>
      <div className="linksCopy">
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.esperanto.info/en/basic_information"
        >
          Esperanto Basics
        </a>
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
        <a
          target="_blank"
          rel="noreferrer"
          href="http://world.std.com/obi/Esperanto/introductions/references.txt"
        >
          Esperanto References
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.esperanto.ca/fr/taxonomy/term/54"
        >
          Montreal Esperanto Society
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

        <br />
        <b>"Plane Speaking" - Reader Article</b>
        <br />
        <div className="or">
          {' '}
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
      </div>

      <h3>Other Links:</h3>
      <div className="linksCopy">
        <a target="_blank" rel="noreferrer" href="http://www.kordylewski.pl">
          kordylewski.pl
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.polishnews.com/">
          polishnews.com
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.krakusy.us/">
          Krakusy w Chicago
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.mleczko.pl">
          Mleczko
        </a>
        <br />
      </div>

      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
