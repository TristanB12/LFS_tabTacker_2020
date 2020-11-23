const express = require('express');
const router = express.Router();

const authController = require('../controllers/authenticationController');
const policiesController = require('../controllers/policiesController');

router.post('/login', authController.login);
router.post('/register', policiesController.registerPolicy, authController.register);
module.exports = router;
