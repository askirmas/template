/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        drag: (targetSelector: string, options?: Partial<{
            /** @default "top" */
            position: PositionType;
        } & Forceable>) => Cypress.Chainable<Element>;
    }
}
declare namespace Cypress {
    interface Chainable {
        scrollIntoCenter: () => Cypress.Chainable<Element>;
    }
}
declare module "support/index" {
    export {};
}
