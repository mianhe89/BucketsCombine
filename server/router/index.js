const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const mypagesRouter = require("./mypage");
const mainRouter = require("./mainpage");

const abc = require("../controller/card/create");

router.get("/", abc);

// router.use("/users", usersRouter);
// router.use("/mypages", mypagesRouter);
// router.use("/mainPage", mainRouter);
//
module.exports = router;
