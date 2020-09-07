import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import worldMap from '../images/worldmap_122015.gif';
import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="bio">
    <SEO title="Biography" />

    <div id="copy">
      <Header />
      <h2>Forensic Scientist</h2>
      <div className="pl-link">
        <Link to="/bio-pl">po Polsku</Link>
      </div>
      <div>
        <h3>Bio:</h3>
      </div>
      <p>
        Les Kordylewski Ph.D. is a Biologist who works as a Forensic Scientist.
        He is a former faculty member of the University of Chicago. He received
        his degrees from Jagiellonian University in Cracow, Poland. Les is the
        youngest son of a Polish astronomer, Kazimierz Kordylewski (1903-1981),
        who became famous for his discovery of Dust Moons in the Lagrangean
        Points of The Earth-Moon system.{' '}
      </p>
      <p>
        While working at the Department of Medicine of the University of Chicago
        as Assistant Professor, Les developed a unique method of quantification
        of cell membrane ultrastructural characteristics using three-dimensional
        imaging and image processing. He developed an original quantitative
        method of evaluating autoradiographic signal from sliced tissues to
        study gene expression by in situ hybridization of DNA.{' '}
      </p>
      <p>
        Long before the mechanisms of heritage of{' '}
        <b>
          <i>mitochondrial DNA</i>
        </b>{' '}
        were known, Dr. Kordylewski discovered and explained similar{' '}
        <i>
          <b>cytoplasmic inheritance</b>
        </i>{' '}
        mechanism of pigmentation in amphibian development (1969). This topic
        was presented as his dissertation for <i>habilitation</i> (D.Sc.) in
        1986.
      </p>
      <p>
        Les has nearly 40 years of experience with teaching and research in the
        fields of Light and Electron Microscopy, Histology, Embryology,
        Comparative Anatomy, General Biology, Cell Biology, and Cell
        Ultrastructure. He taught in Poland and in US, at Jagiellonian, UofC,
        Winthrop University in SC, and Barat College of DePaul University in
        Lake Forest IL. Les authored or coauthored more than 100 original papers
        and articles published in the leading US, international, and Polish
        scientific journals, which are cited by various authors worldwide. The
        work of Les and his coworkers was featured on the cover of March 1994
        Journal of Microscopy. In 1996 Les wrote a book &ldquo;Problems of
        Bioethics,&rdquo; which was the first textbook of its kind published in
        his native Polish language.
      </p>
      <p>
        After many years of service in academia, Dr. Kordylewski began to work
        for the State of Illinois Forensic Science Services in 1996. His current
        responsibilities as a Forensic Microscopist consist in examination of
        trace evidence using Polarized Light Microscopy, Fluorescence,
        Microspectrophotometry, and Infrared Microscopy. His duties include
        testifying in Court as an expert witness. He issued more than 800
        reports on his examinations. He is a member of American Academy of
        Forensic Sciences, Midwestern Association of Forensic Scientists, State
        of Illinois Microscopical Society, and American Association for Cell
        Biology.
      </p>
      <p>
        His hobbies include family life, travel, languages, and photography. He
        is fluent in English and his native Polish, he also speaks Russian, some
        German, French, and Latin, and he has mastered the International
        Language Esperanto. He has visited more than 40 countries worldwide.
      </p>

      <img
        src={worldMap}
        style={{ margin: 0 }}
        alt="Map of countries visited"
      />
      <small>originally created with world66.com</small>
      <br />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
