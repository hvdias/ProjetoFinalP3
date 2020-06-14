const sequelize = require('sequelize');
const ligacao = new sequelize('quiz', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = ligacao;