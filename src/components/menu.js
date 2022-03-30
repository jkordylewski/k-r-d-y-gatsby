import { Link } from 'gatsby';
import React from 'react';

const Menu = () => (
  <div id="nav">
    <ul>
      <li className="home">
        <Link to="/">Home</Link>
      </li>
      <li className="bio">
        <Link to="/bio">Bio</Link>
      </li>
      <li className="gap">
        <Link to="/gap-junction">Gap Junction</Link>
      </li>
      <li className="forensics">
        <Link to="/forensics">Forensyka</Link>
      </li>
      <li className="book">
        <Link to="/book">Problemy Bioetyki</Link>
      </li>
      <li className="esperanto">
        <Link to="/esperanto">Esperanto</Link>
      </li>
      <li className="sputnik">
        <Link to="/sputnik">Sputnik</Link>
      </li>
      <li className="kazi">
        <Link to="/kazimierz-kordylewski">Kazimierz Kordylewski</Link>
      </li>
      <li className="bana">
        <Link to="/banachiewicz">Banachiewicz</Link>
      </li>
      <li className="pubs">
        <Link to="/publications">
          Selected
          <br /> Publications
        </Link>
      </li>
      <li className="links">
        <Link to="/links">Links</Link>
      </li>
    </ul>
    <br />
    <script
      type="text/javascript"
      src="//rf.revolvermaps.com/0/0/1.js?i=939kpp0usf0&amp;s=220&amp;m=0&amp;v=true&amp;r=false&amp;b=000000&amp;n=false&amp;c=ff0000"
      async="async"
    ></script>
  </div>
);

export default Menu;
