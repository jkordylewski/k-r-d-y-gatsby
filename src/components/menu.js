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
        <a href="publications.html">
          Selected
          <br /> Publications
        </a>
      </li>
      <li class="book">
        <a href="book.html">Book</a>
      </li>
      <li class="forensics">
        <a href="forensics.html">Forensics</a>
      </li>
      <li class="esperanto">
        <a href="esperanto.html">Esperanto</a>
      </li>
      <li class="sputnik">
        <a href="sputnik.html">Sputnik</a>
      </li>
      <li class="bana">
        <a href="banachiewicz.html">Banachiewicz</a>
      </li>
      <li class="links">
        <a href="links.html">Links</a>
      </li>
    </ul>
  </div>
);

export default Menu;
