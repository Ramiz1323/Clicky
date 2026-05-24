const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({});

const followModel = mongoose.model('follows', followSchema);

module.exports = followModel;