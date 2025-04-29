const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const webpackConfig = require('./webpack.config');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpack({ webpackOptions: webpackConfig }));
      return config;
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br'
  }
});