import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false, // Needed for stripe checkout.
    watchForFileChanges: false, // Avoid running tests when files change automatically.
    retries: {
      runMode: 2,
      openMode: 0,
    },
    defaultCommandTimeout: 12000,
    requestTimeout: 200000,
    responseTimeout: 200000,
    experimentalModifyObstructiveThirdPartyCode: true, // cy.session() requires enabling the experimentalSessionAndOrigin flag. Not required
    numTestsKeptInMemory: 0, // Running out of memory, needed to set this to 0.
    experimentalMemoryManagement: true,//memory management within Chromium-based browsers
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
