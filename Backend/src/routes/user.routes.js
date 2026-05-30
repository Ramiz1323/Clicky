const userRouter = require('express').Router();
const { followUser, unfollowUser } = require('../controllers/user.controller.js');
const { identifyUser } = require('../middlewares/auth.middleware.js');

/**
 * POST /api/user/follow/:username
 * Description: Follow a user
 * Protected: Yes
 * 
 */
userRouter.post('/follow/:username', identifyUser, followUser);

/**
 * POST /api/user/unfollow/:username
 * Description: Unfollow a user
 * Protected: Yes
 * 
 */
userRouter.post('/unfollow/:username', identifyUser, unfollowUser);

module.exports = userRouter;