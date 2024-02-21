'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    id_user: {type: DataTypes.INTEGER, allowNull: false},
    date_ticket: {type: DataTypes.DATE, allowNull: false},
    total: {type: DataTypes.INTEGER, allowNull: false},
    id_method: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};