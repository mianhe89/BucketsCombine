const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const mypagesRouter = require("./mypage");
const mainRouter = require("./mainpage");
const { card } = require("../models");
try {
  router.get("/", async (req, res) => {
    const cardinfo = await card.findOne({
      where: {
        users_id: 1,
      },
    });

    res.send({ data: { cardinfo } });
    console.log({ data: { cardinfo } });
  });
} catch (err) {
  console.log(err);
}

// router.use("/users", usersRouter);
// router.use("/mypages", mypagesRouter);
// router.use("/mainPage", mainRouter);
//
module.exports = router;
