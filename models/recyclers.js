'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recyclers = sequelize.define('Recyclers', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    interests: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Recyclers.associate = function(models) {
    // associations can be defined here
  };
  return Recyclers;
};