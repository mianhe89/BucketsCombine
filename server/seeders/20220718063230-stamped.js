"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      await queryInterface.bulkInsert("stamped", [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("stamped", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
