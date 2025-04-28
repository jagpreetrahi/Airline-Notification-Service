'use strict';
/** @type {import('sequelize-cli').Migration} */
const {EnumData} = require('../utils/common')
const {PENDING , CONFIRM , FAILED} = EnumData.email_types
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull : false
      },
      content: {
        type: Sequelize.STRING,
        allowNull : false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull : false,
        values : [PENDING , FAILED , CONFIRM],
        defaultValue : PENDING
      },
      email : {
         type : Sequelize.STRING,
         allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Emails');
  }
};