describe('Filtering', () => {
  before(() => {
    cy.visit('http://localhost:3000/');

    cy.intercept('GET', 'https://community-api.coinmetrics.io/v4/catalog/assets').as('getAssets');
    cy.wait('@getAssets');
  })

  afterEach(() => {
    cy.get('[data-test=assets-input]').clear();
  })

  it('Full name of the asset may be a partial match from the beginning of the name', () => {

    cy.get('[data-test=assets-input]').type('tcoin');
    cy.get('.assets.list').should('not.contain', 'Bitcoin');

    cy.get('[data-test=assets-input]').clear();
    cy.get('[data-test=assets-input]').type('bitc');
    cy.get('.assets.list').should('contain', 'Bitcoin');
  });

   it('IDs must be matched in entirety to count as a match', () => {
    
    cy.get('[data-test=assets-input]').type('ato');
    cy.get('.assets.list').should('not.contain', 'atom');

    cy.get('[data-test=assets-input]').clear();
    cy.get('[data-test=assets-input]').type('atom');
    cy.get('.assets.list').should('contain', 'atom');
  })

   it('Match must be made case-insensitively', () => {
    
    cy.get('[data-test=assets-input]').type('BTC');
    // not sure how to use async await with cypress, it just trow an error
    cy.get('.assets .item').its('length').then(len1 => {

      cy.get('[data-test=assets-input]').clear();
      cy.get('[data-test=assets-input]').type('btc');

      cy.get('.assets .item').its('length').should('equal', len1);
    });
  })
})

