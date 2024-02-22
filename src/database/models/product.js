'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      Product.hasMany(models.Image, {
        as:'images',
        foreignKey:'id_product'
      })
    }
  }
  Product.init({
    name : { type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    offer: { type: DataTypes.BOOLEAN, allowNull: false},
    discount: { type: DataTypes.INTEGER, allowNull: false},
    mainImage: { type: DataTypes.STRING, allowNull: false},
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};