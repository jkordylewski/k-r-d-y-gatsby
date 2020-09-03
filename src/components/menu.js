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
      <li className="pubs">
        <Link to="/publications">
          Selected
          <br /> Publications
        </Link>
      </li>
      <li className="book">
        <Link to="/book">Book</Link>
      </li>
      <li className="forensics">
        <Link to="/forensics">Forensics</Link>
      </li>
      <li className="esperanto">
        <Link to="/esperanto">Esperanto</Link>
      </li>
      <li className="sputnik">
        <Link to="/sputnik">Sputnik</Link>
      </li>
      <li className="bana">
        <Link to="/banachiewicz">Banachiewicz</Link>
      </li>
      <li className="links">
        <Link to="/links">Links</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
