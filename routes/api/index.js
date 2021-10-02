const express = require('express');
const route = express.Router();

route.use('/register', require('./register'))
route.use('/login', require('./login'));

module.exports = route;