///<reference types = "cypress"/>

describe('verify the login function', function () {
    it.only('verify the valid credential', function () {
        // cy.visit('/auth/login')
        let abc = Cypress.config().baseUrl
        let xyz = Cypress.config().defaultCommandTimeout
        cy.log(abc)
        cy.log(xyz)
    })
    it('forgot password', function () {
        cy.visit('/auth/requestPasswordResetCode')
    })
})


