#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync
const { packages } = require('./manifest.json')

const cmd = spawnSync('npm', ['i', '--save', ...packages], { encoding: 'utf-8' })
console.log(cmd.stdout.toString())
