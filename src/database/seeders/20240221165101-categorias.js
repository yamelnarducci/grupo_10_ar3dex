'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

      await queryInterface.bulkInsert('Categories', [
        {
          name: 'picador',
          image: "Category-1.png",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'mate',
          image: "Category-2.png",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'figura',
          image: "Category-3.png",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'mascara',
          image: "Category-4.png",
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'llavero',
          image: "Category-5.png",
          createdAt: new Date(),
          updatedAt: new Date()

        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    
  }
};