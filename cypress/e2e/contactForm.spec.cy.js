describe('Contact form', () => {
  it('should submit the form with valid input', () => {
    cy.visit('https://www.rademar.ee/')

    // Fill out form
    cy.get('input[name="your-name"]').type('John Doe')
    cy.get('input[name="your-email"]').type('john.doe@example.com')
    cy.get('input[name="your-subject"]').type('Test message')
    cy.get('textarea[name="your-message"]').type('This is a test message for Cypress')
    cy.get('input[type="submit"]').click()

    // Verify success message
    cy.get('.wpcf7-response-output').should('contain.text', 'Thank you for your message')
    
    // Verify form fields are reset
    cy.get('input[name="your-name"]').should('have.value', '')
    cy.get('input[name="your-email"]').should('have.value', '')
    cy.get('input[name="your-subject"]').should('have.value', '')
    cy.get('textarea[name="your-message"]').should('have.value', '')

    // Verify form cannot be resubmitted
    cy.get('input[type="submit"]').should('be.disabled')
  })

  it('should display error messages for invalid input', () => {
    cy.visit('https://www.rademar.ee/')

    // Submit form with invalid input
    cy.get('input[name="your-name"]').type('a'.repeat(101))
    cy.get('input[name="your-email"]').type('invalid-email')
    cy.get('input[name="your-subject"]').type('')
    cy.get('textarea[name="your-message"]').type('')
    cy.get('input[type="submit"]').click()

    // Verify error messages are displayed
    cy.get('.wpcf7-form-control-wrap.your-name').should('contain.text', 'The field is too long')
    cy.get('.wpcf7-form-control-wrap.your-email').should('contain.text', 'The e-mail address entered is invalid')
    cy.get('.wpcf7-form-control-wrap.your-subject').should('contain.text', 'The field is required')
    cy.get('.wpcf7-form-control-wrap.your-message').should('contain.text', 'The field is required')
  })
})