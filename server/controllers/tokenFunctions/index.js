require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "3h" });
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie("jwtAccessToken", accessToken);
  },

  isAuthorized: (req) => {},
};
