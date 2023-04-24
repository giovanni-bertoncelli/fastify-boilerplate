require('dotenv').config();
require('make-promises-safe');
require('app-module-path').addPath(process.cwd())

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const fastifySensible = require('@fastify/sensible')
const fastifyHealthcheck = require('fastify-healthcheck')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = function (fastify, opts) {
  // Place here your custom code!
  fastify.register(fastifySensible);
  fastify.register(fastifyHealthcheck);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
    options: { prefix: '/api' }
  })
}
