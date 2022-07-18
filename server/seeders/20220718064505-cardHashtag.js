"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      await queryInterface.bulkInsert("cardHashtag", [
        {
          card_id: 1,
          hashtag_id: 1,
        },
        {
          card_id: 2,
          hashtag_id: 1,
        },
        {
          card_id: 15,
          hashtag_id: 2,
        },
        {
          card_id: 7,
          hashtag_id: 3,
        },
        {
          card_id: 7,
          hashtag_id: 4,
        },
        {
          card_id: 19,
          hashtag_id: 1,
        },
        {
          card_id: 5,
          hashtag_id: 1,
        },
      ]);
    }
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("cardHashtag", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
