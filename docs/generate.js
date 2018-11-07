const {readdirSync, writeFileSync, readFileSync} = require('fs')
const jsdoc = require('jsdoc-api')
const nunjucks = require('nunjucks')
nunjucks.configure({autoescape: false})

const template = readFileSync('./docs/partials/README.hbs', 'utf8')
const packages = readdirSync('./packages')
const baseUrl = 'https://github.com/okiba-gang/okiba/tree/master/packages/'

function model(data, pkgName) {
  return data.filter(e => !e.undocumented && e.kind !== 'package')
    .reduce((acc, entry) => {
      if (entry.kind === 'module') {
        return Object.assign({}, acc, {...entry, baseUrl, pkgName})
      }

      if (entry.see) {
        entry.see = entry.see.map(JSON.parse)
      }

      if (entry.params) {
        let lastParam
        entry.params = entry.params.reduce((params, param) => {
          if (param.name.indexOf('{') <= -1) {
            lastParam = param
            params.push(lastParam)
          } else {
            param.name = param.name.substring(1, param.name.length - 1)
            if (!lastParam.subparams) {
              lastParam.subparams = []
            }
            lastParam.subparams.push(param)
          }

          return params
        }, [])
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
  }), name)

  // writeFileSync(`./debug/data-${name}-dump.js`, JSON.stringify(data))

  const markdown = nunjucks.renderString(template, data)
  writeFileSync(`./packages/${name}/README.md`, markdown)
})

