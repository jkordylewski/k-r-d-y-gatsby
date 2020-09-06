import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import frontcover from '../images/JofMicr-frontcover.jpg';
import bookcover from '../images/publications/book_cover.jpg';
import rosegarden from '../images/publications/13165035.jpg';
import exodus from '../images/publications/mexican_exodus.jpg';
import mural from '../images/publications/63059049.jpg';

import SEO from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="pubs">
    <SEO title="Publications" />

    <div id="copy">
      <Header />
      <h2>Selected publications:</h2>
      <h4>Book:</h4>
      <div class="pubsCopy">
        <b>Problemy Bioetyki (Problems of Bioethics)</b>
        <br />
        Kordylewski, L.,
        <br />
        Jagiellonian University, Cracow, 1996.
        <br />
        <Link to="/book">more</Link> | <Link to="/book">wiecej</Link>
        <br />
        <br />
      </div>

      <h4>Cover micrograph:</h4>
      <div class="pubsCopy">
        <b>Journal of Microscopy</b>,<br />
        Volume: 173, Pt 3, Year: 1994
        <br />
        <Link to="/gp-frontcover">
          <img
            src={frontcover}
            style={{ margin: 0 }}
            alt="Journal of Microscopy"
            height="100"
          />
        </Link>
        <br />
        <Link to="/gp-frontcover">View Image</Link>
        <br />
        <br />
      </div>
      <h4>Miscellaneous micrographs:</h4>
      <div class="pubsCopy">
        <b>Midwestern Association of Forensic Scientists Newsletter</b>, <br />
        Volume 35, Number 1, Page 39, Photo 5, Winter 2006
        <br />
        <br />
      </div>
      <h4>Miscellaneous photographs published:</h4>
      <br />
      <div class="pubsCopy">
        <Link to="/gp-bookcover" className="pubsIMG">
          <img
            src={bookcover}
            style={{ margin: 0 }}
            alt="Chicago and Its Botanic Garden Cover"
            height="100"
          />
        </Link>
        <Link to="/gp-bookcover">View Image </Link>

        <Link to="/gp-rosegarden" className="pubsIMG">
          <img
            src={rosegarden}
            style={{ margin: 0 }}
            alt="Grant Park Rose Garden"
            height="100"
          />
        </Link>
        <Link to="/gp-rosegarden">View Image</Link>

        <div class="copy">
          "<b>Chicago and Its Botanic Garden</b>"<br />
          by Cathy J. Maloney, Northwestern University Press, Evanston, 2015.
          <br /> p. 187 includes photograph by Les Kordylewski
          <br />
          <br />
        </div>
        <br />
      </div>
      <div class="pubsCopy" style={{ clear: 'both' }}>
        <Link to="/gp-exodus" className="pubsIMG">
          <img
            src={exodus}
            style={{ margin: 0 }}
            alt="Mexican Exodus Cover by Julia G. Young"
            height="100"
          />
        </Link>
        <Link to="/gp-exodus">View Image </Link>

        <Link to="/gp-mural" className="pubsIMG">
          <img
            src={mural}
            style={{ margin: 0 }}
            alt="Mural of Santo Toribio Romo in Chicago's Pilsen neighborhood"
            height="100"
          />
        </Link>
        <Link to="/gp-mural">View Image</Link>

        <div class="copy">
          "
          <b>
            Mexican Exodus - Emigrants, Exiles, and Refugees of the Cristero War
          </b>
          "<br />
          by Julia G. Young, Oxford University Press, New York, NY, 2015.
          <br />
          Figure 6.1 on p. 158 photograph by Les Kordylewski
          <br />
        </div>
        <br />
      </div>
      <h4 style={{ clear: 'both' }}>Research Articles:</h4>
      <div class="pubsCopy">
        <b>
          Quantification of ANP mRNA in primary cultures of adult rat atrial
          myocytes by image processing: in situ hybridization to multiple
          parallel samples using single-stranded cDNA probes.
        </b>
        <br />
        Kordylewski L, Ambler SK, Doyle DD,
        <br />
        Journal of Histochemistry and Cytochemistry, 43 (5), 481-488, 1995.
        <br />
        <a
          href="/pdfs/publications/J%20Histochem%20Cytochem-1995-Kordylewski-481-8.pdf"
          target="_blank"
          rel="noreferrer"
        >
          PDF
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/7730586/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Atomic force microscopy of freeze-fracture replicas of rat atrial
          tissue.
        </b>
        <br />
        Kordylewski L, Saner D, Lal R,
        <br />
        Journal of Microscopy, 173 (3), 173-81, 1994.
        <br />
        <a href="/pdfs/atomicforce.pdf" target="_blank" rel="noreferrer">
          PDF
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2818.1994.tb03440.x"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Rat atrial myocyte plasmalemmal caveolae in situ. Reversible
          experimental increases in caveolar size and in surface density of
          caveolar necks.
        </b>
        <br />
        Kordylewski L, Goings GE, Page E,
        <br />
        Circulation Research, 73 (1), 135-146, 1993.
        <br />
        <a
          href="/pdfs/publications/caveole_in_situ.pdf"
          target="_blank"
          rel="noreferrer"
        >
          PDF
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="http://circres.ahajournals.org/cgi/content/abstract/73/1/135"
          target="_blank"
          rel="noreferrer"
        >
          abstract
        </a>
        <br />
        <br />
        <b>
          Expression of phospholamban mRNA during early avian muscle
          morphogenesis is distinct from that of alpha-actin.
        </b>
        <br />
        Toyofuku T, Doyle DD, Zak R, Kordylewski L, <br />
        Developmental Dynamics, 196 (2), 103-113, 1993.
        <br />
        <a
          href="/pdfs/publications/Expression_of_Phospholamban_mRNA.pdf"
          target="_blank"
          rel="noreferrer"
        >
          PDF
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="https://anatomypubs.onlinelibrary.wiley.com/doi/abs/10.1002/aja.1001960204"
          target="_blank"
          rel="noreferrer"
        >
          abstract
        </a>
        <br />
        <br />
        <b>Histochemistry and isomyosins of tail musculature in Xenopus.</b>
        <br />
        Kordylewski L, Faber J, Gorlich A, Kilarski W,
        <br />
        Journal of Muscle Research and Cell Motility, 10 (4), 290-296, 1989.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/2527868/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Developmental changes in P-face and E-face particle densities of
          Xenopus cardiac muscle plasma membrane.
        </b>
        <br />
        Kordylewski L, Karrison T, Page E,
        <br />
        Tissue and Cell, 18 (5), 793-801, 1986.
        <br />
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/0040816686900789"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Change of motor innervation pattern in musculus longissimus dorsi of
          Xenopus laevis at metamorphosis.
        </b>
        <br />
        Kordylewski L, Gruszka J,
        <br />
        Zeitschrift fur Mikroskopische Anatomische Forschung (Jena), 100 (5),
        790-813, 1986.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/3577333/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Developmental changes in internal structure of chick heart plasma
          membrane.
        </b>
        <br />
        Kordylewski L, Goings G, Karrison T, Page E,
        <br />
        Developmental Biology, 112 (2), 485-488, 1985.
        <br />
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/001216068590421X"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Measurements on the internal structure of freeze-fractured cardiac
          plasma membrane.
        </b>
        <br />
        Kordylewski L, Karrison T, Page E,
        <br />
        American Journal of Physiology, 248 (3, Pt. 2), H297-H304, 1985.
        <br />
        <a
          href="https://journals.physiology.org/doi/abs/10.1152/ajpheart.1985.248.3.h297"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>Are gap junctional pits and particles complementary structures?</b>
        <br />
        Kordylewski L, Page E,
        <br />
        Biophysical Journal, 47, 2, 2, 506a, 1985
        <br />
        <a href="/pdfs/BiophysJabstract.pdf" target="_blank" rel="noreferrer">
          PDF
        </a>
        <br />
        <br />
        <b>Egg pigment is accumulated in the tadpole's brain.</b>
        <br />
        Kordylewski, L.
        <br />
        Experientia [Cellular and Molecular Life Sciences (CMLS)], 40 (3),
        277-279, 1984.
        <br />
        <a href="/pdfs/eggpigment.pdf" target="_blank" rel="noreferrer">
          PDF
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="https://link.springer.com/article/10.1007/BF01947581"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          P-face particle density of freeze-fractured vertebrate cardiac plasma
          membrane.
        </b>
        <br />
        Kordylewski L, Karrison T, Page E,
        <br />
        American Journal of Physiology, 245 (6), H992-H997, 1983.
        <br />
        <a
          href="http://ajpheart.physiology.org/cgi/content/abstract/245/6/H992"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Experimental evidence for the accumulation of egg pigment in the brain
          cavities of Xenopus tadpoles.
        </b>
        <br />
        Kordylewski L,
        <br />
        Journal of Experimental Zoology, 227 (1), 93-96, 1983.
        <br />
        <a
          href="https://onlinelibrary.wiley.com/doi/abs/10.1002/jez.1402270113"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          An ultrastructural study of the melanophages in the cerebrospinal
          fluid of the tadpoles of Xenopus.
        </b>
        <br />
        Kordylewski L,
        <br />
        Journal of Morphology, 176 (3), 315-324, 1983.
        <br />
        <a
          href="http://www3.interscience.wiley.com/cgi-bin/resolvedoi?DOI=10.1002/jmor.1051760305"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Light and electron microscopic observations of the development of
          intestinal musculature in Xenopus.
        </b>
        <br />
        Kordylewski, L.,
        <br />
        Zeitschrift fur Mikroskopische Anatomische Forschung (Jena), 97
        (4):719-734, 1983.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/6649786/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Morphology of motor end-plate and its size relation to the muscle
          fibre size in the amphibian submandibular muscle.
        </b>
        <br />
        Kordylewski L.,
        <br />
        Zeitschrift fur Mikroskopische Anatomische Forschung (Jena), 93
        (6):1038-1050, 1979.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/317619/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>Morphology of muscle fibres in amphibian submandibular muscle.</b>
        <br />
        Kordylewski L.,
        <br />
        Zeitschrift fur Mikroskopische Anatomische Forschung (Jena), 93 (2),
        225-243, 1979.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/532262/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Scanning electron microscopic observations of the development of the
          somites and their innervation in anuran larvae.
        </b>
        <br />
        Kordylewski L.,
        <br />
        Journal of Embryology and Experimental Morphology, 45 (Jun), 215-227,
        1978.
        <br />
        <a
          href="https://dev.biologists.org/content/45/1/215"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          The anatomy and the fine structure of extraocular muscles of the
          gudgeon, Gobio gobio (Linnaeus)
        </b>
        ,<br />
        Kordylewski, L.,
        <br />
        Acta Anatomica (Basel), 87 (4), 597-614, 1974.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/4829042/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>
          Some observations on mitochondria in muscle fibres of Salamandra
          salamandra (L.).
        </b>
        <br />
        Kordylewski, L.,
        <br />
        Zeitschrift fur Mikroskopische Anatomische Forschung (Jena), 88 (5),
        937-47, 1974.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/4460440/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
        <b>Motor nerve endings of extraocular muscles of Gobio gobio L.</b>,
        <br />
        Kordylewski, L.,
        <br />
        Folia Histochemica Cytochemica (Krakow), 11 (3), 333-334, 1973.
        <br />
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/4778393/"
          target="_blank"
          rel="noreferrer"
        >
          on the web
        </a>
        <br />
        <br />
      </div>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
