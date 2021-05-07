var express = require('express')
var router = express.Router()

var auth = require('../middleware/auth')

router.use(auth)

router.get('/', (req, res)=>{
    res.send("hello sparcs")
})

router.get('/like', (req, res) => {
    res.send("hello sparcs like")
})

router.get('/hololo', (req, res)=>{
    res.send("hello sparcs hololo")
})

module.exports = router;