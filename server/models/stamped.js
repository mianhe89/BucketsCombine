'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stamped extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stamped.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    cardtext: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stamped',
  });
  return stamped;
};