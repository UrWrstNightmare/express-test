var express = require('express')
var router = express.Router()

var auth = require('../middleware/auth')

router.use(auth)

router.get('/', (req, res)=>{
    res.send("hello board")
})

router.get('/write', (req, res) => {
    res.send("hello board write")
})

module.exports = router