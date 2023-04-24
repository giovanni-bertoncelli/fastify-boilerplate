const fp = require('fastify-plugin');

function plugin(fastify, opts, done) {
  fastify.addHook('onRequest', (request, reply) => authenticate(fastify, request, reply));
  fastify.addHook('preValidation', (request, reply) => authorize(fastify, request, reply));
  done();
}

module.exports = fp(plugin, {
  name: 'auth',
  dependencies: ['config', 'jwt']
});

async function authenticate(request, reply) {
  try {
    // https://www.npmjs.com/package/@fastify/jwt
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
}

async function authorize(request, reply) {
  // authorization logic here
}