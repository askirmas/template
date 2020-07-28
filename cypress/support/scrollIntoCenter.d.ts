declare namespace Cypress {
    interface Chainable {
        scrollIntoCenter: () => Cypress.Chainable<Element>;
    }
}
