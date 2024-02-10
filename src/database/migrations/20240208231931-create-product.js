'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      discount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      mainImage: {
        type: Sequelize.STRING,
        allowNull: true
      },

      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};