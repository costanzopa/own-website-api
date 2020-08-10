const express = require('express');
const AuthController = require('../controllers/auth.js');

const api = express.Router();

api.post('/auth/refreshToken', AuthController.refreshAccessToken);

module.exports = api;
