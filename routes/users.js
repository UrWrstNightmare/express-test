var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('hello users');
});

router.get('/id/:id', (req, res) => {
  res.send(req.params.id + " page")
})

router.get('/id/:id/login', (req, res) => {
  if (req.query.password) {
    res.send(`You logged in as ID:${req.params.id}, PW:${req.query.password}`)
  }
  else {
    res.send('You need to enter a password!')
  }
})

module.exports = router;
