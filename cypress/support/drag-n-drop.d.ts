/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        drag: (targetSelector: string, options?: Partial<{
            /** @default "top" */
            position: PositionType;
        } & Forceable>) => Cypress.Chainable<boolean>;
    }
}
