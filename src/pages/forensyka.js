import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

import Header from '../components/header';
import Kordynet from '../components/kordynet';

const IndexPage = ({ data }) => (
  <Layout name="forensyka">
    <Seo title="Forensyka" />

    <div id="copy">
      <Header />
      <h2>Forensyka</h2>
      <Link className="button" to="/forensics">
        &laquo; Back
      </Link>
      <div className="article">
        <div className="copyright">
          Previously Unpublished - Copyright &copy; October, 2007 Les
          Kordylewski. <br className="br" />
          All Rights Reserved.
        </div>
        <p style={{ textIndent: 0 }}>
          <b>
            Leszek Kordylewski, Ph.D., D.Sc.
            <br />
            Forensic Science Center, Chicago IL, USA
            <br />
          </b>
        </p>
        <p>
          Tragedia 9/11 zwr&#243;ci&#322;a uwag&#281; &#347;wiata na walk&#281;
          z terroryzmem i przest&#281;pczo&#347;ci&#261;. W mediach, a nawet w
          filmach fabularnych, coraz cz&#281;&#347;ciej pojawia si&#281;
          angielski termin{' '}
          <b>
            <i>Forensic</i>
          </b>
          . Okazuje si&#281; bowiem, &#380;e obecnie poczciwy detektyw w rodzaju
          Sherlocka Holmesa nie poradzi sobie pos&#322;uguj&#261;c si&#281;
          jedynie lup&#261;; nowoczesny tropiciel zbrodni musi mie&#263; do
          dyspozycji rozbudowany system metod analitycznych i aparatury
          naukowej, w kt&#243;r&#261; wyposa&#380;one s&#261; nowoczesne
          laboratoria.
        </p>
        <p>
          Terminy angielskie <i>Forensics</i> i <i>Forensic Science</i>,{' '}
          <i>Forensic Sciences</i> natrafiaj&#261; na trudno&#347;ci
          t&#322;umaczy w przek&#322;adaniu ich na j&#281;zyk polski. Nie ma
          bowiem trafnych odpowiednik&#243;w we wsp&#243;&#322;czesnej
          polszczy&#378;nie dla tych coraz bardziej popularnych angielskich
          termin&#243;w. Najcz&#281;&#347;ciej u&#380;ywane t&#322;umaczenia:{' '}
          <i>Medycyna S&#261;dowa</i>, <i>Nauki S&#261;dowe</i>, b&#261;d&#378;{' '}
          <i>Nauki S&#261;downicze</i>, oraz <i>Ekspertyza S&#261;dowa</i> nie
          oddaj&#261; adekwatnie znaczenia angielskiego rzeczownika{' '}
          <i>Forensics</i>, czy te&#380; przymiotnika <i>forensic</i>.
        </p>
        <p>
          Angielskie s&#322;owo <b>forensic</b> ma szeroki zakres znaczeniowy;
          tradycyjnie odnosi si&#281; do spraw zwi&#261;zanych z
          s&#261;downictwem, debat&#261; publiczn&#261;, a w
          szczeg&#243;lno&#347;ci do stosowania nauk empirycznych dla
          rozwi&#261;zywania problem&#243;w prawnych. W tym zaw&#281;&#380;onym
          znaczeniu jest ostatnio coraz powszechniej w j&#281;zyku angielskim
          u&#380;ywane. S&#322;owo to ma pochodzenie &#322;acinskie: wywodzi
          si&#281; od &#322;acinskich s&#322;&#243;w{' '}
          <b>
            <i>forum</i>
          </b>{' '}
          i{' '}
          <b>
            <i>forensis</i>
          </b>
          . Przymiotnik <i>forensis</i> " t&#322;umaczy si&#281; jako
          "publiczny", natomiast rzeczownik <i>forum</i> u&#380;ywany jest
          r&#243;wnie&#380; w j&#281;zyku polskim w tym samym znaczeniu co
          oryginalne &#322;acinskie, na okre&#347;lenie miejsca publicznej
          debaty.
        </p>
        <p>
          W oparciu o swoje wieloletnie zawodowe zaanga&#380;owanie w metody
          naukowe b&#281;d&#261;ce na us&#322;ugach amerykanskiego
          s&#261;downictwa proponuj&#281;, aby do wsp&#243;&#322;czesnego
          j&#281;zyka polskiego wprowadzi&#263; proste nowe terminy:{' '}
          <b>
            <i>forensyka</i>
          </b>{' '}
          (rzeczownik) i{' '}
          <b>
            <i>forensyczny</i>
          </b>{' '}
          (przymiotnik), jako pe&#322;noprawne i uzasadnione zapo&#380;yczenia z
          j&#281;zyka angielskiego. S&#261; one naturalnie brzmi&#261;ce, a
          ponadto posiadaj&#261; obszerniejsze, bardziej precyzyjne znaczenie od
          obecnie zast&#281;pczo u&#380;ywanych nieadekwatnych polskich
          wyra&#380;en. Sadz&#281; &#380;e proponowane przeze mnie fachowe
          neologizmy maj&#261; szans&#281; na przyj&#281;cie si&#281; w
          j&#281;zyku polskim. Mam nadzieje, &#380;e poni&#380;sze
          wyja&#347;nienia przekonaj&#261; sceptyk&#243;w ustosunkowanych
          krytycznie do zapo&#380;yczen z j&#281;zyk&#243;w obcych.
          Wsp&#243;&#322;czesny polski j&#281;zyk fachowy ma bowiem bogate
          tradycje przejmowania obcej terminologii, co sprzyja integracji nauki
          polskiej z nauk&#261; &#347;wiatow&#261;. Tworzenie rdzennie polskich
          odpowiednik&#243;w (np. nazw pierwiastkow jak wod&#243;r i tlen, lub
          KDN " kwas dezoksyrybonukleinowy - na DNA) jest oczywistym
          anchronizmem z ubieg&#322;ych epok.
        </p>
        <p>
          <b>Forensic Medicine (medycyna s&#261;dowa)</b> jest jedynie
          cz&#281;&#347;ci&#261; szerszego zakresu nauk wchodz&#261;cych w
          obr&#281;b <i>Forensics</i>, czyli nauk dot&#261;d po polsku
          cz&#281;sto nazywanych "<i>s&#261;dowymi</i>". Natomiast polski termin{' '}
          <i>ekspertyza s&#261;dowa</i> odnosi si&#281; bardziej do samej
          czynno&#347;ci analitycznej i przedstawienia jej w s&#261;dzie przez
          eksperta forensycznego, kt&#243;rego zazwyczaj nazywa si&#281; "
          <i>bieg&#322;ym s&#261;dowym</i>". Bieg&#322;y taki mo&#380;e jednak
          wcale na medycynie si&#281; nie zna&#263;, a jego zeznania
          dotyczy&#263; mog&#261; wielu innych zjawisk ni&#380; medyczne. W
          sk&#322;ad forensyki wchodzi&#263; b&#281;d&#261; wszystkie te nauki i
          ich techniki, kt&#243;re s&#261; stosowane w{' '}
          <i>Laboratoriach Kryminalistycznych</i> (Crime Labs), nazywanych coraz
          cz&#281;&#347;ciej <i>Centrami Nauk Forensycznych</i> (Forensic
          Science Centers).
        </p>
        <p>
          W j&#281;zyku niemieckim u&#380;ywa si&#281; s&#322;ow "Forensisch" i
          "Forensiche", w j&#281;zyku hiszpa&#324;skim istenieje s&#322;owo
          "forense". S&#322;owa <i>forensyka</i> i <i>forensyczny</i>{' '}
          wydaj&#261; si&#281; w spos&#243;b naturalny pasowa&#263; do
          j&#281;zyka polskiego. Latwo si&#281; odmieniaj&#261;: forensyce,
          forensyki, forensyk&#281;, forensyk&#261;, forensyczny/na/ne/ni, itp.
          W zakresie wymowy w rzeczowniku akcentowana powinna by&#263; sylaba EN
          (forENsyka), a nie przedostatnia SY (forenSYka), podobnie jak w
          rzeczownikach "MUzyka" "Opera" i "mateMAtyka", a nie "muZYka", "oPEra"
          i "matemaTYka".
        </p>
        <p>
          Rzeczownik rodzaju &#380;enskiego{' '}
          <b>
            <i>forensyka</i>
          </b>
          , okre&#347;laj&#261;cy dyscyplin&#281; naukow&#261;, winien mie&#263;
          odpowiednik w postaci rzeczownika rodzaju m&#281;skiego{' '}
          <b>
            <i>forensyk</i>
          </b>
          , na okre&#347;lenie fachowca zajmuj&#261;cego si&#281; t&#261;
          dyscyplin&#261;. Tak jak fizyk zajmuje si&#281; fizyk&#261;, forensyk
          uprawia forensyk&#281;. Jest on ekspertem s&#261;dowym w zakresie
          wielu r&#243;&#380;nych dziedzin naukowych, niekoniecznie
          zwi&#261;zanych z medycyn&#261;. Podobnie jak lekarz medycyny
          zaw&#281;&#380;a si&#281; do rozmaitych specjalno&#347;ci, tak i
          forensyk nie obejmuje sw&#261; ekspertyz&#261; ca&#322;o&#347;ci nauk
          forensycznych, lecz jest niejednokrotnie w&#261;skim specjalist&#261;,
          a ca&#322;o&#347;&#263; forensyki ogarnia jedynie w jej podstawach.
          Forensyka mo&#380;na by r&#243;wnie&#380; nazwa&#263;
          "forensykologiem", przez analogi&#281; do laryngologa lub entomologa.
          Ten niepotrzebnie przyd&#322;ugi termin jest mniej s&#322;uszny,
          gdy&#380; w odr&#243;&#380;nieniu od laryngologii i entomologii,
          termin "forensologia" nie wydaje si&#281; lepszy ni&#380; "forensyka".
        </p>
        <p>
          Zakres <b>forensyki</b> jest niezmiernie rozleg&#322;y i zmienia
          si&#281; w czasie. Rozmaite dziedziny i metody naukowe s&#261;
          tak&#380;e w r&#243;&#380;nym stopniu wykorzystywane do cel&#243;w
          forensycznych w odmiennych krajach. W sk&#322;ad forensyki
          wchodz&#261; takie specjalno&#347;ci jak np.{' '}
          <i>patologia forensyczna</i> (Forensic Pathology),{' '}
          <i>biochemia forensyczna</i> (Forensic Biochemistry),{' '}
          <i>biologia forensyczna</i> (Forensic Biology),{' '}
          <i>serologia forensyczna</i> (Forensic Serology), kt&#243;re
          mo&#380;na uzna&#263; za pokrewne medycynie. Jednak wiele innych
          dziedzin forensyki, jak np. <i>entomologia forensyczna</i> (Forensic
          Entomology), <i>botanika forensyczna</i> (Forensic Botany),{' '}
          <i>traseologia</i> (Traseology), <i>mikroskopia forensyczna</i>{' '}
          (Forensic Microscopy), <i>chemia narkotyk&#243;w</i> (Drug Chemistry),{' '}
          <i>daktyloskopia</i> (Dactyloscopy), <i>balistyka</i> (Balistics),{' '}
          <i>kryminalistyka</i> (Criminalistics), <i>kryminologia</i>{' '}
          (Criminology) s&#261; niejednokrotnie bardzo odleg&#322;e od medycyny,
          albo w og&#243;le nie maj&#261; z ni&#261; wiele wsp&#243;lnego.
          Dyscypliny te pos&#322;uguj&#261; si&#281; z&#322;o&#380;onymi
          nowoczesnymi metodami bli&#380;szymi chemii czy fizyce, a nawet
          psychologii, a nie medycynie. Zaden ekspert nie jest w stanie
          ogarn&#261;&#263; tych wszystkich dziedzin, dlatego te&#380; od
          forensyka oczekuje si&#281; specjalizacji w jednej lub kilku
          poni&#380;ej om&#243;wionych dyscyplinach, lub nawet w specjalizacjach
          jeszcze bardziej zaw&#281;&#380;onych. Np. forensyk-mikroskopista,
          kt&#243;ry prowadzi analiz&#281; w&#322;os&#243;w, b&#281;dzie
          mia&#322; wi&#281;cej wsp&#243;lnego z lekarzem dermatologiem,
          ni&#380; jego kolega, tak&#380;e forensyk-mikroskopista, kt&#243;ry
          zajmuje si&#281; analiz&#261; lakier&#243;w samochodowych. Obaj jednak
          pos&#322;ugiwa&#263; si&#281; bed&#261; r&#243;wnie biegle
          technik&#261; mikroskopii forensycznej.
        </p>
        <p>
          <b>Patologia forensyczna (Forensic Pathology)</b> jest dziedzin&#261;
          patologii, kt&#243;ra zajmuje si&#281; patologicznymi zmianami w
          organizmach (g&#322;&#243;wnie w ciele ludzkim) b&#281;d&#261;cymi
          nast&#281;pstwem akt&#243;w kryminalnych. W zakres tych zmian
          wchodz&#261; nast&#281;pstwa postrza&#322;&#243;w, uderzen, uduszen,
          gwa&#322;t&#243;w, a niejednokrotnie nawet wypadk&#243;w
          samochodowych. Wobec stosowania modeli zwierz&#281;cych do
          eksperymentalnego badania tych zmian, patologia forensyczna
          pos&#322;uguje si&#281; tak&#380;e warsztatem patologii zwierz&#261;t,
          oraz zootechniki. Do eksperyment&#243;w nad tempem rozk&#322;adu
          zw&#322;ok, opr&#243;cz zw&#322;ok ludzkich (pochodz&#261;cych z
          donacji na cele naukowe), u&#380;ywa si&#281; te&#380; zw&#322;ok
          zwierz&#261;t gospodarczych, najcz&#281;&#347;ciej trzody chlewnej,
          poniewa&#380; ich tkanki s&#261; histologicznie zadziwiaj&#261;co
          zbli&#380;one do ludzkich.
        </p>
        <p>
          <b>Biochemia forensyczna (Forensic Biochemistry)</b> zajmuje si&#281;
          analiz&#261; DNA w materiale dowodowym. Przy pomocy precyzyjnych
          test&#243;w (PCR &mdash; Polymerase Chain Reaction) z bardzo wielkim
          prawdopodobienstwem mo&#380;na wskaza&#263; na dawc&#281;
          materia&#322;u biologicznego, lub go wykluczy&#263;. Metody analizy
          DNA rozwin&#281;&#322;y si&#281; w ostatnich dziesi&#281;cioleciach
          bardzo dynamicznie i s&#261; nadal udoskonalane. Wyposa&#380;y&#322;y
          forensyk&#281; w narz&#281;dzie do identyfikacji osobnik&#243;w,
          kt&#243;re jest niepor&#243;wnywalnie doskonalsze ni&#380;
          daktyloskopia czy badanie innych &#347;lad&#243;w. Metody te
          wymagaj&#261; jednak bardzo kosztownych laboratori&#243;w
          wyposa&#380;onych w najnowsza aparatur&#281;, wysoce toksycznych
          odczynnik&#243;w chemicznych (mutagen&#243;w lub karcinogen&#243;w
          takich jak bromek etydyny, fenol i chloroform), oraz maksymalnie
          sterylnych warunk&#243;w pracy.
        </p>
        <p>
          <b>Biologia forensyczna (Forensic Biology)</b> jest obecnie na
          us&#322;ugach biochemii forensycznej, poniewa&#380; zajmuje si&#281;
          wykrywaniem materia&#322;u biologicznego (g&#322;&#243;wnie
          p&#322;yn&#243;w ustrojowych takich jak krew, osocze, &#347;lina, pot,
          lub sperma), kt&#243;re mog&#261; nadawa&#263; si&#281; do test&#243;w
          biochemicznych na obecno&#347;&#263; i rodzaj DNA. Zasadniczo
          ka&#380;da tkanka organizmu ludzkiego lub zwierz&#281;cego mo&#380;e
          by&#263; obiektem analizy DNA. Ostatnio coraz wi&#281;ksz&#261;
          popularno&#347;&#263; zyskuje analiza DNA we w&#322;osach znajdowanych
          w materiale dowodowym. Ta metoda osi&#261;gn&#281;&#322;a szczyt
          popularno&#347;ci po identyfikacji zw&#322;ok z DNA pochodz&#261;cego
          z w&#322;os&#243;w po tragedii World Trade Center w Nowym Jorku w r.
          2002. Wiele szcz&#261;tk&#243;w ofiar zosta&#322;o zidentyfikowanych
          po przed&#322;o&#380;eniu przez rodziny ich w&#322;os&#243;w jako
          znane pr&#243;bki pozostaj&#261;ce na grzebieniach w domu.
        </p>
        <p>
          <b>Serologia forensyczna (Forensic Serology)</b> by&#322;a bardzo
          popularn&#261; dziedzin&#261; w ostatnich dziesi&#281;cioleciach.
          Jednak w obliczu rozwoju technik analizy DNA odgrywa ona coraz
          mniejsz&#261; rol&#281; i nie jest ostatnio stosowana. Zajmuje
          si&#281; oznaczaniem grup krwi w p&#322;ynach ustrojowych znajdowanych
          w materiale dowodowym. Grup krwi jest zaledwie kilka, podczas gdy
          prawie ka&#380;dy osobnik ma odmienne DNA. Wobec wi&#281;kszej
          precyzji analiz DNA, serologia forensyczna traci wi&#281;c obecnie na
          znaczeniu. Mo&#380;e s&#322;u&#380;y&#263; jedynie do wykluczenia
          podejrzanego.
        </p>
        <p>
          <b>Entomologia forensyczna (Forensic Entomology)</b> jest
          dziedzin&#261; entomologii, kt&#243;ra zajmuje si&#281; oznaczaniem
          gatunk&#243;w owad&#243;w rozwijaj&#261;cych si&#281; w materiale
          dowodowym, g&#322;&#243;wnie w zw&#322;okach. Czerwie i inne owady
          s&#261; swoistymi zegarami, kt&#243;rych rozw&#243;j jest precyzyjnie
          okre&#347;lony w czasie (zale&#380;ny jedynie od temperatury
          otoczenia). Dzi&#281;ki znajomo&#347;ci stadi&#243;w rozwojowych
          tych&#380;e owad&#243;w mo&#380;na w miar&#281; dok&#322;adnie
          ustali&#263; okres czasu jaki up&#322;yn&#261;&#322; od zgonu
          osobnika, kt&#243;rego cia&#322;o, niejednokrotnie porzucone
          gdzie&#347; na odludziu, mo&#380;e pozostawa&#263; tam przez
          d&#322;u&#380;szy czas, zanim zostanie znalezione i zidentyfikowane.
        </p>
        <p>
          <b>Chemia &#347;lad&#243;w (Trace Chemistry)</b> jest dziedzin&#261;
          pos&#322;uguj&#261;ca si&#281; metodami analizy chemicznej
          &#347;lad&#243;w pozostawionych w materiale dowodowym w spos&#243;b
          niejednokrotnie niewidoczny dla oka. Ze wzgl&#281;du na
          popularno&#347;&#263; podpalen w USA, znaczna cze&#347;&#263; analiz
          zajmuje si&#281; chemicznym wykrywaniem w zgliszczach &#347;lad&#243;w
          materia&#322;&#243;w &#322;atwopalnych, kt&#243;re by&#322;y
          u&#380;yte do podpalenia. Chemia &#347;lad&#243;w zajmuje si&#281;
          r&#243;wnie&#380; wykrywaniem i por&#243;wnywaniem
          materia&#322;&#243;w wybuchowych, tak&#380;e obecnych w materiale
          dowodowym po wystrza&#322;ach (GSR " Gun Shot Residue analysis).
          Opr&#243;cz metod chromatografii gazowej (gas chromatography), stosuje
          analiz&#281; pierwiastk&#243;w (elemental analysis), bombarduj&#261;c
          badane pr&#243;bki pod pr&#243;&#380;ni&#261; strumieniem
          przyspieszonych elektron&#243;w w skaningowym mikroskopie elektronowym
          (SEM).
        </p>
        <p>
          <b>Mikroskopia forensyczna (Forensic Microscopy)</b> zajmuje si&#281;
          analiz&#261; detali obecnych w materiale dowodowym, kt&#243;re s&#261;
          niewidoczne dla nieuzbrojonego oka. Podstawowym instrumentem
          u&#380;ywanym w mikroskopii forensycznej jest mikroskop
          z&#322;o&#380;ony (compound microscope). Rutynowo stosowane s&#261;
          tak&#380;e jego odmiany: mikroskop stereoskopowy czyli lupa
          binokularna (stereomicroscope), mikroskop do &#347;wiat&#322;a
          spolaryzowanego (PLM), oraz mikroskop por&#243;wnawczy (comparison
          microscope). Ten ostatni zezwala na r&#243;wnoczesn&#261;
          obserwacj&#281; dw&#243;ch pr&#243;bek (o znanym i nieznanym
          pochodzeniu), kt&#243;re por&#243;wnywa&#263; mo&#380;na obok siebie w
          jednym polu widzenia. Obiektem badan mikroskopii forensycznej s&#261;
          g&#322;&#243;wnie w&#322;osy lub w&#322;&#243;kna tekstylne,
          znajdowane na miejscu zbrodni lub na jej ofiarach. Mikroskopia
          forensyczna identyfikuje rozmaite niewidoczne cz&#261;stki,
          pozwalaj&#261;c np. ustali&#263; po &#347;miertelnym wypadku drogowym,
          kto zajmowa&#322; miejsce kierowcy: &#380;yj&#261;cy domniemany
          pasa&#380;er, czy zabity domniemany kierowca; niewidoczne &#347;lady
          pochodz&#261;ce z samochodowych poduszek powietrznych (air bags)
          zdradz&#261; prawdziwe miejsca zajmowane w momencie wypadku przez ich
          uczestnik&#243;w. Stosuj&#261;c metod&#281; analizy roz&#322;am&#243;w
          (fracture match) mikroskopia forensyczna pozwala te&#380; ustali&#263;
          czy fragmenty obiekt&#243;w, znajdowane cz&#281;sto w rozmaitych
          lokalizacjach, pochodz&#261; z jednej ca&#322;o&#347;ci.
        </p>
        <p>
          <b>Botanika forensyczna (Forensic Botany)</b> pos&#322;uguje si&#281;
          metodami mikroskopii &#347;wietlnej i elektronowej (SEM). Zajmuje
          si&#281; g&#322;&#243;wnie mikroskopowym oznaczaniem
          szcz&#261;tk&#243;w ro&#347;linnych zawartych w materiale dowodowym, w
          tym g&#322;&#243;wnie py&#322;k&#243;w kwiatowych. Ta dziedzina
          nazywana jest palinologi&#261; forensyczn&#261;. Metody palinologiczne
          stosowane by&#322;y w analizie autentyczno&#347;ci ca&#322;unu
          turynskiego. Analiza okrzemk&#243;w (diatomologia forensyczna) pomocna
          jest w identyfikacji ofiar utoni&#281;&#263;.
        </p>
        <p>
          Obiektem analiz <b>geologii forensycznej (Forensic Geology)</b> jest
          gleba i jej sk&#322;adniki. Poniewa&#380; w USA nielegalne jest
          stosowanie soli jako przyn&#281;ty do polowan, cz&#281;sty
          materia&#322; dowodowy stanowi podwy&#380;szony poziom chlorku sodu
          (NaCl) w dostarczonej pr&#243;bce gleby.
        </p>
        <p>
          <b>Chemia narkotyk&#243;w (Drug Chemistry)</b> stosuje metody analizy
          chemicznej do jako&#347;ciowego i ilo&#347;ciowego oznaczania
          nielegalnych narkotyk&#243;w. W Rosji i wielu innych krajach ta
          dziedzina forensyki zajmuje si&#281; tak&#380;e oznaczaniem
          st&#281;&#380;enia alkoholu w fa&#322;szowanych trunkach. Problem ten
          obecnie w og&#243;le nie jest przedmiotem analiz forensycznych w USA,
          mimo &#380;e w czasach prohibicji (lata dwudzieste XX wieku) analiza
          obecno&#347;ci alkoholu w materiale dowodowym stanowi&#322;a tu
          znaczny procent badan. Dzi&#347; obecno&#347;&#263; alkoholu w krwi
          kierowcy jest wi&#281;kszym przest&#281;pstwem; sprawdza si&#281;
          j&#261; prostym testem na miejscu wypadku (ekspertyza alkohologiczna)
          i na og&#243;&#322; nie jest to przedmiotem analiz w laboratoriach
          forensycznych. Chemia narkotyk&#243;w jest zaw&#281;&#380;onym
          dzia&#322;em szerzej poj&#281;tej toksykologii forensycznej,
          kt&#243;ra z kolei ma wiele powi&#261;zan z farmakologi&#261;.
        </p>
        <p>
          <b>Daktyloskopia (Dactyloscopy)</b> zajmuje si&#281; analiz&#261; i
          por&#243;wnywaniem odcisk&#243;w palc&#243;w pozostawionych na
          materiale dowodowym. Wobec zwi&#281;kszaj&#261;cej si&#281;
          popularno&#347;ci analiz DNA, daktyloskopia tak wa&#380;na w
          pocz&#261;tkach forensyki, traci obecnie na znaczeniu. Niejednokrotnie
          jednak mo&#380;e wskaza&#263; na to miejsce na materiale dowodowym, z
          kt&#243;rego warto pobra&#263; mikroskopijna pr&#243;bk&#281; na
          obecno&#347;&#263; DNA, poniewa&#380; tam znajduje si&#281; &#347;lad
          potu lub tkanek nask&#243;rka z palca osobnika podejrzanego.
          Daktyloskopia znacznie usprawni&#322;a proces analizy i
          por&#243;wnania odcisk&#243;w palc&#243;w przez wprowadzenie
          komputerowej analizy obrazu. Okazuje si&#281; jednak, &#380;e unikalne
          odciski na dowodach zbrodni mog&#261; powsta&#263; nie tylko w wyniku
          dotykania ich palcami. Tote&#380; dynamicznie rozwijaj&#261; si&#281;
          inne poddziedziny daktyloskopii: cheiroskopia " opisuje odciski
          ca&#322;ej wewn&#281;trznej powierzchni d&#322;oni, podoskopia "
          odciski stopy, konchoskopia " odciski ma&#322;&#380;owiny ucha,
          frontoskopia " czo&#322;a, cheiloskopia " &#347;lady warg.
        </p>
        <p>
          Nawet spalone szcz&#261;tki ofiary zbrodni lub wypadku mo&#380;na
          jednoznacznie zidentyfikowa&#263; na podstawie jej uz&#281;bienia.
          St&#261;d te&#380;{' '}
          <b>stomatologia forensyczna (Forensic Dentistry)</b>{' '}
          rozwin&#281;&#322;a specyficzny warsztat analityczny. Z podobnych
          przyczyn unikatowe &#347;lady ugryzien (bitemarks) s&#261; tak&#380;e
          obiektem badan forensycznych.
        </p>
        <p>
          <b>Traseologia (Traseology)</b> zajmuje si&#281; badaniem
          pozostawionych przez rozmaite przedmioty &#347;lad&#243;w w postaci
          odcisk&#243;w. Materia&#322; z odzie&#380;y ofiary mo&#380;e
          pozostawi&#263; wz&#243;r tkaniny odci&#347;ni&#281;ty w czasie
          potr&#261;cenia na lakierze samochodu. Zapobiegliwy przest&#281;pca
          ubrany w r&#281;kawiczki nie&#347;wiadomie pozostawia odciski samych
          r&#281;kawiczek. Slady obuwia lub opon auta s&#261; cz&#281;stym
          obiektem badan miejsca zbrodni. Na podstawie analizy kszta&#322;tu
          roz&#322;amu ekspert traseologiczny mo&#380;e r&#243;wnie&#380; orzec,
          czy dwa fragmenty ca&#322;o&#347;ci mog&#322;y pochodzi&#263; z tego
          samego przedmiotu.
        </p>
        <p>
          <b>Badanie dokument&#243;w (Documents)</b> nie doczeka&#322;o si&#281;
          utartej nazwy tej dyscypliny. Grafologia forensyczna zajmuje si&#281;
          jedynie analiz&#261; samego pisma, podczas gdy z&#322;o&#380;ona
          analiza papieru, sk&#322;adu chemicznego atramentu, czy wiedza na
          temat urz&#261;dzen kopiuj&#261;cych i drukarskich s&#261;
          niezb&#281;dne do z&#322;o&#380;onej analizy autentyczno&#347;ci
          dokument&#243;w. Na potrzeby forensyki ka&#380;de dzie&#322;o sztuki
          uwa&#380;ane jest za unikatowy dokument. Warsztat pracy forensyka
          analizuj&#261;cego autentyczno&#347;&#263; takiego dzie&#322;a musi
          niejednokrotnie stanowi&#263; po&#322;&#261;czenie studia artysty z
          nowoczesnym laboratorium naukowca.
        </p>
        <p>
          <b>Fotografia forensyczna (Forensic Photography)</b> ma tradycyjnie
          praktyczne znaczenie dla dokumentowania miejsca i dowod&#243;w
          zbrodni. Jednak wobec dynamicznie rozwijaj&#261;cych si&#281;
          mo&#380;liwo&#347;ci elektronicznego modyfikowania obrazu cyfrowego
          dokumentacja fotograficzna traci na znaczeniu jako wiarygodny
          dow&#243;d s&#261;dowy. Obrazowanie komputerowe ma dla forensyki
          jedynie znaczenie pomocnicze, np. w odtwarzaniu wygl&#261;du twarzy
          podejrzanego lub zaginionej ofiary.
        </p>
        <p>
          <b>Balistyka (Balistics)</b> pos&#322;uguje si&#281; metodami
          zbli&#380;onymi do mikroskopii forensycznej przy por&#243;wnywaniu
          mikroskopijnych znamion poczynionych specyficznie na amunicji przez
          bron, z kt&#243;rej zosta&#322;a wystrzelona. Balistyka tradycyjnie
          zajmuje si&#281; zasadami poruszania si&#281; pocisku i zjawiskami
          zwi&#261;zanymi z wyrz&#261;dzanymi przez niego szkodami. Balistyka
          zajmuje si&#281; r&#243;wnie&#380; por&#243;wnywaniem znamion
          poczynionych na materiale dowodowym rozmaitymi innymi
          narz&#281;dziami, kt&#243;re mog&#261; by&#263; narz&#281;dziami
          zbrodni. Ta dziedzina nazywana jest r&#243;wnie&#380;{' '}
          <b>mechanoskopi&#261; (Mechanoscopy)</b>.
        </p>
        <p>
          <b>Osmologia (Osmology)</b> jest nauk&#261; o zapachach i ich
          identyfikowaniu. Poniewa&#380; do analizy osmologicznej stosowane
          s&#261; psy, metoda ta, mimo swej wielkiej skuteczno&#347;ci, spotyka
          si&#281; z du&#380;ym sceptycyzmem, poniewa&#380; jej podstawy
          teoretyczne nie s&#261; dog&#322;&#281;bnie poznane. Zbyt ma&#322;o
          jest wiadomo o zmy&#347;le w&#281;chu ps&#243;w.
        </p>
        <p>
          Podobnie <b>fonoskopia (Phonoscopy)</b>, czyli nauka o identyfikacji
          d&#378;wi&#281;k&#243;w (szczeg&#243;lnie g&#322;osu ludzkiego), jest
          dziedzin&#261; m&#322;od&#261;. Do czasu rozwini&#281;cia cyfrowych
          metod analizy d&#378;wi&#281;ku spotyka&#322;a si&#281; z
          zastrze&#380;eniami co do obiektywno&#347;ci rezultat&#243;w.
        </p>
        <p>
          Obecnie dynamicznie rozwija si&#281; dziedzina tak&#380;e nie
          maj&#261;ca jeszcze zgrabnej fachowej nazwy:{' '}
          <b>
            analiza rozproszenia &#347;lad&#243;w krwi (Bloodspatter Analysis)
          </b>
          . Wykorzystuj&#261;c tr&#243;jwymiarowe komputerowe modele miejsca
          zbrodni oraz analizuj&#261;c kszta&#322;t, rozmiary, oraz uk&#322;ad
          pozostawionych &#347;lad&#243;w krwi, technika ta pozwala na
          odtworzenie akcji zbrodni, a w szczeg&#243;lno&#347;ci czasu i sposobu
          w jaki ofiara zosta&#322;a atakowana lub zamordowana.
        </p>
        <p>
          <b>Kryminologia (Criminology)</b> zajmuje si&#281; badaniem
          przest&#281;pczo&#347;ci jako zjawiska spo&#322;ecznego, ma wi&#281;c
          zatem wi&#281;cej wsp&#243;lnego z socjologi&#261; ni&#380; z
          medycyn&#261;. Bada tak&#380;e osobowo&#347;&#263; przest&#281;pcy i w
          tym zakresie pos&#322;uguje si&#281; warsztatem psychologii. Osobny
          dzia&#322; kryminologii, nazywany wiktymologi&#261;, zajmuje si&#281;
          osob&#261; ofiary, jej roli w przest&#281;pstwie i podatno&#347;ci na
          przest&#281;pstwo. Poznanie spo&#322;ecznych i psychologicznych
          przyczyn pope&#322;niania przest&#281;pstw mo&#380;e by&#263; pomocne
          w ich zapobieganiu. Kryminologia opisuje patologi&#281;
          spo&#322;eczn&#261; i opracowuje metodyk&#281; jej eliminacji.
          Specjalist&#281; zajmuj&#261;cego si&#281; t&#261; dziedzina nazywamy
          zwykle kryminologiem. W USA popularnym narz&#281;dziem kryminologii
          jest urzadzenie nazywane wykrywaczem k&#322;amstw (poligraf) przy
          pomocy kt&#243;rego rejestruje si&#281; reakcje fizjologiczne w
          trakcie przesluchiwania podejrzanego; zastosowanie poligrafii jest
          jednak wci&#261;&#380; kontrowersyjne, poniewa&#380; krytykowana jest
          wiarygodno&#347;&#263; rezultat&#243;w uzyskiwanych t&#261;
          metod&#261;.
        </p>
        <p>
          W odr&#243;&#380;nieniu od kryminologii, kt&#243;ra jest nauk&#261;
          bardziej teoretyczn&#261;, <b>kryminalistyka (Criminalistics)</b>{' '}
          zajmuje si&#281; techniczn&#261; stron&#261; pope&#322;niania
          przest&#281;pstw. Kryminalistyka opisuje praktyczne metody stosowane w
          zbrodniach, a tak&#380;e zawiera wiedz&#281; o narz&#281;dziach
          zbrodni. Cz&#281;sto uwa&#380;a si&#281;, ze kryminalistyka albo
          kryminologia (cz&#281;sto b&#322;&#281;dnie uwa&#380;ane za synonimy)
          pokrywaj&#261; ca&#322;o&#347;&#263; zakresu zagadnien tego, co w
          niniejszym artykule proponuj&#281; nazywa&#263; forensyk&#261;.
          Forensyka ma jednak szeroko obejmowa&#263; ca&#322;okszta&#322;t
          teorii i praktyki wszelkich nauk b&#281;d&#261;cych na us&#322;ugach
          s&#261;downictwa, a nie tylko te, kt&#243;re tradycyjnie obejmuje
          kryminologia i kryminalistyka. Kryminologia i kryminalistyka
          zajmuj&#261; si&#281; sam&#261; zbrodni&#261;, forensyka dostarcza
          metod do wykrywania zbrodni.
        </p>
        <p>
          Praktycznie nie ma takiej dziedziny nauk, kt&#243;ra w jakim&#347;
          momencie nie mog&#322;a by nagle zacz&#261;&#263; si&#281;
          rozwija&#263; w obr&#281;bie forensyki. Pomys&#322;owo&#347;&#263;
          kryminalist&#243;w i terroryst&#243;w w stosowaniu post&#281;pu
          technologicznego do czyn&#243;w przest&#281;pczych jest bowiem
          nieograniczona. St&#261;d te&#380; i nauki forensyczne musz&#261; sie
          dynamicznie rozwija&#263;, aby te kryminalne czyny wykrywa&#263; jak
          najbardziej nowoczesnymi metodami. Metodami id&#261;cymi za
          post&#281;pem technologii, ktore sa powszechnie dost&#281;pne,
          tak&#380;e kryminalistom.
        </p>
        <p>
          Na przyk&#322;ad, w ostatnich latach zastraszenie Ameryki
          w&#261;glikiem (amtrax) doprowadzi&#322;o nagle do zainteresowania
          ekspert&#243;w forensycznych metodami bakteriologicznymi.
          Zupe&#322;nie niespodziewanie rozwin&#281;&#322;a si&#281; wiec{' '}
          <b>bakteriologia forensyczna (Forensic Bacteriology)</b>. Cho&#263;
          jest to ma&#322;o prawdopodobne, do pomy&#347;lenia s&#261;
          r&#243;wnie&#380; dziedziny forensyki tak dla niej odlegle jak{' '}
          <b>archeologia forensyczna (Forensic Archeology)</b> - gdyby
          narz&#281;dziem zbrodni mia&#322; by&#263; obiekt pochodz&#261;cy z
          wykopalisk, lub{' '}
          <b>paleontologia forensyczna (Forensic Paleontology)</b> - gdy denat
          zabity zostanie ko&#347;ci&#261; dinozaura&#8230;.
        </p>
        <p>
          Dr Larry Ciupik z Planetarium Adlera w Chicago jest jednym z
          nielicznych ekspert&#243;w w zakresie{' '}
          <b>astronomii forensycznej (Forensic Astronomy)</b>. Okazuje si&#281;,
          &#380;e wiedza o tym w jakiej fazie byl Ksi&#281;&#380;yc w momencie
          dokonania zbrodni i czy w jego &#347;wietle cokolwiek mo&#380;na
          by&#322;o dostrzec, lub jak d&#322;ugi by&#322; cien zbrodniarza w
          zale&#380;no&#347;ci od pozycji Ksi&#281;&#380;yca na niebie mo&#380;e
          miec istotne znaczenie w &#347;ledztwie. Zapewne powstanie tak&#380;e
          nawet <b>forensyka astronautyczna (Space Forensics)</b> - wobec
          perspektywy zwi&#281;kszaj&#261;cej si&#281; ekspansji cz&#322;owieka
          w Kosmos. Przysz&#322;y Sherlock Holmes, opr&#243;cz lupy, b&#281;dzie
          musia&#322; mie&#263; do dyspozycji Skylab. Bowiem zbrodnie
          pope&#322;nione w stanie niewa&#380;ko&#347;ci na pewno b&#281;d&#261;
          mia&#322;y inn&#261; specyfik&#281;, ni&#380; te przyziemne, obarczone
          wp&#322;ywem grawitacji&#8230;.
        </p>
        <p>
          Trudno przewidzie&#263;, czy proponowane przeze mnie terminy &ldquo;
          <b>forensyka</b>&rdquo;, &ldquo;<b>forensyczny/a/e</b>&rdquo; i
          &ldquo;<b>forensyk</b>&rdquo; przyjm&#261; si&#281; we
          wsp&#243;&#322;czesnym j&#281;zyku polskim. Spotka&#322;em sie juz z
          krytyk&#261;, że &bdquo;bez powodu&rdquo; upieram sie przy lansowaniu
          takich termin&#243;w, kt&#243;re purysta-polonista nazwie
          &bdquo;potworkami&rdquo; lub &bdquo;s&#322;ownymi nowotworami&rdquo;.
          Krytykuj&#261;cy mnie dyletanci forensyczni upiera&#263; si&#281;
          b&#281;da przy swoim, &#380;e wystarczaj&#261; im
          &bdquo;czystopolskie&rdquo; terminy &bdquo;medycyna
          s&#261;dowa&rdquo;, &bdquo;kryminalistyka&rdquo;, lub
          &bdquo;kryminologia&rdquo;. Ka&#380;dy jednak specjalista, kt&#243;ry
          cho&#263; troch&#281; otar&#322; si&#281; o problematyk&#281;
          forensyczn&#261; zdaje sobie spraw&#281;, &#380;e nie s&#261; to
          terminy adekwatne do wsp&#243;&#322;czesnej problematyki tropienia
          zbrodni, niejako nie nad&#261;&#380;aj&#261; za rozwojem nauk
          forensycznych i &#378;le oddaj&#261; je znaczeniowo. Nale&#380;y
          specjalistom pozostawi&#263; ostatnie zdanie co do wyboru fachowej
          terminologii, a nie lingwistom - polonistom, kt&#243;rzy z
          pewno&#347;ci&#261; nie maj&#261; rozeznania w niuansach zagadnien
          fachowych.
        </p>
        <p>
          Wydaje si&#281;, &#380;e sytuacja mi&#281;dzynarodowa (integracja z
          Europ&#261;) oraz wzrost przest&#281;pczo&#347;ci (zagro&#380;enie
          terroryzmem) powinny obecnie sprzyja&#263; narodzinom nowych
          termin&#243;w zwi&#261;zanych z tymi zmianami, tak jak rozw&#243;j
          technik komputerowych lub telefonii kom&#243;rkowej spowodowa&#322;
          narodziny wielu nowych polskich s&#322;&#243;w. J&#281;zyk polski
          skutecznie jednak broni si&#281; przed zapo&#380;yczeniami z
          j&#281;zyka angielskiego. Zamiast "handy" albo "cell" mamy
          do&#347;&#263; z&#322;o&#380;ony termin "telefon kom&#243;rkowy".
          Natomiast jednak pewne s&#322;owa przyjmuj&#261; si&#281; bez trudu,
          np. przyj&#281;&#322;o si&#281; potocznie u&#380;ywane s&#322;owo
          "klika&#263;" na podstawow&#261; czynno&#347;&#263; obs&#322;ugi
          komputera. Profesjonalny j&#281;zyk specjalist&#243;w bogaty jest w
          bezpo&#347;rednie zapo&#380;yczenia z angielskiego; najlepszym
          przyk&#322;adem mo&#380;e by&#263; polski &#380;argon &#380;eglarzy,
          kt&#243;rzy nie tracili czasu na wymy&#347;lanie wielu polskich
          odpowiednik&#243;w angielskiego s&#322;ownictwa jachtowego. Tak&#380;e
          prawie ka&#380;da dziedzina nauk &#347;cis&#322;ych obecnie
          pos&#322;uguje si&#281; najnowszymi terminami wzi&#281;tymi wprost z
          j&#281;zyka angielskiego.
        </p>
        <p>
          S&#261;dz&#281; wi&#281;c, &#380;e proste terminy pochodz&#261;ce ze
          wsp&#243;&#322;czesnego profesjonalnego j&#281;zyka angielskiego
          &ldquo;<b>forensyka</b>&rdquo;, &ldquo;<b>forensyczny/a/e</b>&rdquo; i
          &ldquo;<b>forensyk</b>&rdquo; (u&#380;ywane na styku nauk prawnych,
          &#347;cis&#322;ych, a nawet sztuki) mog&#261; z powodzeniem
          zadomowi&#263; si&#281; w j&#281;zyku polskim i skutecznie
          wspomaga&#263; wysi&#322;ki w walce z przest&#281;pczo&#347;ci&#261;.
        </p>
        <br />
        <b>Literatura</b>
        <br />
        <div className="biblio">
          Suzanne Bell, Dictionary of Forensic Science, Facts on File Science
          Library, Checkmark Books, 2004.
        </div>
        <div className="biblio">
          Geoffrey Davies (ed.), Forensic Science, American Chemical Society,
          Washington DC, 1986.
        </div>
        <div className="biblio">
          Peter R. De Forest, R.E. Gaensslen, Henry C. Lee, Forensic Science, An
          Introduction to Criminalistics. McGraw-Hill Inc., 1983.
        </div>
        <div className="biblio">
          William G. Eckert (ed.), Introduction to Forensic Sciences, (2nd
          Edition), CRC Press 1992.
        </div>
        <div className="biblio">
          Ekspertyza S&#261;dowa: Wybrane Zagadnienia (praca zbiorowa).
          Wydawnictwa Prawnicze PWN, Warszawa 1981.
        </div>
        <div className="biblio">
          Tadeusz Hanausek, Kryminalistyka, Zarys Wyk&#322;adu (Wyd. III).
          Zakamycze 2000.
        </div>
        <div className="biblio">
          Stuart H. James, Jon J. Nordby, Forensic Science: An Introduction to
          Scientific and Investigative Techniques. CRC Press, 2002.
        </div>
        <div className="biblio">
          K&#281;dzierski, W. (red.), Technika kryminalistyczna. Wydawnictwo
          Wy&#380;szej Szko&#322;y Policji, Szczytno 1994.
        </div>
        <div className="biblio">
          Kulicki, M., Kryminalistyka. Wydawnictwo Uniwersytetu Miko&#322;aja
          Kopernika, Toru&#324; 1999.
        </div>
        <div className="biblio">
          Tadeusz Marcinkowski, Medycyna S&#261;dowa dla Prawnik&oacute;w.
          Wydawnictwa Prawnicze PWN, Warszawa 1993.
        </div>
        <div className="biblio">
          Carl Meyer (Ed.), Expert Witnessing, Explaining and Understanding
          Science. CRC Press, 1999.
        </div>
        <div className="biblio">
          Joe Nickell, John F. Fischer, Crime Science, Methods of Forensic
          Detection, The University Press of Kentucky, 1999.
        </div>
        <div className="biblio">
          Charles E. O’Hara, Gregory L. O’Hara, Fundamentals of Criminal
          Investigation (7th Edition). C.C.Thomas 2003.
        </div>
        <div className="biblio">
          Richard E. Saferstein, Criminalistics: An Introduction to Forensic
          Science (8th Edition). Prentice Hall, 2003.
        </div>
        <div className="biblio">
          Richard E. Saferstein, Forensic Science Handbook, Vol. 1 (2nd
          Edition). Prentice Hall, 2001.
        </div>
        <div className="biblio">
          Richard E. Saferstein, Forensic Science Handbook, Vol. 2 (2nd
          Edition). Prentice Hall, 2004.
        </div>
        <div className="biblio">
          Richard E. Saferstein, Forensic Science Handbook, Vol. 3. Prentice
          Hall, 1993.
        </div>
        <div className="biblio">
          Tomaszewski, T., Dow&oacute;d z opinii bieg&#322;ego w procesie
          karnym, wyd II, Wydawnictwo Instytutu Ekspertyz S&#261;dowych,
          Krak&oacute;w 2000.
        </div>
        <div className="biblio">
          Wid&#322;a, T., Ocena dowodu z opinii bieg&#322;ego. Wydawnictwo
          Uniwersytetu &#346;l&#261;skiego, Katowice 1992.
        </div>
        <div className="biblio">
          W&oacute;jcikiewicz, J., Dow&oacute;d naukowy w procesie s&#261;dowym,
          Wydawnictwo Instytutu Ekspertyz S&#261;dowych, Krak&oacute;w 2000.
        </div>
        <div className="biblio">
          Ekspertyza S&#261;dowa. J&oacute;zef W&oacute;jcikiewicz, (red.)
          Kantor Wydawniczy Zakamycze 2002.
        </div>
        <div className="biblio">
          Zieli&#324;ski M., Poznanie s&#261;dowe a poznanie naukowe,
          Wydawnictwo Uniwersytetu Adama Mickiewicza, Pozna&#324; 1979.
        </div>
        <div className="biblio">
          http://www.geradts.com/anil/ij/vol_001_no_001/others/interview/ciupik.html
        </div>
        <br />
        <b>Streszczenie</b>
        <br />
        <br />
        Na podstawie wieloletniego zawodowego zaanga&#380;owania w metody
        naukowe bed&#261;ce na us&#322;ugach ameryka&#324;skiego
        s&#261;downictwa autor artyku&#322;u proponuje, aby do
        wsp&#243;&#322;czesnego j&#281;zyka polskiego wprowadzi&#263; terminy
        forensyka i forensyk (rzeczowniki) oraz forensyczny (przymiotnik), jako
        pe&#322;noprawne i uzasadnione zapo&#380;yczenia z angielskiego, o
        szerszym, precyzyjniejszym znaczeniu od obecnie zast&#281;pczo
        u&#380;ywanych nieadekwatnych termin&#243;w: medycyna s&#261;dowa, nauki
        s&#261;dowe, lub nauki s&#261;downicze, oraz ekspertyza s&#261;dowa i
        bieg&#322;y s&#261;dowy.
        <br />
        <br />
        <br />
        <b>Summary</b>
        <br />
        <br />
        Based on his professional experience in Forensic Sciences, the author
        reviews the scope of scientific disciplines pertaining to Forensics,
        suggesting the use of the new terms in his native Polish language:
        forensyka (Forensics), nauki forensyczne (Forensic Science), forensyczny
        (forensic), and forensyk (Forensic Scientist). These new terms are more
        adequate to the contemporary Forensics then traditional current terms in
        Polish which refer only to Court or Medicine (medycyna sadowa, nauki
        sadowe, nauki sadownicze, ekspertyza sadowa, biegly sadowy).
        <br />
        <br />
        <br />
        <br />
        <b>Biographical Note</b>
        <br />
        <br />
        Dr hab. Leszek Kordylewski is a Forensic Scientist at the State Crime
        Laboratory in Chicago, USA. He is a member of the American Academy of
        Forensic Scientists. For many years he had been a faculty member of the
        Department of Biology at the Jagiellonian University in Cracow and the
        Department of Medicine of University of Chicago.
        <br />
        <br />
        <br />
        <br />
        <div className="copyright">
          Previously Unpublished - Copyright &copy; October, 2007 Les
          Kordylewski. <br className="br" />
          All Rights Reserved.
        </div>
      </div>
      <Link className="button" to="/forensics">
        &laquo; Back
      </Link>
      <Kordynet />
    </div>
  </Layout>
);

export default IndexPage;
