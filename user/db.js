'use strict'

const mysql = require('mysql')
const { dbConfig } = require('./config/db')

const dbConnection = mysql.createConnection(dbConfig)

module.exports = dbConnection