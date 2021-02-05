'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      image_url: Sequelize.STRING,
      mal_id: Sequelize.INTEGER.UNSIGNED,
      title: Sequelize.STRING,
      url: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Characters');
  }
};
