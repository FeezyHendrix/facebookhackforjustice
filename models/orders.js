'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    size: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};