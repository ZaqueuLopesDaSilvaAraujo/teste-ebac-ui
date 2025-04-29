const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'cypress/utils/'),
      '@e2e': path.resolve(__dirname, 'cypress/e2e/'),
      '@support': path.resolve(__dirname, 'cypress/support/'),
      '@fixtures': path.resolve(__dirname, 'cypress/fixtures/')
    },
    extensions: ['.js']
  }
};
