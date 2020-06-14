const sequelize = require('sequelize');
const Quiz = require('./quiz.models');
const db = require('../config/database');

var PerguntaQuiz = db.define('pergunta_quiz', {
    id_pergunta_quiz: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    id_quiz: sequelize.INTEGER,
    pergunta: sequelize.STRING,
}, {
    timestamps:false,
    tableName: 'pergunta_quiz'
});
Quiz.hasMany(PerguntaQuiz, {foreignKey: 'id_quiz'});
PerguntaQuiz.belongsTo(Quiz, {foreignKey:'id_quiz'});

module.exports = PerguntaQuiz;