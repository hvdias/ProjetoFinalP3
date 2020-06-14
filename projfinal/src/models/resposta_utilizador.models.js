const sequelize = require('sequelize');
const PerguntaQuiz = require('./pergunta_quiz.models');
const OpcaoPergunta = require('./opcao_pergunta.models');
const Utilizador = require('./utilizador.models');
const db = require('../config/database');

var RespostaUtilizador = db.define('resposta_utilizador', {
    id_resposta: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    id_pergunta_quiz: sequelize.INTEGER,
    id_opcao: sequelize.INTEGER, 
    id_utilizador: sequelize.INTEGER,
}, {
    timestamps:false,
    tableName: 'resposta_utilizador'
});
RespostaUtilizador.belongsTo(Utilizador, {foreignKey: 'id_utilizador'});
RespostaUtilizador.belongsTo(PerguntaQuiz, {foreignKey: 'id_pergunta_quiz'});
RespostaUtilizador.belongsTo(OpcaoPergunta, {foreignKey: 'id_opcao'});

module.exports = RespostaUtilizador;