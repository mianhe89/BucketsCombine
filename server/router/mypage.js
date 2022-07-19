const express = require("express");
const router = express.Router();
const createCard = require("../controller/card/createCard");

router.post("/create", createCard);

module.exports = router;
