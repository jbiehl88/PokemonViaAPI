describe('Pokemon API App', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('loads the homepage and displays Pokémon list', () => {
      cy.get('[data-testid="pokemon-list"]').children().should('have.length.greaterThan', 0);
    });
  
    it('searches for a specific Pokémon by name', () => {
      cy.get('[data-testid="search-input"]').type('pikachu');
      cy.get('[data-testid="pokemon-list"]').should('contain', 'pikachu');
    });
  
    it('filters Pokémon by type', () => {
      cy.get('[data-testid="filter-dropdown"]').click();
      cy.get('ul[role="listbox"]').should('be.visible');
      cy.get('ul[role="listbox"]').contains(/^electric$/).click();
  
      cy.get('[data-testid="pokemon-list"]').children().each(($el) => {
        cy.wrap($el).should('contain', 'electric');
      });
    });
  
    it('manages the deck by adding and removing Pokémon', () => {
      cy.get('[data-testid="pokemon-list"]').children().first().within(() => {
        cy.get('[data-testid="add-to-deck-button"]').click();
      });
  
      cy.get('[data-testid="deck"]').should('contain', 'bulbasaur');
  
      cy.get('[data-testid="remove-from-deck-button"]').click();
      cy.get('[data-testid="deck"]').should('not.contain', 'bulbasaur');
    });
  
    it('ensures responsive design works on different screen sizes', () => {
      cy.viewport('iphone-6');
      cy.get('[data-testid="pokemon-list"]').should('be.visible');
      cy.viewport('macbook-15');
      cy.get('[data-testid="pokemon-list"]').should('be.visible');
    });
  });