"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hashtags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtags.init(
    {
      hashname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hashtag",
    }
  );
  return hashtags;
};