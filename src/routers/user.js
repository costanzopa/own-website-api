const express = require('express');
const UserController = require('../controllers/user.js');

const api = express.Router();

api.post('/sign-up', UserController.signUp);

module.exports = api;
