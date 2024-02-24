'use strict';

const productsJSON = require('../../data/products.json')

const imagesDB = productsJSON.flatMap(product => 
  {
      return product.images.map(image => {
          return {
              name : image,
              id_product : product.id,
              createdAt : new Date(),
              updatedAt : new Date(),
          }
      })
  })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Images', imagesDB, {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});

  }
};