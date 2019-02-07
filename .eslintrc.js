/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: './node_modules/eslint-config-hackreactor/index.js',
  rules: {
    camelcase: 'never' // gives me warnin on my seeds
  } // i need to overide some rules
};