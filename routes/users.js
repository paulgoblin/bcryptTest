'use strict'

var router = require('express').Router();
var User = require('../models/User');

var authMiddleWare = require('../config/auth');


router.post('/register', function(req,res){
  console.log('req.cookies',req.cookies)
  User.register(req.body, function(err,savedUser){
    res.status(err ? 400 : 200).send(err || savedUser)
  })
})

router.post('/login', function(req, res){
  User.authenticate(req.body, function(err, user){
    // console.log('uesrId: ', JSON.stringify(user._id))
    res.cookie( 'userId', user._id);
    res.status(err ? 400 : 200).send(err || user)
  })
})

router.post('/logout', function(req, res){
  res.clearCookie('userId');
  res.send();
})

module.exports = router;