const express = require("express");
const router = express.Router();

const createCard = require("../controller/card/create");

router.post("/cardcreate", createCard);
module.exports = router;
