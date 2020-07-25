"use strict";
Cypress.Commands.overwrite('type', function (fn, el, value) {
    switch (el.prop('tagName').toLowerCase()) {
        case 'select':
            return cy
                .wrap(el)
                .select(value);
        case 'div':
            if (!el.prop('contentediable'))
                return cy
                    .wrap(el)
                    .click()
                    .within(function () { return cy
                    .get("input[value=\"" + value + "\"]")
                    .check(); });
        default:
            return fn(el, value);
    }
});
