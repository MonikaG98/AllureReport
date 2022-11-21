///<reference types = "cypress"/>
import { Utility } from '../../support/utility'

let obj = new Utility().getBaseUrl()
describe('verify the login function', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('verify with valid credentials', function () {
        // let d = obj.getBaseUrl()
        cy.visit(obj)
        //  cy.log(d)
    })
})
