import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the login page", () => {
    cy.visit("https://www.saucedemo.com")
})

When("I type a registered my email and password", () => {
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce')

    cy.get('#login-button').click()
})

Then("I have a sucessful login ", () => {
    cy.get('.product_label').should('be.visible')
})