'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', { 
      id: {
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
       title: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       author: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       pageQuantity: Sequelize.INTEGER,
       createdAt: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
       }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
