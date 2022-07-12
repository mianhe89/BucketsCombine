"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("stamped", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        card_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
        cardtext: {
          type: Sequelize.STRING,
        },
        imageurl: {
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
      })
      .then(function () {
        queryInterface.addColumn("userCardJoin", "userCardJoin_stamped_id", {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "stamped", key: "id" },
        });
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface
      .dropTable("cardHashtag")
      .then(() => queryInterface.dropTable("stamped"));
  },
};
