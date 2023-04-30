describe('Homepage', () => {
  it('should display expected content on load', () => {
    cy.visit('https://www.rademar.ee/')

    // Verify page title
    cy.title().should('eq', 'Rademar – Radiators and Exhaust systems for heavy machinery')

    // Verify header text
    cy.get('h1').should('contain.text', 'Rademar')
    cy.get('h2').should('contain.text', 'Radiators and Exhaust systems for heavy machinery')

    // Verify presence of main navigation links
    cy.get('.navbar-nav').should('contain.text', 'Home')
    cy.get('.navbar-nav').should('contain.text', 'Products')
    cy.get('.navbar-nav').should('contain.text', 'References')
    cy.get('.navbar-nav').should('contain.text', 'About us')
    cy.get('.navbar-nav').should('contain.text', 'Contacts')
    
    // Verify presence of product categories
    cy.get('.card-title').should('contain.text', 'Radiators')
    cy.get('.card-title').should('contain.text', 'Exhaust systems')
  })
})