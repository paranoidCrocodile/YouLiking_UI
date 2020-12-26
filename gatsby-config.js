//add configurable data and plugins here, see: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: `YouLiking`,
    author: `crocsdundee`,
    description: `A starter template based on the default starter, but with styled-components and typescript instead.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
