"use strict";

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("card", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      cardtext: {
        type: Sequelize.TEXT,
      },
      imageurl: {
        type: Sequelize.STRING,
      },
      member: {
        type: Sequelize.BOOLEAN,
      },
      completed: {
        type: Sequelize.BOOLEAN,
      },
      share: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }).then(function () {
      queryInterface.createTable("mybucket", {
        card_id: {
          type: Sequelize.INTEGER,
          references: {model: "card", key: "id"},
        },
      });
    })
  },  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("card");
  },
};
