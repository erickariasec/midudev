const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

// Variables de entorno del sistema operativo
console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello world')
})

// server.listen(0, () => {
//   console.log(`Server listening on port ${server.address().port}`);
// });

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
