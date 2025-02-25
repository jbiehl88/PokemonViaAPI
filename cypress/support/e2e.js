// cypress/support/e2e.js or e2e.ts
// Import commands.js
import "./commands";

// Cypress configuration setup (optional)
before(() => {
  cy.log("Cypress tests starting...");
});

after(() => {
  cy.log("Cypress tests completed.");
});