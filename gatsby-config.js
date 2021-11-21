const postcssCalc = require('postcss-calc');
const postcssColorHexAlpha = require('postcss-color-hex-alpha');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssImageSetFunction = require('postcss-image-set-function');
const postcssInitial = require('postcss-initial');
const postcssMediaMinmax = require('postcss-media-minmax');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          // https://cssdb.org/#custom-properties
          postcssCustomProperties(),
          // https://cssdb.org/#hexadecimal-alpha-notation
          postcssColorHexAlpha(),
          // https://cssdb.org/#all-property
          postcssInitial(),
          // https://cssdb.org/#image-set-function
          postcssImageSetFunction(),
          // https://cssdb.org/#media-query-ranges
          postcssMediaMinmax(),

          /*
           * modifiers
           */
          postcssCalc(),
          postcssFlexbugsFixes(),
          postcssUrl(),
          autoprefixer({ grid: 'autoplace' }),
        ],
      },
    },
  ],
};
