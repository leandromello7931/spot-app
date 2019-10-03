const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const routes = express.Router();


//arrow functions
routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);
module.exports = routes;