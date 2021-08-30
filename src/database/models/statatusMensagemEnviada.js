const Sequelize = require('sequelize');
const database = require('../db');

const StatusMensagemEnviada = database.define('statusMensagemEnviada', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  assunto: {
    type: Sequelize.STRING(1000),
    allowNull: false
  },
  mensagem: {
    type: Sequelize.STRING,
    allowNull: false
  },
  retorno: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = StatusMensagemEnviada;