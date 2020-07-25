Cypress.Commands.overwrite('visit', (fn, page) => {
  fn(
    Cypress.config('baseUrl')
    ? page
    // Next.js output
    : `./out/${page}.html`
  )
  return cy.wait(500)
})
  