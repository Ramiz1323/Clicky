const userRouter = require('express').Router();
const { followUser } = require('../controllers/user.controller.js');
const { identifyUser } = require('../middlewares/auth.middleware.js');

userRouter.post('/follow/:username', identifyUser, followUser);

module.exports = userRouter;