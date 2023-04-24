const fp = require('fastify-plugin');

function plugin(fastify, opts, done) {
  const { mailer } = fastify.config;

  fastify.register(require('fastify-mailer'), {
    defaults: { from: mailer.from },
    transport: {
      host: mailer.host,
      port: mailer.port,
      secure: mailer.secure, // use TLS
      auth: {
        user: mailer.user,
        pass: mailer.psw
      }
    }
  })

  fastify.decorate('handlebars', require('handlebars'));

  done();
}

module.exports = fp(plugin, {
  name: 'mailer',
  dependencies: ['config']
});