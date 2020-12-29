//add configurable data and plugins here, see: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  pathPrefix: "/YouLiking_UI",
  siteMetadata: {
    title: `YouLiking`,
    author: `crocsdundee`,
    description: `A starter template based on the default starter, but with styled-components and typescript instead.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
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
