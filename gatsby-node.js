require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

require('./src/__generated__/gatsby-types');

exports.createPages = require('./src/scripts/gatsby-node/index').createPages;
