const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/auth.routes.js');
const postRouter = require('./routes/post.routes.js');
const userRouter = require('./routes/user.routes.js');

// Application Middlewares Setup
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://clicky.skramizraza.tech",
        "http://clicky.skramizraza.tech",
        process.env.FRONTEND_URL
    ].filter(Boolean), // Allowed frontend origins
    credentials: true
}));

// routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.get("/", (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: "Clicky Backend is running..."
     });
});

module.exports = app;