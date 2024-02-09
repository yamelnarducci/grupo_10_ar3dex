'use strict';

const productsJSON = require('../../data/products.json')

const productsDB = productsJSON.map(({name,price,category,description,image,discount}) => {
  return {
    name: name.trim(),
    price,
    discount,
    description : description.trim(),
    image,
    categoryId : category == "figura" ? 1 : 
                  category == "llavero" ? 2 : 
                  category == "mate" ? 3 : 
                  category == "mascara" ? 4 : 
                  category == "picador" ? 5 : "Sin categoria",
    createdAt : new Date(),
    updatedAt : new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Products",
      productsDB,
      {}
    );

  },

  async down (queryInterface, Sequelize) {
    

    await queryInterface.bulkDelete('Products', null, {});
    
  }
};
