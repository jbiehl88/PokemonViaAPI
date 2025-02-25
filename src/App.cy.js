import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
  it('searches for a Pokémon', () => {
    cy.searchPokemon('Pikachu');
  });

  it('checks Pokémon details', () => {
    cy.searchPokemon('Bulbasaur');
    cy.checkPokemonDetails('Bulbasaur');
  });

  it('resets the search input', () => {
    cy.searchPokemon('Charmander');
    cy.resetSearch();
    cy.get('[data-testid=search-input]').should('have.value', '');
  });
})