const Router = require('express').Router
const identityHandler = require('./controllers/IdentityHandler');

const route = Router()

route.post('/Login', identityHandler.Login);
route.post('/signup', identifyHandler.Signup);


module.exports = route;