'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.hasMany(models.User,{
        as : 'user',
        foreignKey : 'addressId'
      })
    }
  }
  Address.init({
    street: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};