"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hashtags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hashname: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }).then(function () {
      queryInterface.addColumn("cardHashtag", "hashtag_id", {
        type: Sequelize.INTEGER,
        references: {model: "hashtag", key: "id"},
      });
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("hashtags");
  },
};
