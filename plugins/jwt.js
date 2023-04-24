const fastifyJwt = require('@fastify/jwt');
const fp = require('fastify-plugin');

function plugin(fastify, opts, done) {
  const { config } = fastify;
  fastify.register(fastifyJwt, {
    secret: config.jwtSecret
  })
  done();
}

module.exports = fp(plugin, {
  name: 'jwt',
  dependencies: ['config']
});