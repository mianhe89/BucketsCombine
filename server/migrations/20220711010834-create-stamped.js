"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stamped", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id: {
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
      }
        .then(function () {
          queryInterface.addColumn("userCardJoin", "stamped_id", {
            type: Sequelize.INTEGER,
            references: { model: "stamped", key: "id" },
          });
        })
        .then(function () {
          queryInterface.createTable("mybucket", {
            card_id: {
              type: Sequelize.INTEGER,
              references: { model: "card", key: "id" },
            },
          });
        })
        .then(function () {
          queryInterface.addColumn("mybucket", "usersCardJoin_id", {
            type: Sequelize.INTEGER,
            references: { model: "usersCardJoin", key: "id" },
          });
        }),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stamped");
  },
};
