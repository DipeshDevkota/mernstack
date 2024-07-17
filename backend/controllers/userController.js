const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = new User({
        name,
        email,
        password,
    });

    const createdUser = await user.save();

    if (createdUser) {
        res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            token: generateToken(createdUser._id), // assuming you have a token generation function
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// Login a user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id), // assuming you have a token generation function
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = {
    registerUser,
    loginUser,
};
