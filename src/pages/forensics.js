import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="forensics">
    <SEO title="Forensics" />

    <div id="copy">
      <Header />
      <h2>Forensics</h2>
      <h3>Original Article:</h3>
      <div className="article">
        <h3>Forensyka</h3>
        <p>
          "
          <i>
            Tragedia 9/11 zwr&#243;ci&#322;a uwag&#281; &#347;wiata na
            walk&#281; z terroryzmem i przest&#281;pczo&#347;ci&#261;. W
            mediach, a nawet w filmach fabularnych, coraz cz&#281;&#347;ciej
            pojawia si&#281; angielski termin{' '}
            <b>
              <i>Forensic</i>
            </b>
            . Okazuje si&#281; bowiem, &#380;e obecnie poczciwy detektyw w
            rodzaju Sherlocka Holmesa nie poradzi sobie pos&#322;uguj&#261;c
            si&#281; jedynie lup&#261;; nowoczesny tropiciel zbrodni musi
            mie&#263; do dyspozycji rozbudowany system metod analitycznych i
            aparatury naukowej, w kt&#243;r&#261; wyposa&#380;one s&#261;
            nowoczesne laboratoria.
          </i>{' '}
          (...)" &nbsp;&nbsp;&nbsp;<Link to="/forensyka">read more</Link> |{' '}
          <Link to="/forensyka">wiecej</Link>
        </p>

        <p>
          <b>Streszczenie</b>
          <br />
          Na podstawie wieloletniego zawodowego zaanga&#380;owania w metody
          naukowe bed&#261;ce na us&#322;ugach ameryka&#324;skiego
          s&#261;downictwa autor artyku&#322;u proponuje, aby do
          wsp&#243;&#322;czesnego j&#281;zyka polskiego wprowadzi&#263; terminy
          forensyka i forensyk (rzeczowniki) oraz forensyczny (przymiotnik),
          jako pe&#322;noprawne i uzasadnione zapo&#380;yczenia z angielskiego,
          o szerszym, precyzyjniejszym znaczeniu od obecnie zast&#281;pczo
          u&#380;ywanych nieadekwatnych termin&#243;w: medycyna s&#261;dowa,
          nauki s&#261;dowe, lub nauki s&#261;downicze, oraz ekspertyza
          s&#261;dowa i bieg&#322;y s&#261;dowy.
        </p>

        <p>
          <b>Summary</b>
          <br />
          Based on his professional experience in Forensic Sciences, the author
          reviews the scope of scientific disciplines pertaining to Forensics,
          proposing the use of the new terms in his native Polish language:
          forensyka (Forensics), nauki forensyczne (Forensic Science),
          forensyczny (forensic), and forensyk (Forensic Scientist). These new
          terms are more adequate to the contemporary Forensics then traditional
          current terms in Polish which refer only to Court or Medicine
          (medycyna s&#261;dowa, nauki s&#261;dowe, nauki s&#261;downicze,
          ekspertyza s&#261;dowa, bieg&#322;y s&#261;dowy).
        </p>

        <div className="copyright">
          Copyright &copy; October, 2007 Les Kordylewski. All Rights Reserved
        </div>
      </div>

      <h3>Forensics Links:</h3>
      <div class="linksCopy">
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
        <br />
      </div>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
