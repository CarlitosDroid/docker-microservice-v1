'use strict'

const UserService = require('../dal/userService')
const express = require('../server')

var router = express.Router()

router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

//define the home page route
router.get('/', function(req, res) {
    UserService.getRegister().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(`ERRORRRRRR!!!!! ${err}`)
    });
})

module.exports = router