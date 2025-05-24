const { DataTypes } = require('sequelize');
const sequelize = require('../../config')

const Colaboradores = sequelize.define('colaboradores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING
  },
  cargo: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
}, {
  tableName: 'colaboradores',
  timestamps: false
});

module.exports = Colaboradores;
