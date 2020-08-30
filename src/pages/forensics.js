import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import author from '../images/main2.jpg';
import bookcover from '../images/bookcover_200.jpg';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="forensics">
    <SEO title="Forensics" />

    <div id="copy">
      <Header />
      <h2>Book</h2>
      <h3>Forensics</h3>
      <div>
        <div className="book-cover">
          <img
            src={bookcover}
            width="196"
            height="273"
            alt="Problemy Bioetyki"
            border="0"
          />
        </div>
        <div className="book-wrapper">
          <h4>Problemy Bioetyki (1st edition)</h4>
          Author: Leszek Kordylewski, <br />
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
          <br />
          Illustrated by Andrzej Mleczko
          <br />
          <a href="http://www.mleczko.pl" target="_blank" rel="noreferrer">
            http://www.mleczko.pl
          </a>
        </div>

        <div className="clearBoth">&nbsp;</div>
      </div>
      <h3>Book Links:</h3>
      <div class="linksCopy">
        <a
          href="https://www.bookdepository.com/Problemy-Bioetyki-Leszek-Kordylewski/9788323309581"
          target="_blank"
          rel="noreferrer"
        >
          Problemy Bioetyki
        </a>
        <a
          href="http://dziennikzwiazkowy.com/kultura-i-rozrywka/problemy-bioetyki/"
          target="_blank"
          rel="noreferrer"
        >
          Dziennik Zwiazkowy
        </a>
        <a
          href="http://www.bookfinder.com/search/?author=&title=&lang=en&new_used=*&destination=us&currency=USD&binding=*&isbn=8323309582&keywords=&minprice=&maxprice=&min_year=&max_year=&mode=advanced&st=sr&ac=qr"
          target="_blank"
          rel="noreferrer"
        >
          BookFinder
        </a>
        {/* <a href="http://www.krakusy.us/archiwum/index.php?view=events&action=detail&id_e=30">http://www.krakusy.us</a>
     <a href="http://www.dziennikzwiazkowy.com/kir/1015.html">http://www.polishdailynews.com</a>
    <a href="http://www.bookfinder.com/author/leszek-kordylewski/">http://www.bookfinder.com/author/leszek-kordylewski/</a> */}
      </div>
      <h3>Book Event Info:</h3>
      Spotkanie z Dr Leszkiem Kordylewskim <br />
      2005-06-14 00:40:00
      <br />
      <br />
      "PROBLEMY BIOETYKI"
      <br />
      - spotkanie autorskie, dyskusja i prezentacja ksiazki
      <br />
      Dr LESZKA KORDYLEWSKIEGO
      <br />
      w Polonia Bookstore ( Pani Miry Puaczowej),
      <br />
      4738 N. Milwaukee Ave.,
      <br />
      Chicago, 14 czerwiec (wtorek) 18:30
      <br />
      SERDECZNIE ZAPRASZAMY !<br />
      <br />
      A oto kr&oacute;tka informacja o autorze:
      <br />
      <br />
      Dr Leszek Kordylewski jest naukowcem wywodzacym sie z Krakowa,
      kt&oacute;ry obecnie mieszka i pracuje w Chicago, gdzie przed laty
      przyjechal na zaproszenie University of Chicago. Jest wychowankiem
      Uniwersytetu Jagiellonskiego w Krakowie, gdzie uzyskal dyplomy
      magisterski, doktorski oraz habilitacje. Urodzil sie w Krakowie w znanej
      rodzinie naukowc&oacute;w, jako syn odkrywcy astronoma Kazimierza
      Kordylewskiego. Wychowywal sie w atmosferze naukowej w Krakowskim
      Obserwatorium Astronomicznym i Ogrodzie Botanicznym UJ w Krakowie, od
      dziecka uczestniczac w pracach badawczych i wyprawach naukowych.
      <br />
      <br />
      Jako biolog uzyskal stanowisko docenta na UJ. Od roku 1982 prowadzil
      wlasne badania w pracowni Mikroskopii Elektronowej Zakladu Medycyny
      University of Chicago jako Research Associate - Assistant Professor. Ma
      bogate doswiadczenie dydaktyczne i badawcze na polskich, europejskich i
      amerykanskich uniwersytetach. Jest autorem wielu publikacji z dziedziny
      biologii kom&oacute;rki i ultrastruktury tkanek, kt&oacute;re sa cytowane
      w swiatowych czasopismach naukowych i podrecznikach. Ksiazka autorstwa
      Leszka Kordylewskiego p.t.&ldquo;Problemy Bioetyki&rdquo;, wydana przez
      Uniwersytet Jagiellonski w Krakowie, jest jedynym w swoim rodzaju
      podrecznikiem, kt&oacute;ry powstal w zwiazku z kursem Bioetyki
      prowadzonym przez niego w Krakowe na zaproszenie UJ. Ksiazke te ilustrowal
      znany krakowski grafik i satyryk Andrzej Mleczko. Dr Leszek Kordylewski
      jest obecnie jednym z nielicznych ekspert&oacute;w w zakresie mikroskopii
      opracowujacych ekspertyzy forensyczne. <br />
      <br />
      <img
        src={author}
        alt="Les Kordylewski, Author"
        width="142"
        height="200"
      />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
