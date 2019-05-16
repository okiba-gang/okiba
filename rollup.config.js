import resolve from 'rollup-plugin-node-resolve'
import fs from 'fs'

import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

function makeConfig(pack) {
  return [
    {
      input: `packages/${pack}/index.js`,
      output: [{
        name: pack,
        file: `packages/${pack}/dist/index.umd.js`,
        format: 'umd',
        globals: `okiba-${pack}`
      }],
      plugins: [
        babel(),
        resolve(), // so Rollup can find external dependencies
        commonjs() // so Rollup can convert external deps to an ES module
      ]
    },
    {
      input: `packages/${pack}/index.js`,
      output: [{
        name: pack,
        file: `packages/${pack}/dist/index.umd.min.js`,
        format: 'umd'
      }],
      plugins: [
        babel(),
        uglify({sourcemap: true}),
        resolve(), // so Rollup can find external dependencies
        commonjs() // so Rollup can convert external deps to an ES module
      ]
    },
    {
      input: `packages/${pack}/index.js`,
      plugins: [
        babel()
      ],
      output: [
        { file: `packages/${pack}/dist/index.esm.js`, format: 'es', exports: 'named', sourcemap: true}
      ]
    }
  ]
}

const configs = fs.readdirSync('./packages')
  .reduce((acc, pack) => acc.concat(makeConfig(pack)), [])

export default configs
