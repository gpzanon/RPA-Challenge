const Sequelize = require('sequelize');
const database = require('../db');

const Contato = database.define('contato', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  ddd: {
    type: Sequelize.STRING(3),
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING(15),
    allowNull: false
  }
})

module.exports = Contato;