const { users } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "모든 항목을 입력해주세요" });
  } else {
    const [userinfo, created] = await users.findOrCreate({
      where: { username: username, email: email, password: password }, // 이거 고민좀해보자
    });
    if (!created) {
      res.status(409).json({ message: "이미 사용중인 이메일입니다" });
    } else {
      const payload = {
        username: userinfo.username,
        email: userinfo.email,
      };

      const accessToken = generateAccessToken(payload);
      sendAccessToken(res, accessToken);

      res.status(200).json({ message: "회원가입 성공" });
    }
  }
};
