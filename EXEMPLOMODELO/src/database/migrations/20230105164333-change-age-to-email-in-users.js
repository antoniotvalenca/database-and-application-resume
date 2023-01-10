'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'age', 'email');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'email', 'age');
  }
};
