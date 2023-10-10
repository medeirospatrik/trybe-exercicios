'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Books', [{
      title: "O pequenino",
      author: "Desconhecido",
      pageQuantity: 460,
      createdAt: new Date('2022-01-28T13:23:32.514Z'),
      updatedAt: new Date('2022-01-28T13:23:32.514Z'),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
