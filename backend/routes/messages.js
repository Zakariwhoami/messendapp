const express = require('express');
const { registerUser, loginUser } = require('../Controllers/userController');

const router = express.Router();


router.post('/messager', messageUser);

module.exports = router;