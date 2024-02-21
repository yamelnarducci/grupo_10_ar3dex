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
    }
  }
  Address.init({
    street: { type: DataTypes.STRING, allowNull: false},
    province: { type: DataTypes.STRING, allowNull: false},
    city: { type: DataTypes.STRING, allowNull: false},
    postal_code: { type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};