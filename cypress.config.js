const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6svqix',
  e2e: {
    supportFile: 'cypress/support/e2e.js', 
  },
  // video: true,
  // reporter: 'mochawesome',
  // reporterOptions: {
  //    reportDir: 'cypress/results',
  //    overwrite: false,
  //    html: true,
  //    json: false,
  //    timestamp: "mmddyyyy_HHMMss" }
})
