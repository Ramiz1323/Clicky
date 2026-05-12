const authModel = require("../models/auth.model.js");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Fill all details",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  const isExistingUser = await authModel.findOne({ email });
  if (isExistingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  const user = await authModel.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Fill all details",
    });
  }

  const isExistingUser = await authModel.findOne({ email });
  if (!isExistingUser) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isMatch =
    crypto.createHash("md5").update(password).digest("hex") === isExistingUser.password;
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { id: isExistingUser._id, username: isExistingUser.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    data:{
        username: isExistingUser.username,
        email: isExistingUser.email
    },
  });
}

async function profile(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  res.status(200).json({
    message: "User fetched successfully",
    data: {
      username: decoded.username,
      email: decoded.email
    }
  });
}

function logout(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logout successful",
  });
}

module.exports = {
    register,
    login,
    logout,
    profile,
};