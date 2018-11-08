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
    throw new Error('package is missing a name in docs', packageData)
  }

  const {name, description, url, members = []} = packageData
  const pkg = {name, description, url, members: []}

  members.forEach(m => {
    pkg.members.push({
      name: m.name === name
        ? 'constructor'
        : m.name,
      description: m.description,
      url: `${baseData.url}${name}#${m.name}`
    })
  })

  return pkg
}


module.exports = {
  model, modelPackage
}
