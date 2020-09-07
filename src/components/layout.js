/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Menu from './menu';
import './layout.css';
import './main.css';

const Layout = ({ children, name }) => {
  return (
    <div id={name}>
      <Menu />
      <div>
        <main>{children}</main>
        <footer>
          <div id="footer">
            kordynet.com &copy; 2007-
            {new Date().getFullYear()}{' '}
          </div>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  class: PropTypes.node,
};

export default Layout;
