import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    "baseUrl":"http://localhost:3000",
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "video": false,
    setupNodeEvents(on, config) {
    },
    "fixturesFolder": "cypress/fixtures"
  },
});