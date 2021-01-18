const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const compression = require('compression')
const app = express()
const port = 3000

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/submit', (req, res) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  console.log(email, firstName, lastName)
})

app.listen(port, () => {
  console.log(`Express server listening on ${port}`)
})
