const { cards } = require("../../models");

module.exports = async (req, res) => {
  const cardinfo = await cards.findAll({});
  console.log({ data: { cardinfo } });
  res.send({ data: { cardinfo } });
};
