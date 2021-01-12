/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const config = (_context) => ({
  plugins: [cssnano(), postcssPresetEnv()],
});

module.exports = config;
