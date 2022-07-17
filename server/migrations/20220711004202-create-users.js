"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        usertext: {
          type: Sequelize.TEXT,
        },
        oauthlogin: {
          type: Sequelize.STRING,
        },
        userphotourl: {
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
        queryInterface.createTable("userCardJoin", {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          users_id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "users", key: "id" },
          },
        });
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface
      .dropTable("mybucket")
      .then(() => queryInterface.dropTable("userCardJoin"));
  },
};

// 이것은 머지 테스트용 입니다.
//
//
//
//
//
//
//
//

// 여기는 충돌이 없는 부분입니다.
