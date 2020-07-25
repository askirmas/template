"use strict";
Cypress.Commands.overwrite('visit', function (fn, page) {
    fn(Cypress.config('baseUrl')
        ? page
        // Next.js output
        : "./out/" + page + ".html");
    return cy.wait(500);
});
