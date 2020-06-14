const sequelize = require('sequelize');
const db = require('../config/database');

var Utilizador = db.define('utilizador', {
    id_utilizador: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    nome: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
}, {
    timestamps:false,
    tableName: 'utilizador'
});

module.exports = Utilizador;