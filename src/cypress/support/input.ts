Cypress.Commands.overwrite('type', (fn, el: JQuery<HTMLElement>, value: string) => {
  switch (el.prop('tagName').toLowerCase()) {
    case 'select': 
      return cy
      .wrap(el)
      .select(value)
    case 'div':
      if (!el.prop('contentediable')) 
        return cy
        .wrap(el)
        .click()
        .within(() => cy
          .get(`input[value="${value}"]`)
          .check()
        )
    default:
      return fn(el, value)
  }
})
