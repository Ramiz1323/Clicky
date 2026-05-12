const authRouter = require('express').Router();
const { login, register, logout, profile } = require('../controllers/auth.controller.js');

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/profile', profile);
authRouter.post('/logout', logout);

module.exports = authRouter;