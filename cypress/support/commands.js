// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to visit the app and check if it loads properly
Cypress.Commands.add('visitApp', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Pokédex'); // Adjust if needed
  });
  
  // Custom command to search for a Pokémon by name
  Cypress.Commands.add('searchPokemon', (name) => {
    cy.get('[data-testid=search-input]').type(name);
    cy.get('[data-testid=pokemon-card]').should('contain', name);
  });
  
  // Custom command to check Pokémon details
  Cypress.Commands.add('checkPokemonDetails', (name) => {
    cy.get('[data-testid=pokemon-card]').contains(name).click();
    cy.get('[data-testid=pokemon-details]').should('contain', name);
  });
  
  // Custom command to reset search input
  Cypress.Commands.add('resetSearch', () => {
    cy.get('[data-testid=search-input]').clear();
  });