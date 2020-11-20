const express = require('express');
const router = express.Router();

const authController = require('../controllers/authenticationController');

router.post('/', authController.validUserAuth);
module.exports = router;
