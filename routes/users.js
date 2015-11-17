'use strict'

var router = require('express').Router();
var User = require('../models/User');



router.post('/register', function(req,res){
  User.register(req.body, function(err,savedUser){
    res.status(err ? 400 : 200).send(err || savedUser)
  })
})

router.post('/login', function(req, res){
  User.authenticate(req.body, function(err, savedUser){
    res.status(err ? 400 : 200).send(err || savedUser)
  })
})

module.exports = router;