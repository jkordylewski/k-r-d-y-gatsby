import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import main from '../images/Gap Junction Overview wm.png';
import Header from '../components/header';
import Kordynet from '../components/kordynet';
import GapLinks from '../components/links/gap';

const IndexPage = ({ data }) => (
  <Layout name="gap">
    <Seo title="kontrowersja połączeńia szczelinowe" />

    <div id="copy">
      <Header />
      <h2>Kontrowersja połączeń szczelinowych (Gap Junction Controversy)</h2>
      <div className="pl-link">
        <Link to="/gap-junction">in English</Link>
      </div>
      <img src={main} alt="Illustracja połączeń szczelinowych" width="206" />
      <h3>Przeczytaj:</h3>
      <a
        href="/pdfs/gapjunction/Complementary replication of Gap Junctions in sheep cardiac Purkinje strands; Evidence for noncomplementarity of particles and pits Les Kordylewski.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Complementary replication of Gap Junctions in sheep cardiac Purkinje
        strands; Evidence for noncomplementarity of particles and pits
      </a>
      &nbsp;
      <small>Copyright &copy; 2022 Les Kordylewski</small>
      <br />
      <br />
      <a
        href="/pdfs/gapjunction/Gap Junction Ultrastructure Controversy Les Kordylewski.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Gap Junction Ultrastructure Controversy Resolved in 3-D: PITS AND
        PARTICLES DO NOT MATCH.
      </a>
      &nbsp;
      <small>Copyright &copy; 2022 Les Kordylewski</small>
      <div>
        <h3>Wyjaśnienie:</h3>
      </div>
      <p>
        Tekst załączonego artykułu mojego autorstwa zatytułowany:{' '}
        <b>
          <i>
            „Complementary replication of Gap Junctions in sheep cardiac
            Purkinje strands; Evidence for noncomplementarity of particles and
            pits”
          </i>
        </b>{' '}
        stanowi oryginalny manuskrypt przedstawiający wyniki moich obserwacji
        trójwymiarowej struktury połączeń szczelinowych (Gap Junctions - GJ)
        obecnych w błonach komórkowych miocytów serca. Oprocz niego załączam
        również nigdy nie opublikowany obszerny artykuł przeglądowy pt.{' '}
        <b>
          <i>
            „Gap Junction ultrastructure controversy resolved in 3D. Pits and
            particles do not match.”
          </i>
        </b>
        , który szczegółowo opisuje stosowane przeze mnie metody uwidaczniania
        submikroskopowych struktur w 3D.
      </p>
      <p>
        Obserwacje te, po zastosowaniu techniki rozłupywania komórek zamrożonych
        ciekłym azotem (Freeze-Fracture - FF), były produktem ubocznym moich
        prac badawczych nad ultrastrukturą błon komórkowych miocytów,
        przeprowadzonych w latach 1982-1995 w pracowni Mikroskopii Elektronowej
        Zakładu Medycyny Uniwersytetu Chicagowskiego (Department of Medicine of
        the University of Chicago). Wyniki tych moich badań są przedmiotem serii
        publikacji (<i>American Journal of Physiology</i>, 245 (6), H992-H997,
        1983; <i>Biophysical Journal</i>, 47, 2, 2, 506a, 1985;{' '}
        <i>American Journal of Physiology</i>, 248 (3, Pt. 2), H297-H304, 1985;{' '}
        <i>Developmental Biology</i>, 112 (2), 485-488, 1985;{' '}
        <i>Tissue and Cell</i>, 18 (5), 793-801, 1986;{' '}
        <i>Circulation Research</i>, 73 (1), 135-146, 1993;{' '}
        <i>Journal of Microscopy</i>, 173 (3), 173-81, 1994;{' '}
        <i>Journal of Histochemistry and Cytochemistry</i>, 43 (5), 481-488,
        1995), i są szeroko cytowane.{' '}
      </p>
      <p>
        Dla lepszego uwidocznienia cząstek (Particles) w błonach miocytów i ich
        ilościowego opracowania konsekwentnie stosowałem obrazowanie
        trójwymiarowe (poprzez wykonywanie setek fotografii przy pomocy
        transmisyjnego mikroskopu elektronowego wyposażonego w uchylny stolik) i
        analizowanie takich stereopar. Tę samą metodę 3D stosowałem przy
        fotografowaniu obszarów błon z widocznym rozłupanym GJ, przy czym na
        komplementarnych replikach odnajdowałem komplementarne Face E i P,
        uprzednio przylegające do siebie przed rozłupaniem tego samego Gap
        Junction (GJ).{' '}
      </p>
      <p>
        Niestety manuskrypt ten nigdy nie został opublikowany. Moje obserwacje i
        wnioski (wykazujące niekomplementarność dołeczków (Pits) i cząstek
        (Particles) koneksonów w komplementarnych replikach rozłupywanych błon
        komórkowych (przeprowadzone na trójwymiarowych obrazach (stereopairs)
        tych samych obszarów połączeń szczelinowych w replikach Face E i P tego
        samego GJ) były wówczas obiektem miażdżącej krytyki, jako niezgodne z
        przyjętym powszechnie podstawowym modelem struktury Gap Junctions (GJ).
        Ten tradycyjny model, w którym dołeczki (Pits) maja być bliznami w Face
        E po wyciągniętych z nich w procesie FF cząstkami (particles) widocznymi
        w Face P, po dziś dzień tak przedstawiany jest nadal w każdym
        podręczniku Biologii Komórki.{' '}
      </p>
      <p>
        Po zreferowaniu moich wyników na konferencji Biologii Komórki w
        Baltimore w 1985 roku (
        <i>
          Are gap junctional pits and particles complementary structures?{' '}
          <b>Biophysical Journal</b>
        </i>
        , 47, 2, 2, 506a, 1985), zostałem odwiedziony od publikowania pełnego
        tekstu tego kontrowersyjnego artykułu, gdyż zagrożono mi utratą
        finansowania prowadzonych przeze mnie badań. Wobec tego nie wysłałem
        tego manuskryptu do publikacji, mimo ze byłem i jestem nadal przekonany,
        iż moje wnioski obalające przyjęty powszechnie model są właściwe.{' '}
      </p>
      <p>
        Nikt nigdy dotąd nie zastosował użytej przeze mnie oryginalnej
        porównawczej metody dopasowywania stron Face E i P poprzez nakładanie na
        siebie{' '}
        <b>
          <span className="underline">trójwymiarowych obrazów</span>
        </b>{' '}
        replik w komplementarnych obszarach stron P i E wnętrza błony komórkowej
        w tym samym GJ. Zwykle stosowano jedynie porównywanie „płaskich”
        pojedynczych zdjęć face E i P, na ogol w obszarach rozmaitych - a nie w
        tych samych GJ. Stąd wyciągano tradycyjne wnioski, że wypukłe cząstki
        (Particles) muszą być zawsze w GJ komplementarne z dołeczkami (Pits).
      </p>
      <p>
        Moje obserwacje polegające na „dopasowywaniu” szczegółów
        komplementarnych struktur face E i P w replikach błon pochodzących z
        tych samych obszarów tego samego GJ zaprowadziły do jedynej możliwej
        interpretacji, iż po nałożeniu trójwymiarowych obrazów Face E i P tego
        samego Gap Junction dołeczki „pasują” do przestrzeni pomiędzy
        koneksonami. To jawnie zaprzeczało powszechnie przyjętemu poglądowi, ze
        w koneksonie dołeczki (Pits) są komplementarne z cząstkami (Particles),
        jakoby dołeczki (pits) były bliznami w Face E po wyciągniętych z nich
        cząsteczkach (particles) widocznych po stronie Face P. Według mnie, po
        stronie E w każdym GJ pomiędzy dołeczkami widoczne są zarysy drugiego
        zestawu cząstek. Są one połówkami koneksonów rozerwanych wzdłuż błony na
        pół w wyniku FF, a w replikach ukazują się jako komplementarne z
        siostrzanym zestawem połówek koneksonów, widocznych jako cząsteczki po
        stronie Face P. W nałożonych na siebie trójwymiarowych obrazach Face E i
        P połówki te są wzajemnie zliniowane w swej osi prostopadłej do
        płaszczyzny błony.
      </p>
      <p>
        W okresie kiedy dokonałem tej obserwacji, posługiwałem się licznymi
        dostępnymi mi wówczas prostymi urządzeniami i technikami dla analizy
        wysokiej rozdzielczości czarno-białych mikrofotografii – elektronogramów
        (patrz podrozdział Material and Methods). Moje doskonałej jakości
        zdjęcia obecnie zasługiwałyby aby (dla potwierdzenia wykazanej przeze
        mnie kontrowersyjnej komplementarności struktur) opracować je bardziej
        zaawansowanymi metodami komputerowymi. Niestety obecnie ja sam nie
        jestem w stanie kontynuować tego zadania.{' '}
      </p>
      <p>
        Temat ten uważam za ważny, ponieważ zwraca on uwagę na możliwą rolę
        przestrzeni pomiędzy koneksonami, gdzie według mnie zlokalizowane są
        dołeczki (pits). Mimo obszernej literatury na temat samych koneksonów,
        znaczenie przestrzeni pomiędzy koneksonami jest niedoceniane. Tam
        przecież muszą być zlokalizowane nieznane siły, które trzymają koneksony
        razem. Tymczasem wnioski o roli i strukturze koneksonów wysnuwane są
        zwykle poprzez stosowanie teoretycznych modeli, a nie w wyniku
        bezpośredniego uwidaczniania ich struktury. Natomiast czynniki
        utrzymujące pojedyncze koneksony we wspólnym zespole, które zapewne
        zlokalizowane są w przestrzeniach pomiędzy koneksonami gdzie widoczne sa
        dołeczki (pits), pozostają niedoceniane.
      </p>
      <div className="copyright">
        Previously Unpublished - Copyright &copy; February, 2022 Les
        Kordylewski. <br className="br" />
        All Rights Reserved.
      </div>
      <h3>Na Internecie:</h3>
      <GapLinks />
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
