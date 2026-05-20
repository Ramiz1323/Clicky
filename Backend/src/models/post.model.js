const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: [true, "imgUrl is required for creating a post"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, "user Id is required for creating a post"]
    }
});

const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;