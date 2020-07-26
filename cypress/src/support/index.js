// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@4tw/cypress-drag-drop'
import '@cypress/code-coverage/support'
import 'cypress-plugin-snapshots/commands'
import './drag-n-drop'
import './input'
import './visit'

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

const compareSnapshotCommand = require('cypress-visual-regression/dist/command')

addMatchImageSnapshotCommand({
  failureThreshold: 0.00, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot  
});

compareSnapshotCommand({
  errorThreshold: 0
})

chai.config.truncateThreshold = 0
// Alternatively you can use CommonJS syntax:
// require('./commands')
