const {readdirSync, writeFileSync, readFileSync} = require('fs')
const jsdoc = require('jsdoc-api')
const nunjucks = require('nunjucks')
nunjucks.configure({autoescape: false})

const {model, modelPackage} = require('./model-data')

const template = readFileSync('./docs/partials/readme-package.njk', 'utf8')
const templateRoot = readFileSync('./docs/partials/readme-root.njk', 'utf8')

const packages = readdirSync('./packages')

const baseData = {
  name: 'Okiba',
  description: '',
  packages: [],
  url: 'https://github.com/okiba-gang/okiba/tree/master/packages/'
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function generate() {
  await asyncForEach(packages, async name => {
    if (name === 'node_modules' || name === 'package.json') return
    const packageData = model(await jsdoc.explain({
      files: `./packages/${name}/index.js`
    }), baseData)
    packageData.pkgName = name
    const packageJSON = JSON.parse(readFileSync(`./packages/${name}/package.json`))
    packageData.version = packageJSON.version
    const markdown = nunjucks.renderString(template, packageData)
    writeFileSync(`./packages/${name}/README.md`, markdown)

    try {
      baseData.packages.push(modelPackage(packageData, baseData))
    } catch (e) {
      throw new Error(`Missing required fields in package: ${name}\n`)
    }
    // writeFileSync(`./debug/data-${name}-dump.js`, JSON.stringify(data))
  })

  // await writeFileSync('./debug/data-root-dump.js', JSON.stringify(rootData))
  const markdown = nunjucks.renderString(templateRoot, baseData)
  writeFileSync('./README.md', markdown)
}

generate()
