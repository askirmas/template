/// <reference types="cypress" />
// https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands

declare namespace Cypress {
  interface Chainable {
    drag: (
      targetSelector: string,
      options?: Partial<{
        /** @default "top" */
        position: PositionType
      } & Forceable>
    ) => Cypress.Chainable<Element>
  }
}

/** https://github.com/4teamwork/cypress-drag-drop/issues/38 */
Cypress.Commands.overwrite('drag', (fn, el: JQuery<HTMLElement>, opts: unknown) =>
  fn(el, opts)
  .wrap(el)
  .trigger('dragend', {force: true})
  .wrap(el)
)
