/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: '/hacktoberfest-participants',
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/contributors/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            subsets: [`latin`],
            variants: [`400`, `700`],
          },
          {
            family: `Frank Ruhl Libre`,
            subsets: [`latin`],
            variants: [`400`, `700`],
          },
          {
            family: `Yatra One`,
            subsets: [`latin`],
            variants: [`400`, `700`],
          },
          {
            family: `Rakkas`,
            subsets: [`latin`],
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
