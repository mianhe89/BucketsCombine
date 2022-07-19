const express = require("express");
const router = express.Router();
const createCard = require("../controller/card/createCard");

router.post("/", createCard);

module.exports = router;
