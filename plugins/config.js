const fp = require('fastify-plugin');

const config = require('config');
const configDev = require('config.dev');
const { merge, defaults, defaultsDeep } = require('lodash');

function plugin(fastify, opts, done) {
  let mergedConfig = config;

  if (process.env.NODE_ENV === 'dev') {
    mergedConfig = defaultsDeep(configDev, config)
  }

  fastify.decorate(
    'config',
    mergedConfig
  )
  // now fastify.config contains the final configuration

  done();
}

module.exports = fp(plugin, {
  name: 'config'
});