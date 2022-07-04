const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const https = require("https");
const fs = require("fs");
const app = express();
const port = process.env.DATABASE_PORT;
const controllers = require("./controllers");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    credentials: true,
    methods: ["GET", "OPTIONS"],
  })
);
app.use(cookieParser());

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});
// "hello World" 를 데이터베이스에서 찾아 변수에 저장한 뒤 사용 가능
app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
