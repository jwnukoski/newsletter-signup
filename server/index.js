const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const compression = require('compression')
const api = require('./api-key.js')
const app = express()
const port = 3000

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('build'))

app.post('/subscribe', (req, res) => {
  const headers = {
    auth: {
      username: 'subscribe',
      password: `${api.mailChimpApiKey}`
    }
  }

  const data = {
    members: [
      {
        email_address: req.body.email,
        status: 'subscribed',
        // Defaults (see: mailchimp > audience > settings > audience fields and merge tags)
        merge_fields: {
          FNAME: req.body.firstName,
          LNAME: req.body.lastName
        }
      }
    ],
    update_existing: true
  }

  axios.post(`https://${api.mailChimpApiKeyServer}.${api.mailChimpApiServerBase}/lists/${api.mailChimpAudienceId}`, data, headers).then(mailChimpResponse => {
    if (mailChimpResponse.data.errors.length > 0) {
      console.log('error length')
      throw new Error(JSON.stringify(mailChimpResponse.data.errors), mailChimpResponse.response.status)
    } else if (mailChimpResponse.request.res.statusCode !== 200) {
      throw new Error(`Mailchimp:
        Header statusCode: ${mailChimpResponse.request.res.statusCode}
        Header statusMessage: ${mailChimpResponse.request.res.status}
        Status: ${mailChimpResponse.data.status}
        Title: ${mailChimpResponse.data.tile}
        Type: ${mailChimpResponse.data.type}
        Detail: ${mailChimpResponse.data.detail}`,
      mailChimpResponse.request.res.statusCode)
    }

    res.status(200).send(`${req.body.email} subscribed`)
  }).catch((error, errorCode = 400) => {
    console.log(error)
    res.status(errorCode).send(error)
  })
})

app.listen(port, () => {
  console.log(`Express server listening on ${port}`)
})
