const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Express server listening on ${port}`)
})
