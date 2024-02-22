'use strict';

const productsJSON = require('../../data/products.json')

const productsDB = productsJSON.map(({name, price, mainImage, description, offer, discount, category }) => {
  return {
    name: name.trim(),
    price,
    discount,
    description : description.trim(),
    mainImage: mainImage.trim(),
    offer,
    categoryId :  category == "picador" ? 1 : 
                  category == "mate" ? 2 : 
                  category == "figura" ? 3 : 
                  category == "mascara" ? 4 : 
                  category == "llavero" ? 5 : "sin_categoria",
    createdAt : new Date(),
    updatedAt : new Date(),
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Products', productsDB, {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Products', null, {});

  }
};