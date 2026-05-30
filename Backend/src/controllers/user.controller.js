const followModel = require("../models/follow.model.js");
const userModel = require("../models/user.model.js");

async function getUserProfile(req, res){
  try {
    const user = await userModel.findOne({ username: req.user.username });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function followUser(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const isFollowExists = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isFollowExists) {
    return res.status(404).json({
      message: "User you are trying to follow does not exist",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if (isAlreadyFollowing) {
    return res.status(400).json({
      message: "You are already following this user",
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: "User followed successfully",
    followRecord,
  });
}

async function unfollowUser(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "You cannot unfollow yourself",
    });
  }

  const isFollowExists = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isFollowExists) {
    return res.status(404).json({
      message: "User you are trying to unfollow does not exist",
    });
  }

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if (!isUserFollowing) {
    return res.status(400).json({
      message: "You are not following this user",
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${followeeUsername} successfully`,
  });
}

async function followStatus(req, res) {
    const user = req.user.username;

    const request = await followModel.findOne({
        followee: user,
        status: "pending",
    });

    return res.status(200).json({ request });
}

async function acceptUser(req, res) {
    const user = req.user.username;
    const follower = req.params.username;

    const request = await followModel.findOne({ follower: follower, followee: user, status: "pending" });
    if (!request) {
        return res.status(404).json({ message: "No pending request found" });
    }

    await followModel.findByIdAndUpdate(request._id, { status: "accepted" });

    return res.status(200).json({
        message: `Accepted ${follower}'s request to follow you`,
    });
}

async function rejectUser(req, res) {
    const user = req.user.username;
    const follower = req.params.username;

    const request = await followModel.findOne({ follower: follower, followee: user });
    if (!request) {
        return res.status(404).json({ message: "No pending request found" });
    }

    await followModel.findByIdAndDelete(request._id);

    return res.status(200).json({
        message: `Rejected ${follower}'s request to follow you`,
    });
}

module.exports = {
  getUserProfile,
  followUser,
  unfollowUser,
  followStatus,
  acceptUser,
  rejectUser,
};
