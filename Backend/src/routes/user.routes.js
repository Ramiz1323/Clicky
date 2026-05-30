const userRouter = require('express').Router();
const { getUserProfile, followUser, unfollowUser, followStatus, acceptUser, rejectUser } = require('../controllers/user.controller.js');
const { identifyUser } = require('../middlewares/auth.middleware.js');


/**
 * GET /api/user/profile
 * Description: Get user profile
 * Protected: Yes
 * 
 */
userRouter.get('/profile', identifyUser, getUserProfile);

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

/**
 * POST /api/user/status
 * Description: Check follow status
 * Protected: Yes
 * 
 */
userRouter.post("/status", identifyUser, followStatus);

/**
 * POST /api/user/status/accept/:username
 * Description: Accept follow request
 * Protected: Yes
 * 
 */
userRouter.post("/status/accept/:username", identifyUser, acceptUser);

/**
 * POST /api/user/status/reject/:username
 * Description: Reject follow request
 * Protected: Yes
 * 
 */
userRouter.post("/status/reject/:username", identifyUser, rejectUser);

module.exports = userRouter;