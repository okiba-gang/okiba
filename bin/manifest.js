#!/usr/bin/env node

const fs = require('fs')
const packages = fs.readdirSync('./packages')
  .filter(entry => fs.lstatSync(`./packages/${entry}`).isDirectory() && entry !== 'node_modules')
  .map(entry => `@okiba/${entry}`)

fs.writeFileSync('./bundle/manifest.json', JSON.stringify({ packages }, null, 2))
