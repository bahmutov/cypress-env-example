/// <reference types="cypress" />

it('has valid env values', () => {
  expect(Cypress.env())
    .to.be.an('object')
    .and.to.have.keys('person', 'location')
  cy.wrap(Cypress.env('person'))
    .should('have.keys', 'name', 'age')
    .its('age')
    .should('be.within', 10, 99)
  cy.log('**name:** ' + Cypress.env('person').name)
  cy.log('**city:** ' + Cypress.env('location').city)
})
