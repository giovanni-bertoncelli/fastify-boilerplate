'use strict'

module.exports = async function (fastify, opts) {
  // here we can use fastify.config registered by plugins/config.js

  // this endpoint gets mounted on GET :3000/resources/
  fastify.get('/', async function (request, reply) {
    return { json: true };
  })

  // this endpoint gets mounted on GET :3000/resources/:id
  fastify.get('/:id', async function (request, reply) {
    const client = await fastify.pg.connect()
    try {
      const { rows } = await client.query(
        'SELECT id, name, description FROM resources WHERE id=$1',
        [req.params.id],
      )
      // Note: avoid doing expensive computation here, this will block releasing the client
      return rows;
    } finally {
      // Release the client immediately after query resolves, or upon error
      client.release()
    }
  })

  fastify.post('/sendMailTest', async function (request, reply) {
    const { mailer, handlebars } = fastify

    // https://handlebarsjs.com/
    const template = handlebars.compile("Name: {{name}}");

    await new Promise((res, rej) => {
      mailer.sendMail({
        to: 'someone@example.tld',
        subject: 'example',
        html: template({ name: "Nils" })
      }, (errors, info) => {
        if (errors) {
          fastify.log.error(errors)

          return rej(500)
        }

        return res();
      })
    })

    return {
      status: 'ok',
      message: 'Email successfully sent',
    }
  })
}
