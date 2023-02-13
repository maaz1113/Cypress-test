const { defineConfig } = require("cypress");
// require('cypress-xpath')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/Testing/TestScript.spec.js'
  },


});
