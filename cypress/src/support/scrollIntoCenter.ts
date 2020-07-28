/// <reference types="cypress" />
// https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands

declare namespace Cypress {
  interface Chainable {
    scrollIntoCenter: () => Cypress.Chainable<Element>
  }
}

Cypress.Commands.add('scrollIntoCenter', {"prevSubject": "element"}, ($el: JQuery<HTMLElement>) =>
  cy
  .then(() => {
    const el = $el[0]
    el.scrollIntoView({"block": "center", "inline": "center"})
    // const {scrollLeft, scrollTop} = el
    // el.scrollTo(
    //   Math.round(scrollLeft),
    //   Math.round(scrollTop)
    // )
  })
  .wrap($el)
)
