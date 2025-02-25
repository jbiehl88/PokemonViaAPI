const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000", // Adjust if needed
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
