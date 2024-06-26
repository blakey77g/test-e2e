const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  defaultCommandTimeout: 20000,
  
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.wtatennis.com",
    
   
  },
});
