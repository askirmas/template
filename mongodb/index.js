#!/usr/bin/env node

if (!module.parent)
  main()

async function main() {
  const os = require('os')
  , childProcess = require('child_process')
  , act = process.argv[2]
  
  let cmd = ""
  /** @type {string[]} */
  let args = []
  
  switch (os.platform()) {
    case "darwin":
      cmd = "brew"
      args = ["services", act, "mongodb-community"]
      break
  }
  
  childProcess.spawn(
    cmd,
    args,
    {
      // "detached": true,
      "stdio": "inherit"
    }
  )
  // .unref()
}
