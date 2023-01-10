'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('addresses', 'updated_at', Sequelize.DATE);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('addresses', 'updated_at');
  }
};
