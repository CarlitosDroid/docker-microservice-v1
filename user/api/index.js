'use strict'
const express = require('../server')
const app = express()
const { serverPort } = require('../config/server')
const router = require('./register')

app.use('/register', router)

app.listen(serverPort, () => {
    console.log(`User service is up and running on localhost ${serverPort}`)
})