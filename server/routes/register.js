const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const policiesController = require('../controllers/policiesController');

router.post('/', policiesController.registerPolicy, registerController.register);

module.exports = router;