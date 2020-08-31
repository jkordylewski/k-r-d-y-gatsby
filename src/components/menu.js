import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = () => (
  <div id="nav">
    <ul>
      <li class="home">
        <Link to="/">Home</Link>
      </li>
      <li class="bio">
        <Link to="/bio">Bio</Link>
      </li>
      <li class="pubs">
        <Link to="/publications">
          Selected
          <br /> Publications
        </Link>
      </li>
      <li class="book">
        <Link to="/book">Book</Link>
      </li>
      <li class="forensics">
        <Link to="/forensics">Forensics</Link>
      </li>
      <li class="esperanto">
        <Link to="/esperanto">Esperanto</Link>
      </li>
      <li class="sputnik">
        <Link to="/sputnik">Sputnik</Link>
      </li>
      <li class="bana">
        <Link to="/banachiewicz">Banachiewicz</Link>
      </li>
      <li class="links">
        <Link to="/links">Links</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
