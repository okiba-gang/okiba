const {readdirSync, writeFileSync, readFileSync} = require('fs')
const jsdoc = require('jsdoc-api')
const nunjucks = require('nunjucks')
nunjucks.configure({autoescape: false})

const template = readFileSync('./docs/partials/README.hbs', 'utf8')
const templateRoot = readFileSync('./docs/partials/README.root.hbs', 'utf8')
const packages = readdirSync('./packages')
const baseUrl = 'https://github.com/okiba-gang/okiba/tree/master/packages/'
const rootData = {
  name: 'Okiba',
  description: '',
  packages: []
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

function addDataRootReadme(data) {
  if (!data.name) return

  const pkg = {}
  pkg.name = data.name
  pkg.description = data.description
  pkg.url = `${baseUrl}${data.name}`
  pkg.members = []

  if (data.members) {
    data.members.forEach(m => {
      const mb = {}
      mb.name = m.name
      mb.description = m.description
      mb.url = `${baseUrl}${data.name}#${m.name}`
      pkg.members.push(mb)
    })
  }
  rootData.packages.push(pkg)
}

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

async function generate() {
  await asyncForEach(packages, async name => {
    const data = model(await jsdoc.explain({
      files: `./packages/${name}/index.js`
    }), name)

    // writeFileSync(`./debug/data-${name}-dump.js`, JSON.stringify(data))
    addDataRootReadme(data)
    const markdown = nunjucks.renderString(template, data)
    writeFileSync(`./packages/${name}/README.md`, markdown)
  })

  // await writeFileSync('./debug/index-dump.js', JSON.stringify(rootData))
  const markdown = nunjucks.renderString(templateRoot, rootData)
  writeFileSync('./README.md', markdown)
}

generate()
