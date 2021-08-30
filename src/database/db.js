const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'rpadb',
  'root',
  'root',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
)

module.exports = sequelize;