const {readdirSync, writeFileSync, readFileSync} = require('fs')
const jsdoc = require('jsdoc-api')
const nunjucks = require('nunjucks')
nunjucks.configure({autoescape: false})

const template = readFileSync('./docs/partials/README.hbs', 'utf8')
const packages = readdirSync('./packages')

function model(data) {
  return data.filter(e => !e.undocumented && e.kind !== 'package')
    .reduce((acc, entry) => {
      if (entry.kind === 'module') {
        return Object.assign({}, acc, {...entry})
      }

      if (!acc.members) {
        acc.members = []
      }

      acc.members.push(entry)
      return acc
    }, {})
}

packages.forEach(async name => {
  const data = model(await jsdoc.explain({
    files: `./packages/${name}/index.js`
  }))

  writeFileSync(`./debug/data-${name}-dump.js`, JSON.stringify(data))

  const markdown = nunjucks.renderString(template, data)
  writeFileSync(`./packages/${name}/README.md`, markdown)
})

