const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// Public routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// Protected routes (use validateToken middleware here for routes that need authentication)
router.use(validateToken);

// Example of a protected route
router.route("/profile").get((req, res) => {
    res.send("This is a protected route");
});

module.exports = router;
