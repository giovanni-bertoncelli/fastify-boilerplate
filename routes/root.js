// https://github.com/fastify/fluent-json-schema
const S = require('fluent-json-schema').default;

module.exports = async function (fastify, opts) {
  // this endpoint gets mounted on GET :3000/
  fastify.get('/', {
    schema: {
      // https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
      body: {
        name: S.string().required(),
        query: S.object().required()
      }
    },
    async handler(request, reply) {
      return { root: true }
    }
  })
}
