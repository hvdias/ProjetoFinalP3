const sequelize = require('sequelize');
const db = require('../config/database');

var Quiz = db.define('quiz', {
    id_quiz: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    titulo: sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'quiz'
});

module.exports = Quiz;