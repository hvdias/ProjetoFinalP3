const sequelize = require('sequelize');
const PerguntaQuiz = require('./pergunta_quiz.models');
const db = require('../config/database');

var OpcaoPergunta = db.define('opcao_pergunta', {
    id_opcao: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    id_pergunta_quiz: sequelize.INTEGER,
    opcao: sequelize.STRING,
    correto: sequelize.STRING,
}, {
    timestamps:false,
    tableName: 'opcao_pergunta'
});
OpcaoPergunta.belongsTo(PerguntaQuiz, {foreignKey:'id_pergunta_quiz'});

module.exports = OpcaoPergunta;