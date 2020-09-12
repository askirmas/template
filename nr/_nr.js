#!/usr/bin/env node

if (module.parent === null) {

  const {nr, scripts} = require(`${process.cwd()}/package.json`)
  , {argv} = process 
  , opted = argv[2]?.startsWith("-") ?? false
  , cmd = command(nr, scripts, argv.slice(2 + opted))

  switch(opted && argv[2]) {
    case false:
      console.log(cmd)
      break
    case "-z":
      process.stdout.write(cmd)
      break  
    case "-e":
    case "--exec":
      require("child_process").execSync(cmd, {
        "stdio": "inherit"
      })
      break
    default:
      console.error(`Unknown option '${argv[2]}'`)
      process.exit(1)
  }
} else 
  module.exports = command

function command(nr, scripts, argv) {
  const req = argv[0]
  
  if (!nr)
    return
  
  const possibilities = {}
  let length = 0

  for (const key in nr)
    if (req.startsWith(key) && nr[key]) {
      length++
      possibilities[key] = nr[key]
    }
      
  while (length > 0) {
    for (const key in possibilities) {
      const value = possibilities[key]
      if (key === req && typeof value === "string") 
        return `${
          /^[^\s]+/.exec(value) in scripts
          ? 'npm run '
          : ''
        }${
          value
        } ${argv.slice(1).join(" ")}`
        
      delete possibilities[key]
      length--
      if (value === null || typeof value !== "object")
        continue
      for (const sub in value) {
        length++
        possibilities[`${key}${sub}`] = value[sub]
      }
    }
  }

  switch (length) {
    case 1:
      return Object.values(possibilities)[0]
    case 0:
      console.error('No rn route')
      process.exit(1)
    default:
      console.error(possibilities)
      process.exit(2)
  
  }
}