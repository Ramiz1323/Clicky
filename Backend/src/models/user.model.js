const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: [true, "Fullname is required"]
    },
    username:{
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },
    email:{
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    bio:{
        type: String,
        default: ""
    },
    profileImage:{
        type: String,
        default: "https://ik.imagekit.io/ufnhisesq/instagram-posts/istockphoto-2177842022-1024x1024.jpg"
    }
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;