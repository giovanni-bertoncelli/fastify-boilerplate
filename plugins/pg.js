const fp = require('fastify-plugin');

function plugin(fastify, opts, done) {
  const { config } = fastify;

  // see: https://github.com/fastify/fastify-postgres
  fastify.register(require('@fastify/postgres'), {
    connectionString: config.dbConnectionString
  });
  // now fastify.pg is a suitable Postgres connection pool

  done();
}

module.exports = fp(plugin, {
  name: 'pg',
  dependencies: ['config']
});