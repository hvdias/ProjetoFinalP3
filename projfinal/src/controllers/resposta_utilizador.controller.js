const PerguntaQuiz = require("../models/pergunta_quiz.models");
const OpcaoPergunta = require("../models/opcao_pergunta.models");
const Utilizador = require("../models/utilizador.models");
const RespostaUtilizador = require("../models/resposta_utilizador.models");
const sequelize = require("../config/database");

const controllers = {};
sequelize.sync();

//função do endpoint /opcoes
controllers.resposta_list = async (req, res) => {
  //opção 1) retorna todas as respostas incluindo a pergunta, o utilizador, a opção e respetiva relação
  const dados = await RespostaUtilizador.findAll({include: [PerguntaQuiz, Utilizador, OpcaoPergunta]})
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados das respostas.",
      });
    });
      

  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.resposta_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await RespostaUtilizador.findAll({ where: { id_utilizador: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados da resposta.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.resposta_create = async (req, res) => {
  const { id_pergunta_quiz, id_utilizador, id_opcao } = req.body;
  const dados = await RespostaUtilizador.create({
    id_pergunta_quiz: id_pergunta_quiz,
    id_utilizador: id_utilizador,
    id_opcao: id_opcao,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar a resposta.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.resposta_update = async (req, res) => {
  const { id } = req.params;
  const { id_pergunta_quiz, id_opcao, id_utilizador } = req.body;
  const dados = await RespostaUtilizador.update(
    {
        id_pergunta_quiz: id_pergunta_quiz,
        id_utilizador: id_utilizador,
        id_opcao: id_opcao,
    },
    {
      where: { id_resposta: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados da resposta.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.resposta_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await RespostaUtilizador.destroy({ where: { id_utilizador: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover a resposta.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;