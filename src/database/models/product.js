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
    }
  }
  Product.init({
    name : { type: DataTypes.STRING, allowNull: false},

    price: {type: DataTypes.INTEGER, allowNull: false},

    mainImage:{ type: DataTypes.STRING, allowNull: false},

    images: { type: DataTypes.STRING},

    categoryId: { type: DataTypes.INTEGER},

    description: {type: DataTypes.TEXT, allowNull: false},

    offer: { type: DataTypes.STRING},

    discount: { type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};