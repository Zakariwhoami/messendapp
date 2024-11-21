const express = require('express');
const { registerUser, loginUser } = require('../Controllers/userController');

const router = express.Router();

router.post('/chats', registerUser);

module.exports = router;
