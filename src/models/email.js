'use strict';
const {
  Model
} = require('sequelize');
const {EnumData} = require('../utils/common')
const {PENDING , CONFIRM , FAILED} = EnumData.email_types
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Email.init({
    subject: {
      type : DataTypes.STRING,
      allowNull : false
    },
    content: {
      type : DataTypes.STRING,
      allowNull : false
    },
    status: {
      type : DataTypes.ENUM,
      allowNull : false,
      values : [PENDING , FAILED , CONFIRM],
      defaultValue : PENDING
    },
    email: {
      type : DataTypes.STRING,
      
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Email',
  });
  return Email;
};