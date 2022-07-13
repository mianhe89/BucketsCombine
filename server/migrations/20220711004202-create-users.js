'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      usertext: {
        type: Sequelize.TEXT
      },
      oauthlogin: {
        type: Sequelize.STRING
      },
      userphotourl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function () {
      queryInterface.addColumn("card", "users_id", {
        type: Sequelize.INTEGER,
        references: {model: "users", key: "id"},
      });
    }).then(function () {
      queryInterface.createTable("userCardJoin", {
        users_id: {
          type: Sequelize.INTEGER,
          references: {model: "users", key: "id"},
        },
      });
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};