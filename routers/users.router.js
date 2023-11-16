const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controllers');

router.post('/', usersController.registerUser);
router.get('/', usersController.getUsers);
router.post('/login', usersController.loginUser);

module.exports = router;