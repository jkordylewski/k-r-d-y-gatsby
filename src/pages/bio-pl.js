import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
import Kordynet from '../components/kordynet';
import worldMap from '../images/visited-countries-map.png';
import main from '../images/les kordylewski.jpg';
import Seo from '../components/seo';
import BioLinks from '../components/links/bio';

const IndexPage = ({ data }) => (
  <Layout name="bio">
    <Seo title="Życiorys" />

    <div id="copy">
      <Header />
      <h2>Cell Biologist, Forensic Scientist, and Microscopist</h2>
      <div className="bio-image">
        <img
          className="headshot"
          src={main}
          alt="Leszek Kordylewski"
          width="206"
        />
      </div>
      <div className="pl-link">
        <Link to="/bio">in English</Link>
      </div>
      <div>
        <h3>Biografia:</h3>
      </div>
      <p>
        Leszek Kordylewski obecnie mieszka i pracuje w USA, gdzie przed laty
        przyjechał na zaproszenie University of Chicago. Jest wychowankiem
        Uniwersytetu Jagiellońskiego w Krakowie, gdzie uzyskał dyplomy
        magisterski, doktorski oraz habilitację.{' '}
      </p>
      <p>
        Urodził sie w Krakowie jako najmłodszy syn odkrywcy astronoma Kazimierza
        Kordylewskiego. Wychowywał sie w atmosferze naukowej w Krakowskim
        Obserwatorium Astronomicznym i Ogrodzie Botanicznym UJ w Krakowie, od
        dziecka uczestnicząc w aktywnościach badawczych i wyprawach naukowych.{' '}
      </p>
      <p>
        Jako biolog uzyskał stanowisko docenta na UJ. Od roku 1982 prowadził
        własne badania w pracowni Mikroskopii Elektronowej Zakładu Medycyny
        University of Chicago jako Research Associate - Assistant Professor. Ma
        bogate doświadczenie dydaktyczne i badawcze na polskich, europejskich i
        amerykańskich uniwersytetach.{' '}
      </p>

      <p>
        Jest autorem wielu publikacji z dziedziny biologii komórki i
        ultrastruktury tkanek, które są cytowane w światowych czasopismach
        naukowych i podręcznikach. Zanim zaczęto rozpoznawać popularne dziś
        zagadnienia{' '}
        <i>
          <b>dziedziczenia mitochondrialnego DNA</b>
        </i>
        , Dr Kordylewski odkrył i opisał podobne mechanizmy{' '}
        <i>
          <b>dziedziczenia cytoplazmatycznego</b>
        </i>{' '}
        pigmentacji płazow (1969). Temat ten stał się przedmiotem jego{' '}
        <i>dysertacji habilitacyjnej</i> (D. Sc.), obronionej na Uniwersytecie
        Jagiellonskim w roku 1986. Podręcznik autorstwa Leszka Kordylewskiego
        p.t."Problemy Bioetyki" wydany przez Uniwersytet Jagielloński w Krakowie
        ilustrował znany grafik i satyryk Andrzej Mleczko.{' '}
      </p>

      <p>
        Dr Leszek Kordylewski jest obecnie jednym z nielicznych ekspertów w
        zakresie mikroskopii opracowujących ekspertyzy forensyczne.
      </p>

      <h3>Na Internecie:</h3>
      <BioLinks />
      <br />
      <img
        src={worldMap}
        style={{ margin: 0 }}
        alt="Map of countries visited"
      />
      <br />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
