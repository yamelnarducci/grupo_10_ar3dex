'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Method.init({
    name : { type: DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'Method',
  });
  return Method;
};