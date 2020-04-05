function model(data, baseData) {
  return data.filter(e => !e.undocumented && e.kind !== 'package')
    .reduce((acc, entry) => {
      const {url} = baseData

      if (entry.kind === 'module') {
        return Object.assign({}, acc, {...entry, baseUrl: url})
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


function modelPackage(packageData, baseData) {
  if (!packageData.name) {
    throw new Error(`Missing name, data: ${JSON.stringify(packageData)}`)
  }

  const {name, description, pkgName, members = []} = packageData
  const pkg = {name: pkgName, description, url: `${baseData.url}${pkgName}`, members: []}

  members.forEach(m => {
    let params = []
    if (m.params) {
      params = m.params.reduce((acc, p) => {
        acc.push(p.name)
        if (p.subparams) {
          p.subparams.reduce((ac, sp) => {
            ac.push(sp.name)
            return ac
          }, acc)
        }
        return acc
      }, [])
    }

    pkg.members.push({
      name: m.name === name
        ? 'constructor'
        : m.name,
      description: m.description,
      url: `${pkg.url}#${m.name.toLowerCase()}${params.join('-')}`
    })
  })

  return pkg
}


module.exports = {
  model, modelPackage
}
