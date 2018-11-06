const {readdirSync, writeFileSync} = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')

// const packages = ['arrays']
const packages = readdirSync('./packages')
packages.forEach(name => {
  jsdoc2md.render({ files: `./packages/${name}/index.js` })
    .then(markdown => writeFileSync(`./packages/${name}/README.md`, markdown))
})


