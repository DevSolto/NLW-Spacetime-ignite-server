import fastify from 'fastify'

const app = fastify()

app.get('/', (req, res) => {
  return 'oi'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('deu certo!')
  })