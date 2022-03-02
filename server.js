const fastify = require('fastify')({ logger: true })
  .register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: { title: 'fastify-api' },
    },
  })
  .register(require('./routes/'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
