const postcssCalc = require('postcss-calc');
const postcssColorHexAlpha = require('postcss-color-hex-alpha');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssImageSetFunction = require('postcss-image-set-function');
const postcssInitial = require('postcss-initial');
const postcssMediaMinmax = require('postcss-media-minmax');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');

const siteMetadata = {
  title: 'Gatsby Starter by @kaave',
  description: 'Gatsby Starter by @kaave.',
  author: '@kaave',
  siteUrl: 'https://kaave.estate/',
};

const plugins = [
  'gatsby-plugin-tsconfig-paths',
  'gatsby-plugin-typegen',
  'gatsby-plugin-no-sourcemaps',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
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
];

module.exports = { siteMetadata, plugins };
