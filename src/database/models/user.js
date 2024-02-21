'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: { type: DataTypes.STRING, allowNull: false},
    surname: { type: DataTypes.STRING, allowNull: false},
    id_address: {type: DataTypes.INTEGER, allowNull: false},
    phone: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false},
    id_role: {type: DataTypes.INTEGER, allowNull: false},
    password: { type: DataTypes.STRING, allowNull: false},
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};