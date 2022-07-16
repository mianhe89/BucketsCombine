const express = require("express");
const router = express.Router();

const signupController = require("../controllers/users/signup");
const loginController = require("../controllers/users/login");
const logoutController = require("../controllers/users/logout");
const kakaoController = require("../controllers/users/kakaoLogin");

app.use("/auth", controllers.auth);
app.use("/signup", controllers.signup);
app.use("/signin", controllers.signin);
app.use("/signout", controllers.signout);

module.exports = router;
