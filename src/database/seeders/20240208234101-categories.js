'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'figura',
        image: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'llavero',
        image: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'mate',
        image: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'mascara',
        image: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'picador',
        image: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    

    await queryInterface.bulkDelete('People', null, {});
    
  }
};
