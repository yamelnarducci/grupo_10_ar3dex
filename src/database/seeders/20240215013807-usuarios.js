'use strict';

const usersJSON = require('../../data/users.json');

const usersDB = usersJSON.map((user, index) =>{
  return {
    name : user.name.trim(),
    surname : user.surname.trim(),
    email : user.email.trim(),
    password : user.password,
    image : user.userImage,
    phone : 1234567890,
    roleId : user.role == "user" ? 1 : 2,
    addressId : index + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      'Users', 
      usersDB
    );
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
  }
};
