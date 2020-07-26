/// <reference types="cypress" />
declare namespace Cypress {
  type matchImageSnapshotOptions = Partial<
    {
      /** @default "<rootDir>/cypress/snapshots" */
      "customSnapshotsDir": string
      /** @default "__diff_output__" */
      "customDiffDir": string
    }
    & ScreenshotDefaultsOptions
    & import('jest-image-snapshot').MatchImageSnapshotOptions
  >

  interface Chainable {
    matchImageSnapshot(options?: matchImageSnapshotOptions): Cypress.Chainable<unknown>
    matchImageSnapshot(name: string, options?: matchImageSnapshotOptions): Cypress.Chainable<unknown>
  }
}
