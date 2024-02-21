'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    id_ticket: {type: DataTypes.INTEGER, allowNull: false},
    id_product: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.DECIMAL, allowNull: false},
    quantity: {type: DataTypes.TINYINT, allowNull: false}
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};