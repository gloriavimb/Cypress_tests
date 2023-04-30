const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  experimentalStudio: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // add additional e2e options here
  },
});