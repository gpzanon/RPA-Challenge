const Sequelize = require('sequelize');
const database = require('../db');

const Pessoa = database.define('pessoa', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(300),
    allowNull: true
  },
  cidade: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  estado: {
    type: Sequelize.STRING(150),
    allowNull: false
  }
})

module.exports = Pessoa;