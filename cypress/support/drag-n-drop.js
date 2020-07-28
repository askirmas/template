"use strict";
/// <reference types="cypress" />
// https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands
/** https://github.com/4teamwork/cypress-drag-drop/issues/38 */
Cypress.Commands.overwrite('drag', function (fn, el, opts) {
    return fn(el, opts)
        .wrap(el)
        .trigger('dragend', { force: true })
        .wrap(el);
});
