const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Kordynet`,
    description: `kordynet.com is the personal website of Les Kordylewski. News, articles and personal writings of Les Kordylewski can be found here. Witryna Leszka Kordylewskiego.`,
    author: `kordynet`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        RewriteBase: '/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.kordynet.com',
        redirect: ['RewriteRule ^(.*).html$ /$1 [R=301,L,NE]'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
