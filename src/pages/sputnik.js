import React from 'react';
import Layout from '../components/layout';
import sputnik from '../images/sputnik.jpg';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="sputnik">
    <SEO title="sputnik" />

    <div id="copy">
      <Header />
      <h2>Sputnik</h2>

      <div className="disclaimer">
        <img src={sputnik} alt="" width="400" height="327" border="0" />
        image courtesy of urania{' '}
        {/*<a href="http://postepy.camk.edu.pl/upa6_2007.html"></a> */}
      </div>

      <h3>Sputnik 50th Anniversary Links:</h3>
      <div class="linksCopy">
        {/*<a href="http://www.redorbit.com/news/space/1090847/sputnik_raised_the_bar_50_years_ago_adler_planetarium_marks/index.html">Chicago Tribune Article</a> */}
        {/*<a href="http://www.chicagotribune.com/news/local/chi-sputnik_weboct05,0,475046.story">Chicago Tribune Article</a> */}
        {/*<a href="http://postepy.camk.edu.pl/upa6_2007.html">Urania Article / Urania Artyku&#322;</a> */}
        {/* <a href="http://web.archive.org/web/20080725010859/http://postepy.camk.edu.pl/upa6_2007.html">Urania Article / Urania Artyku&#322;</a>  */}
        {/*<a href="http://www.polishnews.com/section.php5?id=33">polishnews.com</a> */}
        {/*<a href="http://www.polishnews.com/news.php5?id=31">polishnews.com</a>- */}
        <a href="http://articles.chicagotribune.com/2007-10-05/news/0710040827_1_sputnik-space-exploration-soviet-premier-nikita-khrushchev">
          Chicago Tribune Article
        </a>
        <a href="docs/sputnik GK.pdf">Gazeta Krakowska (in polish) PDF</a>
        <a href="docs/MAG_22_280907_B.pdf">Dziennik Polski (page 1 of 2)</a>
        <a href="docs/MAG_23_280907_B.pdf">Dziennik Polski (page 2 of 2)</a>
        <a href="docs/Krakow-Sputnik.pdf">Krakow-Sputnik.pdf</a>
        <br />
        <br />
      </div>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
