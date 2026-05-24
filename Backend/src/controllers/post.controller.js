const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPost(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "Clickly",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPosts(req, res){
    const userId = req.user.id;
    const posts = await postModel.find({user: userId})

    res.status(200).json({
        message: "Posts fetched successfully",
        posts,
    })

}

async function getPostDetails(req, res){
    const userId = req.user.id;
    const postId = req.params.id;

    const post = await postModel.findById(postId);

    if(!post){
        return res.status(404).json({
            message: "Post not found",
        })
    }

    const isValidUser = post.user.toString() === userId;

    if(!isValidUser){
        return res.status(401).json({
            message: "Forbidden access to the post details",
        })
    }

    res.status(200).json({
        message: "Post details fetched successfully",
        post,
    })
}

module.exports = {
  createPost,
  getPosts,
  getPostDetails,
};
