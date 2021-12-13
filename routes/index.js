const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/adduser' , actions.addNew)
router.post('/authenticator', actions.authenticate)
router.get('/getinfo', actions.getinfo)

module.exports = router