module.exports = {
  root: true,
  extends: [
    'eslint-config-digitalbazaar',
    'eslint-config-digitalbazaar/jsdoc'
  ],
  env: {
    node: true,
    browser: true
  },
  ignorePatterns: ['node_modules/']
};
