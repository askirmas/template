"use strict";
/// <reference types="cypress" />
// https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands
Cypress.Commands.add('scrollIntoCenter', { "prevSubject": "element" }, function ($el) {
    return cy
        .then(function () {
        var el = $el[0];
        el.scrollIntoView({ "block": "center", "inline": "center" });
        // const {scrollLeft, scrollTop} = el
        // el.scrollTo(
        //   Math.round(scrollLeft),
        //   Math.round(scrollTop)
        // )
    })
        .wrap($el);
});
