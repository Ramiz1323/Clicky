const express = require('express');
const postRouter = express.Router();
const { createPost, getPosts, getPostDetails } = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /api/posts/ [protected]
 * - req.body = { caption, image-file }
 */
postRouter.post('/', upload.single('image'), createPost);

/**
 * GET /api/posts/ [protected]
 */
postRouter.get('/', getPosts);

/**
 * GET /api/posts/details/:id [protected]
 * - req.params = { id }
 * - return a detail about a post with id & also check if the post belongs to the user or not
 */
postRouter.get('/details/:id', getPostDetails);

module.exports = postRouter;