import resolve from 'rollup-plugin-node-resolve'
import fs from 'fs'

import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

import {camelCase, upperFirst} from 'lodash'

function makeConfig(pack) {
  const name = `Okiba${upperFirst(camelCase(pack))}`

  return [
    {
      input: `packages/${pack}/index.js`,
      output: [{
        name: name,
        file: `packages/${pack}/dist/index.js`,
        format: 'iife',
        globals: `okiba-${pack}`
      }],
      plugins: [
        babel(),
        resolve(),
        commonjs()
      ]
    },
    {
      input: `packages/${pack}/index.js`,
      output: [{
        name: name,
        file: `packages/${pack}/dist/index.min.js`,
        format: 'iife'
      }],
      plugins: [
        babel(),
        uglify({sourcemap: true}),
        resolve(),
        commonjs()
      ]
    },
    // {
    //   input: `packages/${pack}/index.js`,
    //   plugins: [
    //     babel()
    //   ],
    //   output: [
    //     { file: `packages/${pack}/dist/index.esm.js`, format: 'es', exports: 'named', sourcemap: true}
    //   ]
    // }
  ]
}

const configs = fs.readdirSync('./packages')
  .reduce((acc, pack) => {
    if (pack !== 'node_modules' && pack !== 'package.json' && pack !== 'README.md') {
      acc = acc.concat(makeConfig(pack))
    }
    return acc
  }, [])

export default configs
