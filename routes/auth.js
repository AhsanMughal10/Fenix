const express = require('express');
const router = express.Router();
const {
    loginRider,
    registerRider
} = require('../controllers/auth')

router.post('/loginRider', loginRider)
router.post('/registerRider', registerRider)

module.exports =  router 