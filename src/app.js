const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { API_VERSION } = require('./config.js');

// Load routings
const authRoutes = require('./routers/auth.js');
const userRoutes = require('./routers/user.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
