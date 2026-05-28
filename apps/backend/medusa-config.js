/**
 * JavaScript entry point for Medusa config.
 *
 * `medusa db:migrate` and `medusa start` call require('medusa-config') but Node
 * cannot load TypeScript (.ts) files directly without a register hook.
 *
 * After `medusa build`, the compiled version lives in .medusa/server/medusa-config.js.
 * In development, `medusa develop` registers a TypeScript transpiler before loading config.
 */
const path = require('path')
const fs = require('fs')

const compiledConfig = path.join(__dirname, '.medusa', 'server', 'medusa-config.js')
const sourceConfig = path.join(__dirname, 'medusa-config.ts')

if (fs.existsSync(compiledConfig)) {
  // Production / post-build: use compiled version (no TypeScript needed)
  module.exports = require(compiledConfig)
} else if (fs.existsSync(sourceConfig)) {
  // Development: TypeScript transpiler must already be registered by the caller
  // (e.g. `medusa develop` sets up @swc/core before loading config)
  module.exports = require(sourceConfig)
} else {
  throw new Error(
    'medusa-config not found. Run "medusa build" before "medusa db:migrate" / "medusa start".'
  )
}
